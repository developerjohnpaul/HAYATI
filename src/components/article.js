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
        {App.popUpStatus === "save" && <div id="ge2"></div>}
        <div id="rere1">
          <div className="flexStart">
            <button
              type="button"
              id="rere2"
              onClick={() => {
                Navigate("/");
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
  const [status, setStatus] = useState("pending");

  return (
    <>
      <div className="flexColumnStart">
        <div id="ge3">
          <div className="flexSpaceBetween" id="columnTitleContainer">
            {" "}
            <small id="columnTitle">Trending Articles</small>
          </div>
          <div id="arre1">
            {App.trendingArticles.map((value, index) => (
              <div key={index}>
                <div id="arre2">
                  <div id="arre3">
               <img alt=""
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

                      {value.bookMarked && (
                        <button
                          id="arre24"
                          onClick={() => {
                            Api.setArticles((valu) => {
                              return valu.map((val) => {
                                if (value.id === val.id) {
                                  return {
                                    ...val,
                                    bookMarked: false,
                                  };
                                } else {
                                  return val;
                                }
                              });
                            });
                          }}
                        >
                          <BsBookmarkFill />
                        </button>
                      )}
                      {!value.bookMarked && (
                        <button
                          id="arre25"
                          onClick={() => {
                            Api.setArticles((valu) => {
                              return valu.map((val) => {
                                if (value.id === val.id) {
                                  return {
                                    ...val,
                                    bookMarked: true,
                                  };
                                } else {
                                  return val;
                                }
                              });
                            });
                          }}
                        >
                          <BsBookmarkFill />
                        </button>
                      )}
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
            <small id="columnTitle">Bookmark</small>
            <button
              type="button"
              id="columnViewAllBtn"
              onClick={() => {
                Navigate("/Bookmark");
                App.instantScrollToTop();
              }}
            >
              View All{" "}
              <span id="columnViewAllIcon">
                <MdNavigateNext />{" "}
              </span>
            </button>
          </div>
          {App.bookmark === null && (
            <div>
              <div id="arre28">
                {" "}
           <img alt=""
                  src={require("../images/emptyBookmarkAnimation.jpg")}
                  id="arre26"
                />
                <p id="arre27">oops your bookmark appears to be empty</p>
              </div>
            </div>
          )}
          {App.bookmark !== null && (
            <div id="arre29">
              {" "}
              <div id="arre23">
                <div id="arre17">
             <img alt=""
                    src={App.bookmark.articleImg}
                    id="arre19"
                    onClick={() => {
                      Navigate(
                        `/Article/Tabbed#${CryptoJS.AES.encrypt(
                          JSON.stringify(App.bookmark.id),
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
                      <li id="arre20">{App.bookmark.timePosted}</li>

                      {App.bookmark.bookMarked && (
                        <button
                          id="arre24"
                          onClick={() => {
                            Api.setArticles((valu) => {
                              return valu.map((val) => {
                                if (App.bookmark.id === val.id) {
                                  return {
                                    ...val,
                                    bookMarked: false,
                                  };
                                } else {
                                  return val;
                                }
                              });
                            });
                          }}
                        >
                          <BsBookmarkFill />
                        </button>
                      )}
                      {!App.bookmark.bookMarked && (
                        <button
                          id="arre25"
                          onClick={() => {
                            Api.setArticles((valu) => {
                              return valu.map((val) => {
                                if (App.bookmark.id === val.id) {
                                  return {
                                    ...val,
                                    bookMarked: true,
                                  };
                                } else {
                                  return val;
                                }
                              });
                            });
                          }}
                        >
                          <BsBookmarkFill />
                        </button>
                      )}
                    </div>
                    <li id="arre21">{App.bookmark.title}</li>
                    <div className="flexSpaceBetween">
                      {" "}
                      <li id="arre20">{App.bookmark.author}</li>
                      <li id="arre20">
                        {App.bookmark.read && (
                          <>
                            <span>read</span>{" "}
                            <span> {App.bookmark.timeRead}</span>
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
                            JSON.stringify(App.bookmark.id),
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
            </div>
          )}
          <div className="flexSpaceBetween" id="columnTitleContainer">
            {" "}
            <small id="columnTitle">Related Articles</small>
          </div>

          <div className="flexColumnCenter">
            {App.relatedArticles.map((value, index) => (
              <div id="arre16" key={index}>
                <div id="arre17">
             <img alt=""
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
                      {value.bookMarked && (
                        <button
                          id="arre24"
                          onClick={() => {
                            Api.setArticles((valu) => {
                              return valu.map((val) => {
                                if (value.id === val.id) {
                                  return {
                                    ...val,
                                    bookMarked: false,
                                  };
                                } else {
                                  return val;
                                }
                              });
                            });
                          }}
                        >
                          <BsBookmarkFill />
                        </button>
                      )}
                      {!value.bookMarked && (
                        <button
                          id="arre25"
                          onClick={() => {
                            Api.setArticles((valu) => {
                              return valu.map((val) => {
                                if (value.id === val.id) {
                                  return {
                                    ...val,
                                    bookMarked: true,
                                  };
                                } else {
                                  return val;
                                }
                              });
                            });
                          }}
                        >
                          <BsBookmarkFill />
                        </button>
                      )}
                    </div>
                    <li id="arre21">{value.title}</li>
                    <div className="flexSpaceBetween">
                      {" "}
                      <li id="arre20">{value.author}</li>
                      <li id="arre20">
                        {value.read && (
                          <>
                            <span>read</span> <span> {value.timeRead}</span>
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
  const [status, setStatus] = useState("pending");
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
      return value.id === decryptedSID;
    });
    setTabbedArticle(article[0]);
  });

  return (
    <>
      <div className="flexColumnStart">
        <div>
          <div id="tare1">
       <img alt="" src={tabbedArticle.articleImg} id="tare2" />
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
          {tabbedArticle.bookMarked && (
            <button id="hmre21">
              <BsBookmarkFill />
            </button>
          )}
          {!tabbedArticle.bookMarked && (
            <button id="hmre30">
              <BsBookmarkFill />
            </button>
          )}
        </div>
        <div id="ge5">
          {" "}
          <h3 id="tare6">{tabbedArticle.title}</h3>
          <div className="flexSpaceBetween">
            <div className="flexStart">
              <div id="tare11">
           <img alt="" src={tabbedArticle.authorImg} id="tare7" />
              </div>
              <li id="tare8">{tabbedArticle.author}</li>
              <li id="tare8">
                {" "}
                {tabbedArticle.read && (
                  <>
                    <span>read</span> <span> {tabbedArticle.timeRead}</span>
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

export const BookmarkNav = () => {
  useEffect(() => {
    App.setCurrentPage("Article");
  }, []);
  const Navigate = useNavigate();
  const App = useContext(app);
  const [status, setStatus] = useState("pending");

  return (
    <>
      <div id="rere4">
        {" "}
        {App.popUpStatus === "save" && <div id="ge2"></div>}
        <div id="rere1">
          <div className="flexStart">
            <button
              type="button"
              id="rere2"
              onClick={() => {
                Navigate("/Article");
              }}
            >
              <IoIosArrowBack />
            </button>
            <li id="rere3">Bookmark</li>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
};
export const Bookmark = () => {
  const Api = useContext(mockApi);
  const App = useContext(app);
  const Navigate = useNavigate();
  const [status, setStatus] = useState("pending");

  const [bookmark, setBookmark] = useState([]);
  useEffect(() => {
    const bookmarkedArticles = Api.articles.filter((value) => {
      return value.bookMarked === true;
    });
    setBookmark(bookmarkedArticles);
  }, [Api.articles]);
  return (
    <div className="flexColumnStart">
      <div id="ge3">
        {" "}
        {bookmark.length === 0 && (
          <div id="arre30">
            <div id="arre28">
              {" "}
         <img alt=""
                src={require("../images/emptyBookmarkAnimation.jpg")}
                id="arre26"
              />
              <p id="arre27">oops your bookmark appears to be empty</p>
            </div>
          </div>
        )}
        {bookmark.map((value, index) => (
          <div key={index}>
            <div id="arre29">
              {" "}
              <div id="arre23">
                <div id="arre17">
             <img alt=""
                    src={value.articleImg}
                    id="arre19"
                    onClick={() => {
                      Navigate(
                        `/Article/Tabbed#${CryptoJS.AES.encrypt(
                          JSON.stringify(bookmark.id),
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

                      {value.bookMarked && (
                        <button
                          id="arre24"
                          onClick={() => {
                            Api.setArticles((valu) => {
                              return valu.map((val) => {
                                if (value.id === val.id) {
                                  return {
                                    ...val,
                                    bookMarked: false,
                                  };
                                } else {
                                  return val;
                                }
                              });
                            });
                          }}
                        >
                          <BsBookmarkFill />
                        </button>
                      )}
                      {!value.bookMarked && (
                        <button
                          id="arre25"
                          onClick={() => {
                            Api.setArticles((valu) => {
                              return valu.map((val) => {
                                if (value.id === val.id) {
                                  return {
                                    ...val,
                                    bookMarked: true,
                                  };
                                } else {
                                  return val;
                                }
                              });
                            });
                          }}
                        >
                          <BsBookmarkFill />
                        </button>
                      )}
                    </div>
                    <li id="arre21">{value.title}</li>
                    <div className="flexSpaceBetween">
                      {" "}
                      <li id="arre20">{value.author}</li>
                      <li id="arre20">
                        {value.read && (
                          <>
                            <span>read</span> <span> {value.timeRead}</span>
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
