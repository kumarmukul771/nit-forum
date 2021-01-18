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
import MetaPanel from "../../Components/MetaPanel/MetaPanel";
import Graph from "../../Components/Graph/Graph";
// const Graph=require('../../Components/Graph/Graph');

class GraphPage extends Component {
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
            <Graph />
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

export default GraphPage;
