import React from "react";
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message,
  Icon,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { connect } from "react-redux";

class Register extends React.Component {
  state = {
    fullName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    errors: [],
    loading: false,
  };

  isFormValid = () => {
    let errors = [];
    let error;

    if (this.isFormEmpty(this.state)) {
      error = { message: "Fill in all fields" };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else if (!this.isPasswordValid(this.state)) {
      error = {
        message:
          "Password should atleast be of 8 characters and confirm password should match password",
      };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else {
      return true;
    }
  };

  isFormEmpty = ({ email, password, passwordConfirmation }) => {
    return !email.length || !password.length || !passwordConfirmation.length;
  };

  isPasswordValid = ({ password, passwordConfirmation }) => {
    if (password.length < 8 || passwordConfirmation.length < 8) {
      return false;
    } else if (password !== passwordConfirmation) {
      return false;
    } else {
      return true;
    }
  };

  displayErrors = (errors) =>
    errors.map((error, i) => <p key={i}>{error.message}</p>);

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleInputError = (errors, inputName) => {
    return errors.some((error) =>
      error.message.toLowerCase().includes(inputName)
    )
      ? "error"
      : "";
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    if (this.isFormValid()) {
      const { email, password, fullName } = this.state;
      this.setState({ errors: [], loading: true });

      try {
        let data = {
          fullName,
          email,
          password,
        };
        const res = await Axios.post(
          "https://powerful-coast-07208.herokuapp.com/api/register",
          data
        );

        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);

        localStorage.setItem("token", res.data.token);
        localStorage.setItem("expirationDate", expirationDate);
        localStorage.setItem("userId", res.data.user._id);
        localStorage.setItem("username", res.data.user.username);
        // this.props.authSuccess(res.data.token, res.data.user._id,res.data.user.username);
        // this.props.checkAuthTimeOut(3600);

        // this.setState({ loading: false });
        // this.props.history.push("/");
        console.log(res);
      } catch (err) {
        this.setState({ loading: false });
      }
    }
  };

  render() {
    const {
      email,
      password,
      passwordConfirmation,
      errors,
      loading,
      fullName,
    } = this.state;

    return (
      <Grid textAlign="center" verticalAlign="middle" className="app">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" icon color="orange" textAlign="center">
            <Icon name="puzzle piece" color="orange" />
            Register for CodeChef
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                name="fullName"
                icon="user"
                iconPosition="left"
                placeholder="Full Name"
                onChange={this.handleChange}
                value={fullName}
                type="text"
              />

              <Form.Input
                fluid
                name="email"
                icon="mail"
                iconPosition="left"
                placeholder="Email Address"
                onChange={this.handleChange}
                value={email}
                className={this.handleInputError(errors, "email")}
                type="email"
              />

              <Form.Input
                fluid
                name="password"
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                onChange={this.handleChange}
                value={password}
                className={this.handleInputError(errors, "password")}
                type="password"
              />

              <Form.Input
                fluid
                name="passwordConfirmation"
                icon="repeat"
                iconPosition="left"
                placeholder="Password Confirmation"
                onChange={this.handleChange}
                value={passwordConfirmation}
                className={this.handleInputError(errors, "password")}
                type="password"
              />

              <Button
                disabled={loading}
                className={loading ? "loading" : ""}
                color="orange"
                fluid
                size="large"
                onClick={this.handleSubmit}
              >
                Submit
              </Button>
            </Segment>
          </Form>
          {errors.length > 0 && (
            <Message error>
              <h3>Error</h3>
              {this.displayErrors(errors)}
            </Message>
          )}
          <Message>
            Already a user? <Link to="/login">Login</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(null, {  })(Register);
