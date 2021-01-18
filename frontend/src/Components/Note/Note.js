import React, { Component } from "react";
import mime from "mime";
import { Input, Form } from "semantic-ui-react";
import "./Note.css";

class Note extends Component {
  state = {
    file: null,
    authorized: ["image/jpeg", "image/png"],
    domain: null,
    contentOfFile: null,
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

  handleSubmit = (e) => {
    e.preventDefault();
  };

  // Read content of file
  showFile = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target.result;
      this.setState({ contentOfFile: text });
      console.log(text);
    };
    reader.readAsText(e.target.files[0]);
  };

  render() {
    const { contentOfFile, visible } = this.state;
    return (
      <Form className="body_Note">
        <Form.Field>
          <label>Heading of Note</label>
          <Input type="text" icon="heading" placeholder="Heading of note" />
        </Form.Field>
        <Form.Group widths="equal" className="formBox_DoubtForm">
          <Form.Input
            type="file"
            label="Related image if any"
            name="file"
            fluid
            onChange={this.addFile}
            icon="image"
          />

          <Form.Input
            type="file"
            label="Related file if any(can be txt/cpp/js etc)"
            name="file"
            fluid
            onChange={this.showFile}
            icon="file text"
          />
        </Form.Group>

        <Form.TextArea
          label="Note"
          placeholder="Tell us more about your note..."
          className="formBox_Note"
        />

        {contentOfFile == null ? null : (
          <Form.TextArea
            label="File Content"
            placeholder="Tell us more about your note..."
            className="formBox_Note"
            value={contentOfFile}
          />
        )}

        <div className="submit_Note">
          <Form.Button onClick={this.handleSubmit} color="twitter">
            Submit
          </Form.Button>
        </div>
      </Form>
    );
  }
}

export default Note;
