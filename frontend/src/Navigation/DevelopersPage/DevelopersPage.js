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
import SidePanel from "../../Components/SidePanel/SidePanel";
import MetaPanelLeaderBorad from "../../Components/MetaPanel/MetaPanelLeaderBoard";
import "./DevelopersPage.css";
import MetaPanel from "../../Components/MetaPanel/MetaPanel";
import Developers from '../../Components/Developers/Developers';

class DevelopersPage extends Component {
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

          <Grid.Column width="11">
            <Developers />
          </Grid.Column>
        </Grid>
      </Ref>
    );
  }
}

export default DevelopersPage;
