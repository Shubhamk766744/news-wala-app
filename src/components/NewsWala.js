import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import NewsArticle from "./NewsArticle";

function NewsWala(props) {
  const { data } = useContext(NewsContext);
  console.log(data);

  return (
    <div className="">
      <h1 className="head__text">Today's Headlines</h1>
      <p>Know What's Happening Around The Globe</p>
      <hr className="py-3 my-3"/>
      <div className="">
        {data
          ? data.articles.map((news) => (<div className="row">
          
          <NewsArticle data={news} key={news.url} />
          </div>))
          : "Kidnly Wait For a Few Seconds"}
      </div>
    </div>
  );
}

export default NewsWala;
