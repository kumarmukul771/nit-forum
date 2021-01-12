import React, { Component } from "react";
import { Grid, Header, Icon } from "semantic-ui-react";

class MetaPanel extends Component {
  render() {
    return (
      <div>
        <Grid.Row>
          <div className="icon_SidePanel">
            <Icon name="address card" size="big" />
          </div>
        </Grid.Row>
        <Grid.Row>
          <div className="icon_SidePanel">
            <Icon name="chart bar" size="big" />
          </div>
        </Grid.Row>
        <Grid.Row>
          <div className="icon_SidePanel">
            <Icon name="bell" size="big" />
          </div>
        </Grid.Row>
        <Grid.Row>
          <div className="icon_SidePanel">
            <Icon name="wordpress forms" size="big" />
          </div>
        </Grid.Row>

        <Grid.Row>
          <div className="icon_SidePanel">
            <Icon name="sticky note" size="big" />
          </div>
        </Grid.Row>
      </div>
    );
  }
}

export default MetaPanel;
