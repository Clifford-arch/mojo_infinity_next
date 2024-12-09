"use client";
import Link from "next/link";
import Image from "next/image";
import "../style/header.css";
import "../style/infinity-header.css";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import SidebarLeft from "./MojoInfinity/SidebarLeft";
import logout from "../api/logout";
import axios from "axios";
import { useAuth } from "../api/AuthContext";
import useFetch from "../api/useFetch";
import environment from "../utils/environment";

export default function Header({ onOpenLeftSidebar }) {
  const { isLogin, setIsLogin } = useAuth();
  const [profile, setProfile] = useState(false);

  const toggleProfile = () => {
    setProfile((prev) => !prev);
  };

  // const handleLogout = async () => {
  //   try {
  //     const response = await logout();
  //     if (response.code == 200) {
  //       setIsLogin(false);
  //     }
  //   } catch (error) {
  //     throw error;
  //   }
  // };

  const { post, loading, error } = useFetch();

  const handleLogout = async () => {
    // const url = "https://sandboxwealth-frapi.mojoinfinity.com/users/logout";
    const url = `${environment.API_URL}/users/logout`;
    const payload = {
      code: 200,
      message: "success",
      data: {},
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      withCredentials: true,
    };

    try {
      const response = await post(url, payload, config);
      console.log("Logout successful:", response);
    } catch (error) {
      console.log("Error during logout:", error);
    }
  };

  // useEffect(() => {
  //   const checkLogin = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://sandboxwealth-frapi.mojoinfinity.com/users/check-login",
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //             "Accept": "application/json",
  //           },
  //           withCredentials: true,
  //         }
  //       );
  //       console.log('Response Next: ', response.data.data, response.data.code);
  //       if (response.data.code == 200) {
  //         console.log('Is Login Next: ', response.data.data.is_login);
  //         setIsLogin(response.data.data.is_login);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   checkLogin();
  // }, []);

  return (
    <>
      <header
        id="mm-header"
        className="sticky-top"
        suppressHydrationWarning={true}
      >
        <div className="header-wrapper">
          <button className="openbtnleft" onClick={onOpenLeftSidebar}>
            <img
              // src="https://sandbox-st.mojoinfinity.com/images/mojoinfinity.svg"
              src={`${environment.IMG_URL}mm-infinity-logo.svg`}
              alt="hamburger"
            />
          </button>
          <h1>
            <Link
              href="/"
              // href="/hni/landing"
              className="mm-logo"
            >
              <img
                // src="https://sandbox-st.mojoinfinity.com/images/mojoinfinity.svg"
                src={`${environment.IMG_URL}mm-infinity-logo.svg`}
                alt="logo"
              />
            </Link>
          </h1>
          <nav className="links">
            <ul className="main-nav d-none">
              <li className="top-level-link current">
                <a href="/" className="mega-menu">
                  <span>
                    Stocks <i className="arrow down"></i>
                  </span>
                </a>
                <div className="sub-menu-block">
                  <div className="row-wrapper">
                    <div className="row-list">
                      <div className="nav-content">
                        <a href="#">
                          <div className="nav-heading">
                            Markets Today{" "}
                            <img
                              alt=""
                              className="right--arrow"
                              src="https://sandbox-st.mojoinfinity.com/images/right-arrow.svg"
                            />
                          </div>
                          <div className="nav-subheading">
                            {" "}
                            Monitor Indices, Stocks and News Real-time
                          </div>
                        </a>
                      </div>
                      <div className="nav-content">
                        <div className="nav-heading">
                          {" "}
                          Stocks Research{" "}
                          <img
                            alt=""
                            className="right--arrow"
                            src="https://sandbox-st.mojoinfinity.com/images/right-arrow.svg"
                          />
                        </div>
                        <div className="nav-subheading">
                          {" "}
                          Real-time Research on All 4000 Stocks{" "}
                        </div>
                      </div>
                      <div className="nav-content">
                        <div className="nav-heading">
                          {" "}
                          Result Corner{" "}
                          <img
                            alt=""
                            className="right--arrow"
                            src="https://sandbox-st.mojoinfinity.com/images/right-arrow.svg"
                          />
                        </div>
                        <div className="nav-subheading">
                          {" "}
                          Company Results and Financial Trend
                        </div>
                      </div>
                      <div className="nav-content">
                        <div className="nav-heading">
                          {" "}
                          IPO Analysis{" "}
                          <img
                            alt=""
                            className="right--arrow"
                            src="https://sandbox-st.mojoinfinity.com/images/right-arrow.svg"
                          />
                        </div>
                        <div className="nav-subheading"> Analysis of IPOs </div>
                      </div>
                    </div>
                    <div className="row-list">
                      <div className="nav-content">
                        <div className="nav-heading">
                          {" "}
                          Global Stock Research{" "}
                          <img
                            alt=""
                            className="right--arrow"
                            src="https://sandbox-st.mojoinfinity.com/images/right-arrow.svg"
                          />
                        </div>
                        <div className="nav-subheading">
                          Invest Globally, with Confidence{" "}
                        </div>
                      </div>
                      <div className="nav-content">
                        <div className="nav-heading">
                          {" "}
                          LIVE Events{" "}
                          <img
                            alt=""
                            className="right--arrow"
                            src="https://sandbox-st.mojoinfinity.com/images/right-arrow.svg"
                          />
                        </div>
                        <div className="nav-subheading">
                          {" "}
                          Learn from the Pros{" "}
                        </div>
                      </div>
                      <div className="nav-content">
                        <div className="nav-heading">
                          {" "}
                          Watchlist{" "}
                          <img
                            alt=""
                            className="right--arrow"
                            src="https://sandbox-st.mojoinfinity.com/images/right-arrow.svg"
                          />
                        </div>
                        <div className="nav-subheading">
                          {" "}
                          Your Stock Favourites{" "}
                        </div>
                      </div>
                    </div>
                    <div className="row-list">
                      <div className="nav-card">
                        <p>Dear Ansha,</p>
                        <p>
                          {" "}
                          Extend your Mojo Pro Subscription and avail free MF
                          Transactions till your subscription expires!{" "}
                        </p>
                        <button
                          className="nav-btn-white"
                          style={{ marginTop: "20px" }}
                        >
                          Extend Now!
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="top-level-link menu-highlight">
                <a className="mega-menu" href="/">
                  <span>
                    Professional <i className="arrow down"></i>
                  </span>
                </a>
                <div className="sub-menu-block">
                  <div className="row-wrapper">
                    <div className="row-list">
                      <div className="nav-content">
                        <div className="nav-heading">
                          Explore Professional{" "}
                          <img
                            alt=""
                            className="right--arrow"
                            src="https://sandbox-st.mojoinfinity.com/images/right-arrow.svg"
                          />
                        </div>
                        <div className="nav-subheading">
                          {" "}
                          India's No. 1 Stock Advisory Service{" "}
                        </div>
                      </div>
                      <div className="nav-content">
                        <div className="nav-heading">
                          Stock Recommendations{" "}
                          <img
                            alt=""
                            className="right--arrow"
                            src="https://sandbox-st.mojoinfinity.com/images/right-arrow.svg"
                          />
                        </div>
                        <div className="nav-subheading">
                          {" "}
                          Real-Time Insights Into Over 4,000 Stocks!{" "}
                        </div>
                      </div>
                      <div className="nav-content">
                        <div className="nav-heading">
                          {" "}
                          Top Stocks to Invest{" "}
                          <img
                            alt=""
                            className="right--arrow"
                            src="https://sandbox-st.mojoinfinity.com/images/right-arrow.svg"
                          />
                        </div>
                        <div className="nav-subheading">
                          {" "}
                          Grow Your Wealth with Mojo Stocks.{" "}
                        </div>
                      </div>
                      <div className="nav-content">
                        <div className="nav-heading">
                          {" "}
                          Stock of the Month{" "}
                          <img
                            alt=""
                            className="right--arrow"
                            src="https://sandbox-st.mojoinfinity.com/images/right-arrow.svg"
                          />
                        </div>
                        <div className="nav-subheading">
                          {" "}
                          Make Smart Stock Moves with CIO Pick{" "}
                        </div>
                      </div>
                    </div>
                    <div className="row-list">
                      <div className="nav-content">
                        <div className="nav-heading">
                          {" "}
                          Mutual Fund Research{" "}
                          <img
                            alt=""
                            className="right--arrow"
                            src="https://sandbox-st.mojoinfinity.com/images/right-arrow.svg"
                          />
                        </div>
                        <div className="nav-subheading">
                          Buy, Hold, Sell Mutual Fund Advisory{" "}
                        </div>
                      </div>
                      <div className="nav-content">
                        <div className="nav-heading">
                          {" "}
                          Trading Calls{" "}
                          <img
                            alt=""
                            className="right--arrow"
                            src="https://sandbox-st.mojoinfinity.com/images/right-arrow.svg"
                          />
                        </div>
                        <div className="nav-subheading">
                          {" "}
                          Daily Technical Calls!
                        </div>
                      </div>
                      <div className="nav-content">
                        <div className="nav-heading">
                          Research Report on all stocks{" "}
                          <img
                            alt=""
                            className="right--arrow"
                            src="https://sandbox-st.mojoinfinity.com/images/right-arrow.svg"
                          />
                        </div>
                        <div className="nav-subheading">
                          {" "}
                          Verdict: Instant Insights at Your Fingertips!
                        </div>
                      </div>
                      <div className="nav-content">
                        <div className="nav-heading">
                          {" "}
                          Make your own Screener{" "}
                          <img
                            alt=""
                            className="right--arrow"
                            src="https://sandbox-st.mojoinfinity.com/images/right-arrow.svg"
                          />
                        </div>
                        <div className="nav-subheading">
                          {" "}
                          Monitor your Investments!
                        </div>
                      </div>
                    </div>
                    <div className="row-list">
                      <div className="nav-content">
                        <div className="nav-heading">
                          {" "}
                          Replace your stocks with top stocks{" "}
                          <img
                            alt=""
                            className="right--arrow"
                            src="https://sandbox-st.mojoinfinity.com/images/right-arrow.svg"
                          />
                        </div>
                        <div className="nav-subheading">
                          Goodbye to Losers. Choose Winning Stocks.
                        </div>
                      </div>
                      <div className="nav-content">
                        <div className="nav-heading">
                          {" "}
                          Model Portfolio{" "}
                          <img
                            alt=""
                            className="right--arrow"
                            src="https://sandbox-st.mojoinfinity.com/images/right-arrow.svg"
                          />
                        </div>
                        <div className="nav-subheading">
                          Zero Headache Model Portfolios
                        </div>
                      </div>
                      <div className="nav-content">
                        <div className="nav-heading">
                          {" "}
                          Portfolio Optimiser{" "}
                          <img
                            alt=""
                            className="right--arrow"
                            src="https://sandbox-st.mojoinfinity.com/images/right-arrow.svg"
                          />
                        </div>
                        <div className="nav-subheading">
                          Make Your Portfolio Better
                        </div>
                      </div>
                      <div className="nav-info-wrapper">
                        <div className="nav-info-wrap-lft">
                          <span>Upgrade to Professional</span>
                          <div className="upgrade-price-wrap">
                            <span className="upgrade-price-lft">₹19,999</span>
                            <span className="upgrade-price-rht text-end">
                              ₹14,999
                            </span>
                          </div>
                        </div>
                        <div className="nav-info-wrap-rht">
                          <button className="nav-btn">Subscribe Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
          <nav className="main">
            <ul>
              {isLogin ? (
                // User profile section
                <>
                  <li className="user-login user-login-web">
                    <div className="dropdown">
                      <button
                        className="openbtnright"
                        fdprocessedid="q3fnp4"
                        onClick={toggleProfile}
                      >
                        <img
                          alt="logo"
                          // src="https://sandboxwealth-st.mojoinfinity.com/images/mm-no-img.svg"
                          src={`${environment.IMG_URL}mm-no-img.svg`}
                        />
                      </button>
                      {profile && (
                        <div className="mm-dropdown-content">
                          <a>Member Details</a>
                          <a>Brokerage Details</a>
                          <a>Residential Status</a>
                          <a>Negative List</a>
                          <a>Invoice</a>
                          <a>Feedback</a>
                          <a onClick={handleLogout}>Logout</a>
                        </div>
                      )}
                    </div>
                  </li>
                  <li className="user-login user-login-mobile">
                    <div className="dropdown">
                      <button className="openbtnright" onClick={toggleProfile}>
                        <img
                          alt="logo"
                          // src="https://sandboxwealth-st.mojoinfinity.com/images/mm-no-img.svg"
                          src={`${environment.IMG_URL}mm-no-img.svg`}
                        />
                      </button>
                      {profile && (
                        <div className="mm-dropdown-content">
                          <a>Member Details</a>
                          <a>Brokerage Details</a>
                          <a>Residential Status</a>
                          <a>Negative List</a>
                          <a>Invoice</a>
                          <a>Feedback</a>
                          <a onClick={handleLogout}>Logout</a>
                        </div>
                      )}
                    </div>
                  </li>
                </>
              ) : (
                // Login/Register buttons
                <>
                  <li className="user-login user-login-web">
                    <div className="dropdown">
                      <button
                        type="button"
                        className="btn btn-sm btn-primary register-btn"
                        onClick={() =>
                          (window.location.href = "/user/register")
                        }
                      >
                        Register
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-primary login-btn"
                        onClick={() => (window.location.href = "/user/login")}
                      >
                        Login
                      </button>
                    </div>
                  </li>
                  <li className="user-login user-login-mobile">
                    <div className="dropdown">
                      <button
                        type="button"
                        className="btn btn-sm btn-primary register-btn"
                        onClick={() =>
                          (window.location.href = "/user/register")
                        }
                      >
                        Register
                      </button>

                      <button
                        type="button"
                        className="btn btn-sm btn-primary login-btn"
                        onClick={() =>
                          (window.location.href = "/user/register")
                        }
                      >
                        Login
                      </button>
                    </div>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
