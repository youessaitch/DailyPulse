import React from "react";
import "./NewsItem.css"; // Import the CSS file for styling

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card glass-card">
        <img
          src={
            !imageUrl
              ? "https://www.jagranimages.com/images/newimg/01122022/01_12_2022-best_gaming_pc_23239236.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            {title}
            <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-success">
              Source: {source}
            </span>
          </h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            rel="noreferrer"
            target="_blank"
            className="btn btn-sm btn-primary"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
