import React from "react";

const Article = ({
  article: { title, urlToImage, url, author, publishedAt }
}) => {
  return (
    <div className="card">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img
          className="card-img-top"
          src={
            urlToImage
              ? urlToImage
              : "https://cdn.pixabay.com/photo/2013/07/12/19/16/newspaper-154444_1280.png"
          }
          alt="Article"
        />
      </a>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          <small className="text-muted">{`Source: ${author ? author : "-"}`}</small>
          <br />
          <small className="text-muted">{`Published at: ${publishedAt}`}</small>
        </p>
      </div>
    </div>
  );
};

export default Article;
