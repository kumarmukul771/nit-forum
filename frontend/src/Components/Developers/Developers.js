import React, { Component } from "react";
import { Card, Rating, Icon, Image } from "semantic-ui-react";
import "./Developers.css";

const extra = (
  <a>
    <Icon name="user" />
    16 Friends
  </a>
);

const mukul =
  "https://res.cloudinary.com/lonewolf3112/image/upload/v1610698854/mukul_ga7eiw.jpg";
const nishant =
  "https://res.cloudinary.com/lonewolf3112/image/upload/v1610701543/IMG_20210115_143406_548_mvkr7j.jpg";

const himanshu =
  "https://res.cloudinary.com/lonewolf3112/image/upload/v1610701868/hr_pjrt1d.jpg";

class Developers extends Component {
  render() {
    return (
      <div className="body_Developers">
        <Card.Group itemsPerRow={3}>
          <Card raised className="card_Developers">
            <Image
              src={mukul}
              wrapped
              ui={false}
              className="image_Developers"
            />
            <Card.Content>
              <Card.Header>Mukul</Card.Header>
              <Card.Meta>
                @mr.Perfect
              </Card.Meta>
                <Rating icon="heart" defaultRating={4} maxRating={7} />
              <Card.Description>Full Stack Web Developer</Card.Description>
            </Card.Content>
          </Card>
          <Card raised className="card_Developers">
            <Image
              src={nishant}
              wrapped
              ui={false}
              className="image_Developers"
            />
            <Card.Content>
              <Card.Header>Nishant</Card.Header>
              <Card.Meta>
                @nishant
              </Card.Meta>
                <Rating icon="heart" defaultRating={6} maxRating={7} />
              <Card.Description>Full Stack Web Developer</Card.Description>
            </Card.Content>
          </Card>

          <Card raised className="card_Developers">
            <Image
              src={himanshu}
              wrapped
              ui={false}
              className="image_Developers"
            />
            <Card.Content>
              <Card.Header>Himanshu</Card.Header>
              <Card.Meta>
                @Proxidike
              </Card.Meta>
                <Rating icon="heart" defaultRating={5} maxRating={7} />
              <Card.Description>Full Stack Web Developer</Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
    );
  }
}

export default Developers;
