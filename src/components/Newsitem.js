import React, { Component } from "react";

export default class Newsitem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            height="200"
            className="card-img-top"
            src={
              !imageUrl
                ? "https://ichef.bbci.co.uk/news/1024/branded_news/6537/live/ff895b30-24e4-11ef-baa7-25d483663b8e.jpg"
                : imageUrl
            }
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="_blank" className="btn btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
