import React, { Component, createRef } from "react";
import {
  Grid,
  Ref,
  Rail,
  Sticky,
  Segment,
  Header,
  Image,
} from "semantic-ui-react";
import DoubtForm from "../../Components/DoubtForm/DoubtForm";
import MetaPanel from "../../Components/MetaPanel/MetaPanel";
import Note from "../../Components/Note/Note";
import SidePanel from "../../Components/SidePanel/SidePanel";
import "./NotePage.css";

class NotePage extends Component {
  contextRef = createRef();

  render() {
    return (
      <Ref innerRef={this.contextRef}>
        <Grid>
          <Grid.Column width="3">
              <Sticky context={this.contextRef}>
                <SidePanel />
              </Sticky>
          </Grid.Column>

          <Grid.Column width="9">
            <Note />
          </Grid.Column>

          <Grid.Column width="4">
              <Sticky context={this.contextRef}>
                <MetaPanel />
              </Sticky>
          </Grid.Column>
        </Grid>
      </Ref>
    );
  }
}

export default NotePage;
