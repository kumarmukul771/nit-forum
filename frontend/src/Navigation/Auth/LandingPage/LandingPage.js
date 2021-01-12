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
import MetaPanel from "../../../Components/MetaPanel/MetaPanel";
import MetaPanelLeaderBorad from "../../../Components/MetaPanel/MetaPanelLeaderBoard";
import Post from "../../../Components/Post/Post";
import SidePanel from "../../../Components/SidePanel/SidePanel";
import "./LandingPage.css";

class LandingPage extends Component {
  contextRef = createRef();
  componentDidMount() {}
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
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </Grid.Column>

          <Grid.Column width="4">
            <Grid.Row>
              <MetaPanel />
            </Grid.Row>

            <Grid.Row>
              <MetaPanelLeaderBorad />
            </Grid.Row>

            <Grid.Row>
              <MetaPanel />
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </Ref>
    );
  }
}

export default LandingPage;
