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

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    errors: [],
    loading: false,
  };

  displayErrors = (errors) =>
    errors.map((error, i) => <p key={i}>{error.message}</p>);

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  isFormEmpty = ({ email, password }) => {
    return !email.length || !password.length;
  };

  isFormValid = () => {
    let errors = [];
    let error;

    if (this.isFormEmpty(this.state)) {
      error = { message: "Fill in all fields" };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else {
      return true;
    }
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Here");
    if (this.isFormValid(this.state)) {
      const { email, password } = this.state;
      this.setState({ errors: [], loading: true });

      try {
        let data = {
          usernameOrEmail: email,
          password,
        };
        const res = await Axios.post(
          "https://powerful-coast-07208.herokuapp.com/api/login",
          data
        );

        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);

        localStorage.setItem("token", res.data.token);
        localStorage.setItem("expirationDate", expirationDate);
        localStorage.setItem("userId", res.data.user._id);
        localStorage.setItem("username", res.data.user.username);
        // this.props.authSuccess(
        //   res.data.token,
        //   res.data.user._id,
        //   res.data.user.username
        // );
        // this.props.checkAuthTimeOut(3600);

        this.setState({ loading: false });
        // this.props.history.push("/");
        console.log(res);
      } catch (err) {
        console.log(err);
        this.setState({
          loading: false,
          errors: [{ message: "Invalid email/username or password" }],
        });
      }
    }
  };

  isFormValid = ({ email, password }) => email && password;

  handleInputError = (errors, inputName) => {
    return errors.some((error) =>
      error.message.toLowerCase().includes(inputName)
    )
      ? "error"
      : "";
  };

  render() {
    const { email, password, errors, loading } = this.state;
    console.log(errors);

    return (
      <Grid textAlign="center" verticalAlign="middle" className="app">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" icon color="violet" textAlign="center">
            <Icon name="code branch" color="violet" />
            Login for CodeChef
          </Header>
          <Form onSubmit={this.handleSubmit} size="large">
            <Segment stacked>
              <Form.Input
                fluid
                name="email"
                icon="mail"
                iconPosition="left"
                placeholder="Email Address/Username"
                onChange={this.handleChange}
                value={email}
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

              <Button
                disabled={loading}
                className={loading ? "loading" : ""}
                color="violet"
                fluid
                size="large"
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
            Don't have an account? <Link to="/register">Register</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}
export default connect(null, {  })(Login);

// export default connect(null)(Login);
