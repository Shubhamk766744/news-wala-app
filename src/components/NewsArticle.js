import React from "react";
import { Link } from "react-router-dom";
function NewsArticle({ data }) {
  return (
    <div className=".col-lg-12 news-card py-3 my-3">
      <img src={data.urlToImage} alt="" srcset="" width="100%"/>
      <h2 className="py-2">{data.title}</h2>
      <p className="py-2">{data.description}</p>
      <span className="author-name">{data.author}</span> <br />
      <span >{data.publishedAt}</span>
      <span className="source-name">{data.source.name}</span>
      <a href={data.url}><button className="btn btn-warning my-5">Read More</button></a>
    </div>
  );
}

export default NewsArticle;
