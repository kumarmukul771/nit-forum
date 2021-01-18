import React, { Component } from "react";
import { Feed, Icon } from "semantic-ui-react";
import "./Notification.css";

class Notification extends Component {
  render() {
    return (
      <Feed className="body_Notification">
        <Feed.Event>
          <Feed.Label>
            <img src="https://wallpaperaccess.com/full/1108609.jpg" />
          </Feed.Label>
          <Feed.Content>
            <Feed.Summary>
              <Feed.User>Nishant Ranjan</Feed.User> added you as a connection
              <Feed.Date>1 Hour Ago</Feed.Date>
            </Feed.Summary>
            <Feed.Meta>
              <Feed.Like>
                <Icon name="like" />4 upvotes
              </Feed.Like>
            </Feed.Meta>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image="https://www.wallpapertip.com/wmimgs/151-1512616_disha-patani-hd-4k-mobile-disha-patani-wallpaper.jpg" />
          <Feed.Content>
            <Feed.Summary>
              <a>Mukul Kumar</a> added <a>2 new illustrations to your post</a>
              <Feed.Date>4 days ago</Feed.Date>
            </Feed.Summary>
            <Feed.Extra images>
              <a>
                <img src="https://www.wallpapertip.com/wmimgs/151-1512616_disha-patani-hd-4k-mobile-disha-patani-wallpaper.jpg" />
              </a>
              <a>
                <img src="https://www.wallpapertip.com/wmimgs/151-1512616_disha-patani-hd-4k-mobile-disha-patani-wallpaper.jpg" />
              </a>
            </Feed.Extra>
            <Feed.Meta>
              <Feed.Like>
                <Icon name="like" />1 upvotes
              </Feed.Like>
            </Feed.Meta>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image="https://wallpaperaccess.com/full/1108609.jpg" />
          <Feed.Content>
            <Feed.Summary
              date="2 Days Ago"
              user="Jenny Hess"
              content="added you as a connection"
            />
            <Feed.Meta>
              <Feed.Like>
                <Icon name="like" />8 upvotes
              </Feed.Like>
            </Feed.Meta>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image="https://wallpaperaccess.com/full/1108609.jpg" />
          <Feed.Content>
            <Feed.Summary>
              <a>Himanshu Raj</a> posted a doubt
              <Feed.Date>3 days ago</Feed.Date>
            </Feed.Summary>
            <Feed.Extra text>
              Ours is a life of constant reruns. We're always circling back to
              where we'd we started, then starting all over again. Even if we
              don't run extra laps that day, we surely will come back for more
              of the same another day soon.
            </Feed.Extra>
            <Feed.Meta>
              <Feed.Like>
                <Icon name="like" />5 upvotes
              </Feed.Like>
            </Feed.Meta>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image="https://www.wallpapertip.com/wmimgs/151-1512616_disha-patani-hd-4k-mobile-disha-patani-wallpaper.jpg" />
          <Feed.Content>
            <Feed.Summary>
              <a>Nishant Ranjan</a> posted <a>an informative note</a> that you
              might be interested in
              <Feed.Date>4 days ago</Feed.Date>
            </Feed.Summary>
            <Feed.Extra images>
              <a>
                <img src="https://wallpaperaccess.com/full/1108609.jpg" />
              </a>
              <a>
                <img src="https://wallpaperaccess.com/full/1108609.jpg" />
              </a>
            </Feed.Extra>
            <Feed.Meta>
              <Feed.Like>
                <Icon name="like" />
                41 upvotes
              </Feed.Like>
            </Feed.Meta>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    );
  }
}

export default Notification;
