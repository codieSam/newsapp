import React, { Component } from "react";
import Newsitem from "./Newsitem";

export default class News extends Component {
  render() {
    return (
      <div className="container">
        This is new cmponent
        <Newsitem />
        <Newsitem />
        <Newsitem />
        <Newsitem />
        <Newsitem />
      </div>
    );
  }
}
