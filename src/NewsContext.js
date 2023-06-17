import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "acb341ba27f64ce6a3ececf56173a5dd";

  useEffect(() => {
    axios
      // .get(
      //   `https://newsapi.org/v2/top-headlines?country=in&apiKey=acb341ba27f64ce6a3ececf56173a5dd&q=india`
      // )
      .get(
        'https://newsapi.org/v2/everything?q=bitcoin&apiKey=acb341ba27f64ce6a3ececf56173a5dd'
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};