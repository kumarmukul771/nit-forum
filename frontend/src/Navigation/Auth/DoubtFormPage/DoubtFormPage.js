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
import DoubtForm from "../../../Components/DoubtForm/DoubtForm";
import MetaPanel from "../../../Components/MetaPanel/MetaPanel";
import SidePanel from "../../../Components/SidePanel/SidePanel";
import "./DoubtFormPage.css";

class DoubtFormPage extends Component {
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
            <DoubtForm />
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

export default DoubtFormPage;
