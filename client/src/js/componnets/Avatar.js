import React from "react";
import AvatarImage from "../../img/Avatar.png";

export default class Avatar extends React.Component {
  render() {
    return (
      <div className = "Avatar-Container">
       <img src= {AvatarImage} alt= "Furqan Agwan" height= "100" width= "100" />
      </div>
    );
  }
}
