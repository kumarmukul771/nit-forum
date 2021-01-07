const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var crypto = require("crypto");
const nodemailer = require("nodemailer");

const HttpError = require("../models/http-error");
const User = require("../models/user");
const Token = require("../models/verificationToken");

const getUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find({}, "-password");
  } catch (err) {
    const error = new HttpError(
      "Fetching users failed, please try again later.",
      500
    );
    return next(error);
  }
  res.json({ users: users.map((user) => user.toObject({ getters: true })) });
};

// =============================================================================  */
// =============================================================================  */
// =============================================================================  */
const signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  const { name, email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      "Signing up failed, please try again later.",
      500
    );
    return next(error);
  }

  if (existingUser) {
    const error = new HttpError(
      "User exists already, please login instead.",
      422
    );
    return next(error);
  }

  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    const error = new HttpError(
      "Could not create user, please try again.",
      500
    );
    return next(error);
  }

  const createdUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await createdUser.save();

    // Create a verification token for this user
    var token = new Token({
      _userId: createdUser._id,
      token: crypto.randomBytes(16).toString("hex"),
    });

    // Save the verification token
    token.save(function (err) {
      if (err) {
        return res.status(500).send({ msg: err.message });
      }
    });

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "mkpubg771@gmail.com", // generated ethereal user
        pass: "mukul3112", // generated ethereal password
      },
    });

    // send mail with defined transport object
    try {
      let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });

      console.log("Message sent: %s", info.messageId);
      res
        .status(200)
        .send("A verification email has been sent to " + user.email + ".");
    } catch (Err) {
      return res.status(500).send({ msg: err.message });
    }

    // Send the email
    // var transporter = nodemailer.createTransport({
    //   service: "Sendgrid",
    //   auth: {
    //     user: "mkpubg771@gmail.com",
    //     pass: "mukul3112",
    //   },
    // });

    // var mailOptions = {
    //   from: "no-reply@nit-forum.com",
    //   to: createdUser.email,
    //   subject: "Account Verification Token",
    //   text:
    //     "Hello,\n\n" +
    //     "Please verify your account by clicking the link: \nhttp://" +
    //     req.headers.host +
    //     "/confirmation/" +
    //     token.token +
    //     ".\n",
    // };

    // transporter.sendMail(mailOptions, function (err) {
    //   if (err) {
    //     return res.status(500).send({ msg: err.message });
    //   }
    //   res
    //     .status(200)
    //     .send("A verification email has been sent to " + user.email + ".");
    // });
  } catch (err) {
    const error = new HttpError(
      "Signing up failed, please try again later.",
      500
    );
    return next(error);
  }
};
// =============================================================================  */
// =============================================================================  */
// =============================================================================  */

/** ============================================================================  //
* POST /login
* Sign in with email and password
// =============================================================================  */

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;

  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError(
      "Logging in failed, please try again later.",
      500
    );
    return next(error);
  }

  if (!existingUser) {
    const error = new HttpError(
      "Invalid credentials, could not log you in.",
      403
    );
    return next(error);
  }

  if (!User.isVerified)
    return res.status(401).send({
      type: "not-verified",
      msg: "Your account has not been verified.",
    });

  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(password, existingUser.password);
  } catch (err) {
    const error = new HttpError(
      "Could not log you in, please check your credentials and try again.",
      500
    );
    return next(error);
  }

  if (!isValidPassword) {
    const error = new HttpError(
      "Invalid credentials, could not log you in.",
      403
    );
    return next(error);
  }

  let token;
  try {
    token = jwt.sign(
      { userId: existingUser.id, email: existingUser.email },
      "supersecret_dont_share",
      { expiresIn: "1h" }
    );
  } catch (err) {
    const error = new HttpError(
      "Logging in failed, please try again later.",
      500
    );
    return next(error);
  }

  res.json({
    userId: existingUser.id,
    email: existingUser.email,
    token: token,
  });
};

// =============================================================================  */
// =============================================================================  */
// =============================================================================  */

/**
 * POST /confirmation
 */
