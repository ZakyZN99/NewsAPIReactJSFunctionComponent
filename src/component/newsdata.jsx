import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import NavBar from "./navbar";
import ReactLoading from "react-loading";

export const NewsMain = () => {
  const [newsData, setnewsData] = useState([]);
  const [error, setError] = useState([]);

  const handleNewsData = async (searchQuery) => {
    try {
      const url = searchQuery
        ? `https://newsapi.org/v2/everything?qInTitle=${searchQuery}&apiKey=1f75fdb1ac9645af8d3e176292ac7907`
        : `https://newsapi.org/v2/everything?q=Indonesia&apiKey=1f75fdb1ac9645af8d3e176292ac7907`;
      const res = await axios.get(url);
      //   console.log(res.data.articles);
      const dataJson = res.data.articles;
      setnewsData(dataJson);
    } catch (err) {
      console.log(err);
      setError(err);
    }
  };

  useEffect(() => {
    handleNewsData();
  }, []);

  if (handleNewsData === 0) {
    return (
      <div className="card-container container flex">
      <ReactLoading
        type={"balls"}
        color="#000"
        height={"667"}
        width={"375"}
      />
    </div>
    )
  } else {
    return (
      <div className="card-container container flex" id="home">
        <NavBar onSearch={handleNewsData} />
        {newsData.map((articles, index) => {
          const date = new Date(articles.publishedAt).toLocaleString("id-ID", {
            timeZone: "Asia/Jakarta",
          });
          return (
            <div id="news-card" key={articles.index} className="card">
              <div className="card-header">
                <img src={articles.urlToImage} alt="newsImg" id="news-img" />
              </div>
              <div className="card-content">
                <h3 id="news-title">{articles.title}</h3>
                <h6 id="news-date" className="news-date">
                  {articles.author} - {date}
                </h6>
                <p id="news-content" className="news-content">
                  {articles.description}
                </p>
                <br />
                <Card.Link href={articles.url} className="card-link">
                  Read More
                </Card.Link>
              </div>
            </div>
          );
        })}
        ;
      </div>
    );
  }
};
