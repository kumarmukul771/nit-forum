import React, { Component } from "react";
import { Dropdown, Form } from "semantic-ui-react";
import mime from "mime";
import "./DoubtForm.css";

const branch = [
  { key: "cse", text: "Male", value: "male" },
  { key: "ece", text: "Female", value: "female" },
  { key: "ee", text: "Other", value: "other" },
  { key: "pie", text: "Other", value: "other" },
  { key: "mech", text: "Other", value: "other" },
  { key: "ee", text: "Other", value: "other" },
];

const domain = [
  { key: "web", text: "Web Development", value: "Web Development" },
  { key: "app", text: "App Development", value: "App Development" },
  { key: "ml", text: "Machine Learning", value: "Machine Learning" },
  {
    key: "cp",
    text: "Competetive Programming",
    value: "Competetive Programming",
  },
];

const topicTags = [
  { key: "frontend", text: "Frontend", value: "Frontend" },
  { key: "react", text: "React", value: "React" },
  { key: "angular", text: "Angular", value: "Angular" },
  { key: "backend", text: "Backend", value: "Backend" },
  { key: "node", text: "Node", value: "Node" },
  { key: "mongodb", text: "Mongodb", value: "Mongodb" },
  { key: "firebase", text: "Firebase", value: "Firebase" },
  { key: "html", text: "HTML", value: "html" },
  { key: "css", text: "CSS", value: "CSS" },
  { key: "javascript", text: "Javascript", value: "Javascript" },
  { key: "jquery", text: "Jquery", value: "Jquery" },
  { key: "react native", text: "React native", value: "React native" },
];

class DoubtForm extends Component {
  state = {
    file: null,
    authorized: ["image/jpeg", "image/png"],
    domain: null,
  };

  addFile = (event) => {
    const file = event.target.files[0];
    console.log(typeof file);
    if (file) {
      this.setState({
        file: file,
      });
    }
  };

  sendFile = () => {
    const { file } = this.state;

    console.log(file);

    if (file !== null) {
      if (this.isAuthorized(file.name)) {
        console.log("Authorized");
        const metaData = { contentType: mime.lookup(file.name) };
      }
    }
  };

  isAuthorized = (fileName) =>
    this.state.authorized.includes(mime.lookup(fileName));

  handleDomainChange = (e, { value }) => this.setState({ domain: value });

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const { value } = this.state;
    return (
      <Form className="body_DoubtForm">
        <Form.Group widths="equal" className="formBox_DoubtForm">
          <Form.Select
            fluid
            label="Domain"
            options={domain}
            placeholder="Domain"
            onChange={this.handleDomainChange}
          />
          <Form.Input
            type="file"
            label="Screenshot of error"
            name="file"
            fluid
            onChange={this.addFile}
            icon="image"
          />
        </Form.Group>

        <Dropdown
          placeholder="Topic Tags"
          fluid
          multiple
          search
          selection
          options={topicTags}
          className="formBox_DoubtForm"
        />

        <Form.TextArea
          label="Doubt"
          placeholder="Tell us more about your doubt..."
          className="formBox_DoubtForm"
        />

        <div className="submit_DoubtForm">
          <Form.Button onClick={this.handleSubmit} color="twitter">
            Submit
          </Form.Button>
        </div>
      </Form>
    );
  }
}

export default DoubtForm;
