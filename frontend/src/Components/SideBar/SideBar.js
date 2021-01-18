import React, { Component } from "react";
import mime from "mime";
import {
  Feed,
  Icon,
  Input,
  Form,
  Checkbox,
  Grid,
  Header,
  Image,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";

class SideBar extends Component {
  state = {
    visible: false,
  };

  render() {
    const { visible } = this.state;
    return (
      <Grid columns={1}>
        <Grid.Column>
          <Checkbox
            checked={visible}
            label={{ children: <code>visible</code> }}
            onChange={(e, data) => this.setState({ visible: data.checked })}
          />
        </Grid.Column>

        <Grid.Column>
          <Sidebar.Pushable as={Segment}>
            <Sidebar
              as={Menu}
              animation="overlay"
              icon="labeled"
              inverted
              onHide={() => this.setState({ visible: false })}
              vertical
              visible={visible}
              width="thin"
            >
              <Menu.Item as="a" active="true">
                <Icon name="home" />
                Home
              </Menu.Item>
              <Menu.Item as="a">
                <Icon name="gamepad" />
                Games
              </Menu.Item>
              <Menu.Item as="a">
                <Icon name="camera" />
                Channels
              </Menu.Item>
            </Sidebar>

            <Sidebar.Pusher dimmed={visible}>
              <Segment basic>
                <Header as="h3">Application Content</Header>
                <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Grid.Column>
      </Grid>
    );
  }
}

export default SideBar;
