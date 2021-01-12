import React, { Component } from "react";
import {
  Grid,
  Header,
  Icon,
  List,
  Image,
  Divider,
  Label,
} from "semantic-ui-react";
import "./Post.css";

class Post extends Component {
  render() {
    return (
      <Grid.Row className="body_Post">
        <div className="profile_Post">
          <Header as="h3">
            <Image
              className="avatar_Post"
              avatar
              size="massive"
              verticalAlign="middle"
              src="https://wallpaperaccess.com/full/1108700.jpg"
            />{" "}
            Mukul Kumar
          </Header>
        </div>
        <Divider />
        <div className="content_Post">
          <List>
            React makes it painless to create interactive UIs. Design simple
            views for each state in your application, and React will efficiently
            update and render just the right components when your data changes.
            Declarative views make your code more predictable and easier to
            debug.Build encapsulated components that manage their own state,
            then compose them to make complex UIs. Since component logic is
            written in JavaScript instead of templates, you can easily pass rich
            data through your app and keep state out of the DOM.We don’t make
            assumptions about the rest of your technology stack, so you can
            develop new features in React without rewriting existing code. React
            can also render on the server using Node and power mobile apps using
            React Native
          </List>
        </div>
        <Divider />
        <div className="content_Post">
          <List>
            <List.Item>
              <List.Icon name="github" />
              <List.Content>
                <a href="https://github.com/kumarmukul771/pwa-v3">
                  https://github.com/kumarmukul771/pwa-v3
                </a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="linkedin" />
              <List.Content>
                <a href="https://www.linkedin.com/in/mukul-kumar-6b29a01b2/">
                  https://www.linkedin.com/in/mukul-kumar-6b29a01b2/
                </a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="mail" />
              <List.Content>
                <a>kumarmukul771@gmail.com</a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="linkify" />
              <List.Content>
                <a href="http://www.semantic-ui.com">semantic-ui.com</a>
              </List.Content>
            </List.Item>

            <List.Item>
              <List.Icon name="linkify" />
              <List.Content>
                <a href="https://stackoverflow.com/questions/tagged/reactjs">
                  https://stackoverflow.com/questions/tagged/reactjs
                </a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="linkify" />
              <List.Content>
                <a href="https://medium.com/wizardnet972/30-answers-from-stack-overflow-to-the-most-popular-webpack-questions-49980770d5dc">
                  https://medium.com/wizardnet972/30-answers-from-stack-overflow-to-the-most-popular-webpack-questions-49980770d5dc
                </a>
              </List.Content>
            </List.Item>
          </List>
        </div>

        <Divider />
        <div className="content_Post">
          <Label as="a" color="blue" image>
            <Icon name="like" />
            Upvote
          </Label>
          <Label as="a" color="teal" image>
            <Icon name="thumbs down" />
            Downvote
          </Label>
          <Label as="a" color="yellow" image>
            <Icon name="chat" />
            Comment
          </Label>
        </div>
      </Grid.Row>
    );
  }
}

export default Post;
