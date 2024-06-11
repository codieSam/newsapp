import React, { Component } from "react";

export default class Newsitem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, publishedAt, author, source } =
      this.props;
    return (
      <div>
        <div className="card">
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
            <h4 className="card-title">
              {title}...
              <h4 className="text-primary">
                {source}
                <span className="badge badge-primary"></span>
              </h4>
            </h4>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {author} Published at: {new Date(publishedAt).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
