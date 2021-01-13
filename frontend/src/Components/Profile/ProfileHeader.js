import React, { Component } from "react";
import {
  Grid,
  Header,
  Icon,
  List,
  Image,
  Divider,
  Label,
  TextArea
} from "semantic-ui-react";
import "./ProfileHeader.css";

class Post extends Component {
  render() {
    return (
        <>
      <Grid.Row className="body_Post">
       <Grid>
            <img src = "https://media.indiatimes.in/media/content/2018/May/disha_patani_1525520782.jpg" style = {{width: "100%", height: 280, padding:7, position: "relative"}}/>
            <Grid.Row className="profile_photo">
            <div style = {{width: 160, height: 160, marginTop: 0, marginLeft: 45, borderRadius: "50%", position: "absolute", backgroundColor: "White"}}>
            <img src = "https://i2.wp.com/indianewengland.com/wp-content/uploads/2019/04/Disha-Patani-Ians.jpg?fit=562%2C715&ssl=1"  style = {{width: 150, height: 150, borderRadius: "50%", margin: 5,}} />
            </div >
            </Grid.Row>

            {/* <Grid.Row className="info">
                   <p>Praxidike     ....</p> 
                   
                   <p>Praxidike</p>
            </Grid.Row> */}
        </Grid>


        <Grid className = "profile">
            

            <Grid.Row className="info">
                <div>
                    <h1>Praxidike</h1>
                    <br/>
                    <p style = {{marginTop: -20, fontSize : 18, fontWeight: "normal"}}>Student at National Institute Of Technology, Jamshedpur</p>
                    <br/>
                    <div>
                    
                    <p style = {{marginTop: -30, fontSize: 16}}>Mirzapur, Jharkhand, India . <span style = {{color: "blue", fontSize: 16, fontWeight: "bold"}}><a>Contact Info</a></span> . <span style = {{color: "blue", fontSize: 16, fontWeight: "bold"}}><a>101 Connections</a></span></p>
                    
                    </div>
                </div>
            </Grid.Row>
        </Grid>
     
      </Grid.Row>
</>
    );
  }
}

export default Post;
