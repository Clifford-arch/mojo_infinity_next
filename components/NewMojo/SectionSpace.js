import React, { useState } from "react";

const SectionSpace = () => {
  const [selectedPortfolio, setSelectedPortfolio] = useState("multi-bagger");

  const portfolioData = {
    all: {
      title: "All Portfolios",
      content: (
        <>
          <div className="explore-text">Explore Other Portfolios</div>
          <div className="row justify-content-center pt-3">
            <div className="col-md-4 col-12 pb-3">
              <div className="inner-card-style d-flex flex-column h-100 w-100">
                <div className="conservative-portfolio">
                  Conservative Portfolio
                </div>
                <div className="risk-text">Low Risk</div>
                <div className="para-font">
                  The aim is steady growth with minimal risk, making it ideal
                  for individuals who prioritize capital preservation and are
                  risk-averse.
                </div>
                <div className="fixed-footer">
                  <div className="cards-flex-style">
                    <div className="flex-div-1">
                      <div className="investment-stock">3Y CAGR</div>
                      <div className="investment-value">12%</div>
                    </div>
                    <div className="flex-div-2">
                      <div className="investment-stock">Min. Investment</div>
                      <div className="investment-value">2,00,000</div>
                    </div>
                  </div>
                  <div className="text-center pt-3">
                    <button
                      type="button"
                      className="btn btn-lg btn-primary w-100"
                    >
                      Know More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 pb-3">
              <div className="inner-card-style d-flex flex-column h-100 w-100">
                <div className="trending">
                  <div className="conservative-portfolio">
                    Aggressive Portfolio
                  </div>
                  <div className="trending-div">TRENDING</div>
                </div>
                <div className="risk-text">High Risk</div>
                <div className="para-font">
                  The aim is high growth through investments in mid-cap and
                  small-cap stocks, making it ideal for investors with a
                  high-risk tolerance and a long investment horizon.
                </div>
                <div className="cards-flex-style">
                  <div className="flex-div-1">
                    <div className="investment-stock">3Y CAGR</div>
                    <div className="investment-value">12%</div>
                  </div>
                  <div className="flex-div-2">
                    <div className="investment-stock">Min. Investment</div>
                    <div className="investment-value">2,00,000</div>
                  </div>
                </div>
                <div className="text-center pt-3">
                  <button
                    type="button"
                    className="btn btn-lg btn-primary w-100"
                  >
                    Know More
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 pb-3">
              <div className="inner-card-style d-flex flex-column h-100 w-100">
                <div className="conservative-portfolio">Moderate Portfolio</div>
                <div className="risk-text">Medium Risk</div>
                <div className="para-font">
                  The aim is a balance between growth and stability, making it
                  suitable for individuals with a medium risk tolerance and a
                  focus on long-term returns
                </div>
                <div className="cards-flex-style">
                  <div className="flex-div-1">
                    <div className="investment-stock">3Y CAGR</div>
                    <div className="investment-value">12%</div>
                  </div>
                  <div className="flex-div-2">
                    <div className="investment-stock">Min. Investment</div>
                    <div className="investment-value">2,00,000</div>
                  </div>
                </div>
                <div className="text-center pt-3">
                  <button
                    type="button"
                    className="btn btn-lg btn-primary w-100"
                  >
                    Know More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
    "multi-bagger": {
      title: "Multi-Bagger",
      content: (
        <>
          <div className="col-12 mt-3">
            <div className="mp-card">
              <div className="card-body">
                <div className="row align-items-start">
                  <div className="col-12 col-md-7 me-md-4 wealth-basket">
                    <div className="d-flex align-items-center gap-3 mb-2">
                      <span className="mp-sectorIcons flex-shrink-0">
                        <img
                          src="https://sandbox-st.mojowealth.in/images/multi-bagger-portfolio-icon.png"
                          alt="icici_mm.png"
                        />
                      </span>
                      <div className="flex-grow-1 title">
                        Multi-Bagger Equity Portfolio{" "}
                        <div className="tag"> High Risk</div>
                      </div>
                    </div>
                    <div>
                      <p>
                        The aim is maximum capital appreciation through
                        high-risk investments, making it suitable for
                        individuals with a very high-risk tolerance and a
                        long-term perspective.
                      </p>
                      <div className="info row mb-3">
                        <div className="col-4 col-md-3 ps-0">
                          <div className="head">Min. Investment</div>
                          <div className="value">2,00,000</div>
                        </div>
                        <div className="col-5 col-md-4">
                          <div className="head">No. of Stocks</div>
                          <div className="value">10-15</div>
                        </div>
                        <div className="col-3 col-md-3">
                          <div className="head">3 Year CAGR</div>
                          <div className="value">
                            <img
                              src="https://sandbox-st.mojowealth.in/images/home/carg.png"
                              alt="carg.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <button type="button" className="btn btn-primary">
                      Know More
                    </button>
                  </div>
                  <div className="col-12 col-md-4 wealth-basket-btn">
                    <img
                      src="https://sandbox-st.mojowealth.in/images/home/graph1a-lock.png"
                      className="img-fluid"
                      alt="graph1a.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="sub-sectionspace">
            <div className="container bg-primary innerspace">
              <div className="row  ">
                <div className="col-12 col-md-6">
                  <div className="section-header mt-0">
                    <div className="section_title">
                      Be Your Own Fund Manager!
                    </div>
                  </div>
                  <p>
                    Set your stock selection rules - we will find stocks that
                    fit perfectly. Build your ideal portfolio by answering just
                    a few questions and start investing effortlessly with just
                    one click!
                  </p>
                  <div className="mt-3">
                    <button type="button" className="btn btn-primary">
                      I am Ready
                    </button>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <img
                    src="https://sandbox-st.mojowealth.in/images/home/own-fund-manager.png"
                    className="img-fluid"
                    alt="own-fund-manager.png"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="sub-sectionspace">
            <div className="container bg-secondary innerspace">
              <div className="row  ">
                <div className="col-12 col-md-6">
                  <div className="section-header mt-0">
                    <div className="section_title">
                      Using MarketsMojo? This Could Be Your Perfect Match!
                    </div>
                  </div>
                  <p>
                    Choose from our powerful strategies - Mojo Stocks, Reliable
                    Performers, Hidden Turnarounds, and Momentum Now - customize
                    their weightage, and get the perfect mix to generate alpha.
                  </p>
                  <div className="mt-3">
                    <button type="button" className="btn btn-primary">
                      I am Ready
                    </button>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <img
                    src="https://sandbox-st.mojowealth.in/images/home/perfect-match.png"
                    height="260px"
                    className="img-fluid"
                    alt="perfect-match.png"
                  />
                </div>
              </div>
            </div>
          </section>
        </>
      ),
    },
    aggressive: {
      title: "Aggressive",
      content: (
        <div className="col-12 mt-3">
          <div className="mp-card">
            <div className="card-body">
              <div className="row align-items-start">
                <div className="col-12 col-md-7 me-md-4 wealth-basket">
                  <div className="d-flex align-items-center gap-3 mb-2">
                    <span className="mp-sectorIcons flex-shrink-0">
                      <img
                        src="https://sandbox-st.mojowealth.in/images/aggressive-portfolio-icon.png"
                        alt="icici_mm.png"
                      />
                    </span>
                    <div className="flex-grow-1 title">
                      Aggressive Portfolio <div className="tag"> High Risk</div>
                    </div>
                  </div>
                  <div>
                    <p>
                      The aim is maximum capital appreciation through high-risk
                      investments, making it suitable for individuals with a
                      very high-risk tolerance and a long-term perspective.
                    </p>
                    <div className="info row mb-3">
                      <div className="col-4 col-md-3 ps-0">
                        <div className="head">Min. Investment</div>
                        <div className="value">2,00,000</div>
                      </div>
                      <div className="col-5 col-md-4">
                        <div className="head">No. of Stocks</div>
                        <div className="value">10-15</div>
                      </div>
                      <div className="col-3 col-md-3">
                        <div className="head">3 Year CAGR</div>
                        <div className="value">
                          <img
                            src="https://sandbox-st.mojowealth.in/images/home/carg.png"
                            alt="carg.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button type="button" className="btn btn-primary">
                    Know More
                  </button>
                </div>
                <div className="col-12 col-md-4 wealth-basket-btn">
                  <img
                    src="https://sandbox-st.mojowealth.in/images/home/graph1a-lock.png"
                    className="img-fluid"
                    alt="graph1a.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    moderate: {
      title: "Moderate",
      content: (
        <div className="col-12 mt-3">
          <div className="mp-card">
            <div className="card-body">
              <div className="row align-items-start">
                <div className="col-12 col-md-7 me-md-4 wealth-basket">
                  <div className="d-flex align-items-center gap-3 mb-2">
                    <span className="mp-sectorIcons flex-shrink-0">
                      <img
                        src="https://sandbox-st.mojowealth.in/images/moderate-portfolio-icon.png"
                        alt="icici_mm.png"
                      />
                    </span>
                    <div className="flex-grow-1 title">
                      Moderate Portfolio <div className="tag"> High Risk</div>
                    </div>
                  </div>
                  <div>
                    <p>
                      The aim is maximum capital appreciation through high-risk
                      investments, making it suitable for individuals with a
                      very high-risk tolerance and a long-term perspective.
                    </p>
                    <div className="info row mb-3">
                      <div className="col-4 col-md-3 ps-0">
                        <div className="head">Min. Investment</div>
                        <div className="value">2,00,000</div>
                      </div>
                      <div className="col-5 col-md-4">
                        <div className="head">No. of Stocks</div>
                        <div className="value">10-15</div>
                      </div>
                      <div className="col-3 col-md-3">
                        <div className="head">3 Year CAGR</div>
                        <div className="value">
                          <img
                            src="https://sandbox-st.mojowealth.in/images/home/carg.png"
                            alt="carg.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button type="button" className="btn btn-primary">
                    Know More
                  </button>
                </div>
                <div className="col-12 col-md-4 wealth-basket-btn">
                  <img
                    src="https://sandbox-st.mojowealth.in/images/home/graph1a-lock.png"
                    className="img-fluid"
                    alt="graph1a.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    conservative: {
      title: "Conservative",
      content: (
        <div className="col-12 mt-3">
          <div className="mp-card">
            <div className="card-body">
              <div className="row align-items-start">
                <div className="col-12 col-md-7 me-md-4 wealth-basket">
                  <div className="d-flex align-items-center gap-3 mb-2">
                    <span className="mp-sectorIcons flex-shrink-0">
                      <img
                        src="https://sandbox-st.mojowealth.in/images/conservative-portfolio-icon.png"
                        alt="icici_mm.png"
                      />
                    </span>
                    <div className="flex-grow-1 title">
                      Conservative Portfolio{" "}
                      <div className="tag"> High Risk</div>
                    </div>
                  </div>
                  <div>
                    <p>
                      The aim is maximum capital appreciation through high-risk
                      investments, making it suitable for individuals with a
                      very high-risk tolerance and a long-term perspective.
                    </p>
                    <div className="info row mb-3">
                      <div className="col-4 col-md-3 ps-0">
                        <div className="head">Min. Investment</div>
                        <div className="value">2,00,000</div>
                      </div>
                      <div className="col-5 col-md-4">
                        <div className="head">No. of Stocks</div>
                        <div className="value">10-15</div>
                      </div>
                      <div className="col-3 col-md-3">
                        <div className="head">3 Year CAGR</div>
                        <div className="value">
                          <img
                            src="https://sandbox-st.mojowealth.in/images/home/carg.png"
                            alt="carg.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button type="button" className="btn btn-primary">
                    Know More
                  </button>
                </div>
                <div className="col-12 col-md-4 wealth-basket-btn">
                  <img
                    src="https://sandbox-st.mojowealth.in/images/home/graph1a-lock.png"
                    className="img-fluid"
                    alt="graph1a.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  };
  const handleClick = (portfolio) => (event) => {
    event.preventDefault(); // Prevent scroll
    setSelectedPortfolio(portfolio); // Update selected portfolio
  };

  return (
    <>
      <section className="sectionspace mb-1">
        <div className="container homesection p-0">
          <div className="row ">
            <div className="section-header text-center">
              <div className="section_title1">
                Tailored Solutions for Every Investor
              </div>
              <div className="section_subtitle">AI Driven Strategies</div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="faq-list">
                <div className="floating-menu">
                  <ul>
                    <li>
                      <a
                        href="#"
                        className={selectedPortfolio === "all" ? "active" : ""}
                        onClick={handleClick("all")}
                      >
                        All Portfolios
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className={
                          selectedPortfolio === "multi-bagger" ? "active" : ""
                        }
                        onClick={handleClick("multi-bagger")}
                      >
                        Multi-Bagger
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className={
                          selectedPortfolio === "aggressive" ? "active" : ""
                        }
                        onClick={handleClick("aggressive")}
                      >
                        Aggressive
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className={
                          selectedPortfolio === "moderate" ? "active" : ""
                        }
                        onClick={handleClick("moderate")}
                      >
                        Moderate
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className={
                          selectedPortfolio === "conservative" ? "active" : ""
                        }
                        onClick={handleClick("conservative")}
                      >
                        Conservative
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12">
              {/* <h3>{portfolioData[selectedPortfolio].title}</h3> */}
              {portfolioData[selectedPortfolio].content}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionSpace;
