import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Grid, Header, Icon } from "semantic-ui-react";
import "./SidePanel.css";

class SidePanel extends Component {
  componentDidMount() {
    console.log(this.props.history);
  }
  render() {
    return (
      <Grid className="body_SidePanel">
        <Grid.Column
          width="4"
          style={{ backgroundColor: "green", color: "white" }}
        >
          <Grid.Row>
            <div className="icon_SidePanel">
              <Icon
                name="home"
                size="big"
                onClick={() => this.props.history.push("/")}
              />
            </div>
          </Grid.Row>
          <Grid.Row>
            <div className="icon_SidePanel">
              <Icon
                name="address card"
                size="big"
                onClick={() => console.log("Move to profile")}
              />
            </div>
          </Grid.Row>
          <Grid.Row>
            <div className="icon_SidePanel">
              <Icon
                name="chart bar"
                size="big"
                onClick={() => this.props.history.push("/contribution")}
              />
            </div>
          </Grid.Row>
          <Grid.Row>
            <div className="icon_SidePanel">
              <Icon
                name="bell"
                size="big"
                onClick={() => this.props.history.push("/notification")}
              />
            </div>
          </Grid.Row>
          <Grid.Row>
            <div className="icon_SidePanel">
              <Icon
                name="wordpress forms"
                size="big"
                onClick={() => this.props.history.push("/doubtPage")}
              />
            </div>
          </Grid.Row>

          <Grid.Row>
            <div className="icon_SidePanel">
              <Icon
                name="sticky note"
                size="big"
                onClick={() => this.props.history.push("/note")}
              />
            </div>
          </Grid.Row>

          <Grid.Row>
            <div className="icon_SidePanel">
              <Icon
                name="connectdevelop"
                size="big"
                onClick={() => this.props.history.push("/developers")}
              />
            </div>
          </Grid.Row>
        </Grid.Column>
        <Grid.Column width="12" style={{ backgroundColor: "white" }}>
          <Grid.Row style={{ marginTop: "10px" }}>
            <Header inverted floated="left" as="h2" style={{ color: "black" }}>
              <Icon name="handshake" />
              <Header.Content as="h3">NIT JSR Forum</Header.Content>
            </Header>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    );
  }
}

export default withRouter(SidePanel);
