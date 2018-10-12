import React from "react";

const Article = ({
  article: { title, urlToImage, url, author, publishedAt }
}) => {
  return (
    <div className="card">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img
          class="card-img-top"
          src={
            urlToImage
              ? urlToImage
              : "https://cdn.pixabay.com/photo/2013/07/12/19/16/newspaper-154444_1280.png"
          }
          alt="Article"
        />
      </a>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">
          <small class="text-muted">{`Source: ${author ? author : "-"}`}</small>
          <br />
          <small class="text-muted">{`Published at: ${publishedAt}`}</small>
        </p>
      </div>
    </div>
  );
};

export default Article;
