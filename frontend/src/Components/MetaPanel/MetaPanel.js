import React, { Component } from "react";
import {
  Segment,
  Header,
  Accordion,
  Icon,
  Image,
  List,
  Label,
} from "semantic-ui-react";
import "./MetaPanel.css";

class MetaPanel extends Component {
  state = {
    activeIndex: 0,
    isPrivateChannel: 0,
    channel: 1,
  };

  setActiveIndex = (event, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;
    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex, isPrivateChannel, channel } = this.state;

    if (isPrivateChannel) return null;
    return (
      <Segment loading={!channel} className="body_MetaPanel">
        <Label as="a" color="green" ribbon>
          About @ mrPerfect
        </Label>
        <Header as="h3" attached="top"></Header>

        <Accordion styled attached="true">
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={this.setActiveIndex}
          >
            <Icon name="dropdown" />
            <Icon name="info" />
            Contribution
          </Accordion.Title>

          <Accordion.Content active={activeIndex === 0}>
            Contribution Details
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={this.setActiveIndex}
          >
            <Icon name="dropdown" />
            <Icon name="user circle" />
            Top Contributors
          </Accordion.Title>

          <Accordion.Content active={activeIndex === 1}>
            Top Contributors List
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 2}
            index={2}
            onClick={this.setActiveIndex}
          >
            <Icon name="dropdown" />
            <Icon name="pencil alternate" />
            Connection Request
          </Accordion.Title>

          <Accordion.Content active={activeIndex === 2}>
            No Connection Request
          </Accordion.Content>
        </Accordion>
      </Segment>
    );
  }
}

export default MetaPanel;
