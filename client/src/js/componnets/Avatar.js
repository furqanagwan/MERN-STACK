import React from "react";
import AvatarImage from "../../assests/img/Avatar.png";

export default class Avatar extends React.Component {
  render() {
    return (
      <div className = "Avatar-Container">
       <img src= {AvatarImage} alt= "Furqan Agwan" height= "200" width= "200" />
      </div>
    );
  }
}
