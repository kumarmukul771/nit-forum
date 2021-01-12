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
import "./ProfileHeader.css";

class Post extends Component {
  render() {
    return (
        <>
      <Grid.Row className="body_Post">
       <Grid>
           <Grid.Row className="row">
            <img src = "https://media.indiatimes.in/media/content/2018/May/disha_patani_1525520782.jpg" style = {{width: "100%", height: 400, padding:7, position: "relative"}}/>
            <div style = {{width: 260, height: 260, marginTop: 250, marginLeft: 75, borderRadius: "50%", position: "absolute", backgroundColor: "white"}}>
            <img src = "https://i2.wp.com/indianewengland.com/wp-content/uploads/2019/04/Disha-Patani-Ians.jpg?fit=562%2C715&ssl=1"  style = {{width: 250, height: 250, borderRadius: "50%", margin: 5}} />
            </div >
           
           </Grid.Row>
        </Grid>
      </Grid.Row>
</>
    );
  }
}

export default Post;
