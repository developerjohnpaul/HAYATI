import { useContext, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { app } from "../App";
import { useEffect } from "react";
import { mockApi } from "./mockApi";
import { MdNavigateNext } from "react-icons/md";
import { BsBookmarkFill } from "react-icons/bs";
import { MdOutlineMenuBook } from "react-icons/md";
import CryptoJS from "crypto-js";
export const ArticleNav = () => {
  useEffect(() => {
    App.setCurrentPage("Article");
  }, []);
  const Navigate = useNavigate();
  const App = useContext(app);
  return (
    <>
      <div id="rere4">
        {" "}
        {App.popUpStatus == "save" && <div id="ge2"></div>}
        <div id="rere1">
          <div className="flexStart">
            <button
              type="button"
              id="rere2"
              onClick={() => {
                Navigate(-1);
              }}
            >
              <IoIosArrowBack />
            </button>
            <li id="rere3">Article</li>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};
export const Article = () => {
  const Api = useContext(mockApi);
  const Navigate = useNavigate();
  const App = useContext(app);
  const [trendingArticles, setTrendingArticles] = useState([]);
  const [relatedArticles, setRelatedArticles] = useState([]);
  useEffect(() => {
    const trendingArticle = Api.articles.filter((value) => {
      return value.status == "trending";
    });
    setTrendingArticles(trendingArticle);
    const relatedArticle = Api.articles.filter((value) => {
      return value.status == "related";
    });
    setRelatedArticles(relatedArticle);
  }, []);

  return (
    <>
      <div className="flexColumnStart">
        <div id="ge3">
          <div className="flexSpaceBetween" id="columnTitleContainer">
            {" "}
            <small id="columnTitle">Trending Articles</small>
          </div>
          <div id="arre1">
            {trendingArticles.map((value, index) => (
              <div key={index}>
                <div id="arre2">
                  <div id="arre3">
                    <img
                      src={value.articleImg}
                      id="arre4"
                      onClick={() => {
                        Navigate(
                          `/Article/Tabbed#${CryptoJS.AES.encrypt(
                            JSON.stringify(value.id),
                            App.SK
                          ).toString()}`
                        );
                        App.instantScrollToTop();
                      }}
                    />
                  </div>
                  <div id="arre5">
                    <div className="flexSpaceBetweenFirstBaseeline">
                      <li id="arre6">{value.title}</li>
                      {value.title.length > 108 && (
                        <small id="arre9">...</small>
                      )}
                      <li id="arre10">
                        <BsBookmarkFill />
                      </li>
                    </div>
                    <div className="flexSpaceBetween mt-1" id="arre15">
                      <small className="flexCenter listStyleNone">
                        {" "}
                        <small id="arre11">Author:{value.author}</small>
                        {value.author.length > 11 && (
                          <small id="arre12">...</small>
                        )}
                      </small>
                      <li id="arre13">{value.timeRead}</li>
                      <li id="arre14">{value.timePosted}</li>
                    </div>
                  </div>
                </div>
              </div>
            ))}{" "}
          </div>
          <div className="flexSpaceBetween" id="columnTitleContainer">
            {" "}
            <small id="columnTitle">Related Articles</small>
            <button type="button" id="columnViewAllBtn">
              View All{" "}
              <span id="columnViewAllIcon">
                <MdNavigateNext />{" "}
              </span>
            </button>
          </div>
          <div className="flexColumnCenter">
            {relatedArticles.map((value, index) => (
              <div id="arre16" key={index}>
                <div id="arre17">
                  <img
                    src={value.articleImg}
                    id="arre19"
                    onClick={() => {
                      Navigate(
                        `/Article/Tabbed#${CryptoJS.AES.encrypt(
                          JSON.stringify(value.id),
                          App.SK
                        ).toString()}`
                      );
                      App.instantScrollToTop();
                    }}
                  />
                </div>
                <div id="arre18">
                  <div>
                    {" "}
                    <div className="flexSpaceBetweenFirstBaseeline">
                      <li id="arre20">{value.timePosted}</li>

                      <li id="arre10">
                        <BsBookmarkFill />
                      </li>
                    </div>
                    <li id="arre21">{value.title}</li>
                    <div className="flexSpaceBetween">
                      {" "}
                      <li id="arre20">{value.author}</li>
                      <li id="arre20">
                        {value.read && (
                          <>
                            <span> {value.timeRead}</span> <span>read</span>
                          </>
                        )}
                      </li>
                    </div>
                    <button
                      type="button"
                      id="arre22"
                      onClick={() => {
                        Navigate(
                          `/Article/Tabbed#${CryptoJS.AES.encrypt(
                            JSON.stringify(value.id),
                            App.SK
                          ).toString()}`
                        );
                        App.instantScrollToTop();
                      }}
                    >
                      Read Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export const TabbedArticle = () => {
  const Navigate = useNavigate();
  const location = useLocation();
  const App = useContext(app);
  useEffect(() => {
    App.setCurrentPage("Article");
  }, []);
  const Api = useContext(mockApi);
  const [tabbedArticle, setTabbedArticle] = useState({});
  useEffect(() => {
    const encryptedSID = location.hash.substring(1);
    const decryptedSID = CryptoJS.AES.decrypt(encryptedSID, App.SK).toString(
      CryptoJS.enc.Utf8
    );

    const article = Api.articles.filter((value, index) => {
      return value.id == decryptedSID;
    });
    setTabbedArticle(article[0]);
  });
  return (
    <>
      <div className="flexColumnStart">
        <div>
          <div id="tare1">
            <img src={tabbedArticle.articleImg} id="tare2" />
          </div>
        </div>
        <div className="flexSpaceBetween" id="tare3">
          <button
            type="button"
            id="tare4"
            onClick={() => {
              Navigate("/Article");
            }}
          >
            <IoIosArrowBack />
          </button>
          <li id="tare5">
            <BsBookmarkFill />
          </li>
        </div>
        <div id="ge5">
          {" "}
          <h3 id="tare6">{tabbedArticle.title}</h3>
          <div className="flexSpaceBetween">
            <div className="flexStart">
              <div id="tare11">
                <img src={tabbedArticle.authorImg} id="tare7" />
              </div>
              <li id="tare8">{tabbedArticle.author}</li>
              <li id="tare8">
                {" "}
                {tabbedArticle.read && (
                  <>
                    <span> {tabbedArticle.timeRead}</span> <span>read</span>
                  </>
                )}
              </li>{" "}
              <li id="tare8">{tabbedArticle.timePosted}</li>
            </div>
            <li id="tare9">
              <MdOutlineMenuBook />
            </li>
          </div>
          <p id="tare10">{tabbedArticle.content}</p>
        </div>
      </div>
    </>
  );
};
