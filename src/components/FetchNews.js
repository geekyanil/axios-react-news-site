import React, { useState } from "react";
import axios from "axios";
function FetchNews() {
  const [news, setNews] = useState();

  const fetchNews = () => {
    // console.log("clicked");
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=fc9757077b044f57a769c04fa8999065"
      )
      .then((response) => {
        console.log(response.data.articles);
        setNews(response.data.articles);
      });
  };
  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-4">
            <button className="btn btn-primary" onClick={fetchNews}>
              Fetch News
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {news?.map((item) => {
            return (
              <div className="col-4">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={item.urlToImage}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                    >
                      Read More...
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default FetchNews;
