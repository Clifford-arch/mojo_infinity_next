import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import "../../style/slider.css";

const SectionSpace1 = ({ isLogin }) => {
  const router = useRouter();

  // State to manage the active tab
  const [activeTab, setActiveTab] = useState("multiBagger");

  // References for each section
  const multiBaggerRef = useRef(null);
  const mojoOneRef = useRef(null);

  const handleButtonClick = () => {
    if (isLogin) {
      router.push("/invest-strategy/invest");
    } else {
      router.push("/user/login");
    }
  };

  const handleTabClick = (ref, tab) => {
    setActiveTab(tab);
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <>
      <section className="sectionspace mb-1">
        <div className="container homesection p-0">
          <div className="row">
            <div className="section-header text-center">
              <div className="section_title">
                Tailored Solutions for Every Investor
              </div>
              <div className="section_subtitle">AI Driven Strategies</div>
            </div>
          </div>
          <div className="transaction-tab-bg-style">
            <div className="row justify-content-md-center justify-content-left scrollar-tab">
              <div className="col-12 tabs-content">
                <div className="d-flex justify-content-md-center justify-content-left">
                  {/* Multi Bagger Tab */}
                  <div
                    className={`tabs-text-style ${
                      activeTab === "multiBagger" ? "transact-active-tab" : ""
                    }`}
                    onClick={() =>
                      handleTabClick(multiBaggerRef, "multiBagger")
                    }
                  >
                    Multi Bagger Equity Portfolio
                  </div>

                  {/* Mojo One Tab */}
                  <div
                    className={`tabs-text-style ${
                      activeTab === "mojoOne" ? "transact-active-tab" : ""
                    }`}
                    onClick={() => handleTabClick(mojoOneRef, "mojoOne")}
                  >
                    Mojo One Strategy Portfolio
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Multi-Bagger Section */}
          <div ref={multiBaggerRef} className="row mt-3">
            <div className="col-12">
              <div className="col-12 mt-3">
                <div className="mp-card">
                  <div className="card-body">
                    <div className="row align-items-start">
                      <div className="col-12 col-md-7 me-md-4 wealth-basket">
                        <div className="d-flex  gap-3 mb-2">
                          <span className="mp-sectorIcons flex-shrink-0">
                            <img
                              src="https://sandbox-st.mojowealth.in/images/multi-bagger-portfolio-icon.png"
                              alt="icici_mm.png"
                            />
                          </span>
                          <div className="flex-grow-1 title">
                            Multi Bagger Equity Portfolio{" "}
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
                              <div className="value">25,00,000</div>
                            </div>
                            <div className="col-5 col-md-4">
                              <div className="head">No. of Stocks</div>
                              <div className="value">10</div>
                            </div>
                            <div className="col-3 col-md-3">
                              <div className="head">3 Year CAGR</div>
                              <div className="value ">
                                <img
                                  src="https://sandbox-st.mojowealth.in/images/home/carg.png"
                                  alt="carg.png"
                                  width="50"
                                  height="17"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={handleButtonClick}
                        >
                          Get Started
                        </button>
                      </div>
                      <div className="col-12 col-md-4 wealth-basket-btn d-md-block d-none">
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
            </div>
          </div>

          {/* Mojo One Section */}
          <div ref={mojoOneRef} className="row mt-md-3">
            <div className="col-12">
              <section className="sub-sectionspace">
                <div className="container bg-secondary innerspace">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <div className="section-header mt-0 mb-3">
                        <div className="section_title">
                          Using MarketsMojo? This Could Be Your Perfect Match!
                        </div>
                      </div>
                      <div>
                        <p>
                          Choose from our powerful strategies - Mojo Stocks,
                          Reliable Performers, Hidden Turnarounds, and Momentum
                          Now - customize their weightage, and get the perfect
                          mix to generate alpha.
                        </p>
                        <div className="info row mb-3">
                          <div className="col-6 col-md-4  ">
                            <div className="head">Min. Investment</div>
                            <div className="value text-left ">25,00,000</div>
                          </div>
                          <div className="col-6 col-md-4 ">
                            <div className="head">No. of Stocks</div>
                            <div className="value">10</div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-3">
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={handleButtonClick}
                        >
                          Get Started
                        </button>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 text-end">
                      <img
                        src="https://sandbox-st.mojowealth.in/images/home/perfect-match.png"
                        className="img-fluid market-img"
                        alt="perfect-match.png"
                      />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionSpace1;
