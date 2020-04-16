import React from "react";
import Swift from '../../img/Swift.png';
import Java from '../../img/Java.png';

export default class Header extends React.Component {
  render() {
    return (
      <div className="Page-Header">
        <div className="Pages-Icons">
          <img src= {Swift} alt= "Swift" height= "35" width= "35" />
          <img src= {Java} alt= "Swift" height= "35" width= "35" />
        </div>{" "}
        <div className="Pages-Button">
          <a>About</a> <a>Work</a> <a>Experience</a> <a>Apps</a>{" "}
        </div>{" "}
      </div>
    );
  }
}