exports.confirmationPost = function (req, res, next) {
  req.assert("email", "Email is not valid").isEmail();
  req.assert("email", "Email cannot be blank").notEmpty();
  req.assert("token", "Token cannot be blank").notEmpty();
  req.sanitize("email").normalizeEmail({ remove_dots: false });

  // Check for validation errors
  var errors = req.validationErrors();
  if (errors) return res.status(400).send(errors);

  // Find a matching token
  Token.findOne({ token: req.body.token }, function (err, token) {
    if (!token)
      return res.status(400).send({
        type: "not-verified",
        msg:
          "We were unable to find a valid token. Your token my have expired.",
      });

    // If we found a token, find a matching user
    User.findOne(
      { _id: token._userId, email: req.body.email },
      function (err, user) {
        if (!user)
          return res
            .status(400)
            .send({ msg: "We were unable to find a user for this token." });
        if (user.isVerified)
          return res.status(400).send({
            type: "already-verified",
            msg: "This user has already been verified.",
          });

        // Verify and save the user
        user.isVerified = true;
        user.save(function (err) {
          if (err) {
            return res.status(500).send({ msg: err.message });
          }
          res.status(200).send("The account has been verified. Please log in.");
        });
      }
    );
  });
};

/** ========================================================================== //
* POST /confirmation
/** ========================================================================== */

exports.confirmationPost = function (req, res, next) {
  req.assert("email", "Email is not valid").isEmail();
  req.assert("email", "Email cannot be blank").notEmpty();
  req.assert("token", "Token cannot be blank").notEmpty();
  req.sanitize("email").normalizeEmail({ remove_dots: false });

  // Check for validation errors
  var errors = req.validationErrors();
  if (errors) return res.status(400).send(errors);

  // Find a matching token
  Token.findOne({ token: req.body.token }, function (err, token) {
    if (!token)
      return res.status(400).send({
        type: "not-verified",
        msg:
          "We were unable to find a valid token. Your token may have expired.",
      });

    // If we found a token, find a matching user
    User.findOne({ _id: token._userId }, function (err, user) {
      if (!user)
        return res
          .status(400)
          .send({ msg: "We were unable to find a user for this token." });
      if (user.isVerified)
        return res.status(400).send({
          type: "already-verified",
          msg: "This user has already been verified.",
        });

      // Verify and save the user
      user.isVerified = true;
      user.save(function (err) {
        if (err) {
          return res.status(500).send({ msg: err.message });
        }
        res.status(200).send("The account has been verified. Please log in.");
      });
    });
  });
};
// ============================================================================== //
// ============================================================================== //
// ============================================================================== //

/** ============================================================================== //
 * POST /resend
============================================================================== */
exports.resendTokenPost = function (req, res, next) {
  req.assert("email", "Email is not valid").isEmail();
  req.assert("email", "Email cannot be blank").notEmpty();
  req.sanitize("email").normalizeEmail({ remove_dots: false });

  // Check for validation errors
  var errors = req.validationErrors();
  if (errors) return res.status(400).send(errors);

  User.findOne({ email: req.body.email }, function (err, user) {
    if (!user)
      return res
        .status(400)
        .send({ msg: "We were unable to find a user with that email." });
    if (user.isVerified)
      return res.status(400).send({
        msg: "This account has already been verified. Please log in.",
      });

    // Create a verification token, save it, and send email
    var token = new Token({
      _userId: user._id,
      token: crypto.randomBytes(16).toString("hex"),
    });

    // Save the token
    token.save(function (err) {
      if (err) {
        return res.status(500).send({ msg: err.message });
      }

      // Send the email
      var transporter = nodemailer.createTransport({
        service: "Sendgrid",
        auth: {
          user: process.env.SENDGRID_USERNAME,
          pass: process.env.SENDGRID_PASSWORD,
        },
      });
      var mailOptions = {
        from: "no-reply@codemoto.io",
        to: user.email,
        subject: "Account Verification Token",
        text:
          "Hello,\n\n" +
          "Please verify your account by clicking the link: \nhttp://" +
          req.headers.host +
          "/confirmation/" +
          token.token +
          ".\n",
      };
      transporter.sendMail(mailOptions, function (err) {
        if (err) {
          return res.status(500).send({ msg: err.message });
        }
        res
          .status(200)
          .send("A verification email has been sent to " + user.email + ".");
      });
    });
  });
};

// ============================================================================== //
// ============================================================================== //
// ============================================================================== //

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
