import { useRouter } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";
import "../../style/slider.css";
import { Content } from "next/font/google";

const SectionSpace = ({ isLogin }) => {
  const [selectedPortfolio, setSelectedPortfolio] = useState("multi-bagger");
  const router = useRouter();
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const sliderWrapperRef = useRef(null);

  const handleButtonClick = () => {
    if (isLogin) {
      router.push("/invest-strategy/invest");
    } else {
      router.push("/user/login");
    }
  };
  // const [slidesToShow, setSlidesToShow] = useState(3);
  // const handleResize = () => {
  //   if (window.innerWidth <= 768) {
  //     setSlidesToShow(1); // Show 1 slide on smaller screens
  //   } else {
  //     setSlidesToShow(3); // Show 3 slides on larger screens
  //   }
  // };

  // useEffect(() => {
  //   handleResize(); // Initial resize check
  //   window.addEventListener("resize", handleResize); // Listen for screen resize
  //   return () => window.removeEventListener("resize", handleResize); // Cleanup listener
  // }, []);
  // const slides = [
  //   {
  //     title: "Conservative Portfolio",
  //     risk: "Low Risk",
  //     description:
  //       "The aim is steady growth with minimal risk, making it ideal for individuals who prioritize capital preservation and are risk-averse.",
  //     cagr: "12%",
  //     investment: "2,00,000",
  //   },
  //   {
  //     title: "Aggressive Portfolio",
  //     risk: "High Risk",
  //     description:
  //       "The aim is high growth through investments in mid-cap and small-cap stocks, making it ideal for investors with a high-risk tolerance.",
  //     cagr: "15%",
  //     investment: "5,00,000",
  //   },
  //   {
  //     title: "Moderate Portfolio",
  //     risk: "Medium Risk",
  //     description:
  //       "The aim is a balance between growth and stability, making it suitable for individuals with a medium risk tolerance.",
  //     cagr: "10%",
  //     investment: "3,00,000",
  //   },
  //   {
  //     title: "Moderate Portfolio",
  //     risk: "Medium Risk",
  //     description:
  //       "The aim is a balance between growth and stability, making it suitable for individuals with a medium risk tolerance.",
  //     cagr: "10%",
  //     investment: "3,00,000",
  //   },
  // ];

  // const handlePrev = () => {
  //   setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  // };

  // const handleNext = () => {
  //   const maxIndex = slides.length - slidesToShow;
  //   setCurrentIndex((prevIndex) => Math.min(maxIndex, prevIndex + 1));
  // };

  const portfolioData = {
    // all: {
    //   title: "All Portfolios",
    //   content: (
    //     <>
    //       {/* <div className="explore-text">Explore Other Portfolios</div> */}
    //       <div className="row justify-content-center pt-3 explore-portfolios">
    //         <div className="col-md-3 col-12 pb-3">
    //           <div className="inner-card-style d-flex flex-column h-100 w-100">
    //             <div className="conservative-portfolio">
    //               Multi-Bagger Equity Portfolio
    //             </div>
    //             <div className="risk-text">Very High Risk</div>
    //             <div className="para-font">
    //               The aim is maximum capital appreciation through high-risk
    //               investments, making it suitable for very high-risk investors
    //               and a long-term perspective
    //             </div>
    //             <div className="cards-flex-style">
    //               <div className="flex-div-1 text-center">
    //                 <div className="investment-stock">3Y CAGR</div>
    //                 <div className="investment-value">12%</div>
    //               </div>
    //               <div className="flex-div-2 text-center">
    //                 <div className="investment-stock">Min. Investment</div>
    //                 <div className="investment-value">2,00,000</div>
    //               </div>
    //             </div>
    //             <div className="text-center pt-3">
    //               <button
    //                 type="button"
    //                 className="btn  btn-primary w-100"
    //                 onClick={handleButtonClick}
    //               >
    //                 Know More
    //               </button>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="col-md-3 col-12 pb-3">
    //           <div className="inner-card-style d-flex flex-column h-100 w-100">
    //             <div className="trending">
    //               <div className="conservative-portfolio">
    //                 Aggressive Portfolio
    //               </div>
    //               <div className="trending-div">TRENDING</div>
    //             </div>
    //             <div className="risk-text">High Risk</div>
    //             <div className="para-font">
    //               The aim is high growth through investments in mid-cap and
    //               small-cap stocks, making it ideal for investors with a
    //               high-risk tolerance and a long investment horizon.
    //             </div>
    //             <div className="cards-flex-style">
    //               <div className="flex-div-1 text-center">
    //                 <div className="investment-stock">3Y CAGR</div>
    //                 <div className="investment-value">12%</div>
    //               </div>
    //               <div className="flex-div-2 text-center">
    //                 <div className="investment-stock">Min. Investment</div>
    //                 <div className="investment-value">2,00,000</div>
    //               </div>
    //             </div>
    //             <div className="text-center pt-3">
    //               <button
    //                 type="button"
    //                 className="btn  btn-primary w-100"
    //                 onClick={handleButtonClick}
    //               >
    //                 Know More
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col-md-3 col-12 pb-3">
    //           <div className="inner-card-style d-flex flex-column h-100 w-100">
    //             <div className="conservative-portfolio">Moderate Portfolio</div>
    //             <div className="risk-text">Medium Risk</div>
    //             <div className="para-font">
    //               The aim is a balance between growth and stability, making it
    //               suitable for individuals with a medium risk tolerance and a
    //               focus on long-term returns
    //             </div>
    //             <div className="cards-flex-style">
    //               <div className="flex-div-1 text-center">
    //                 <div className="investment-stock">3Y CAGR</div>
    //                 <div className="investment-value">12%</div>
    //               </div>
    //               <div className="flex-div-2 text-center">
    //                 <div className="investment-stock">Min. Investment</div>
    //                 <div className="investment-value">2,00,000</div>
    //               </div>
    //             </div>
    //             <div className="text-center pt-3">
    //               <button
    //                 type="button"
    //                 className="btn  btn-primary w-100"
    //                 onClick={handleButtonClick}
    //               >
    //                 Know More
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col-md-3 col-12 pb-3">
    //           <div className="inner-card-style d-flex flex-column h-100 w-100">
    //             <div className="conservative-portfolio">
    //               Conservative Portfolio
    //             </div>
    //             <div className="risk-text">Low Risk</div>
    //             <div className="para-font">
    //               The aim is steady growth with minimal risk, making it ideal
    //               for individuals who prioritize capital preservation and are
    //               risk-averse.
    //             </div>
    //             <div className="fixed-footer">
    //               <div className="cards-flex-style">
    //                 <div className="flex-div-1 text-center">
    //                   <div className="investment-stock">3Y CAGR</div>
    //                   <div className="investment-value">12%</div>
    //                 </div>
    //                 <div className="flex-div-2 text-center">
    //                   <div className="investment-stock">Min. Investment</div>
    //                   <div className="investment-value">2,00,000</div>
    //                 </div>
    //               </div>
    //               <div className="text-center pt-3">
    //                 <button
    //                   type="button"
    //                   className="btn  btn-primary w-100"
    //                   onClick={handleButtonClick}
    //                 >
    //                   Know More
    //                 </button>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       {/* <div className="slider-container">
    //         <div
    //           className="slider-wrapper"
    //           ref={sliderWrapperRef}
    //           style={{
    //             display: "flex",
    //             transform: `translateX(${
    //               -currentIndex * (100 / slidesToShow)
    //             }%)`,
    //             transition: "transform 0.3s ease-in-out",
    //           }}
    //         >
    //           {slides.map((slide, index) => (
    //             <div
    //               className="slide"
    //               key={index}
    //               style={{ flex: `0 0 ${100 / slidesToShow}%` }}
    //             >
    //               <div className="inner-card-style">
    //                 <div className="conservative-portfolio">{slide.title}</div>
    //                 <div className="risk-text">{slide.risk}</div>
    //                 <div className="para-font">{slide.description}</div>
    //                 <div className="cards-flex-style">
    //                   <div className="flex-div-1">
    //                     <div className="investment-stock">3Y CAGR</div>
    //                     <div className="investment-value">{slide.cagr}</div>
    //                   </div>
    //                   <div className="flex-div-2">
    //                     <div className="investment-stock">Min. Investment</div>
    //                     <div className="investment-value">
    //                       {slide.investment}
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div className="text-center pt-3">
    //                   <button
    //                     type="button"
    //                     className="btn btn-primary w-100"
    //                     onClick={handleButtonClick}
    //                   >
    //                     Know More
    //                   </button>
    //                 </div>
    //               </div>
    //             </div>
    //           ))}
    //         </div>
    //         <button className="slider-btn prev-btn" onClick={handlePrev}>
    //           &lt;
    //         </button>
    //         <button className="slider-btn next-btn" onClick={handleNext}>
    //           &gt;
    //         </button>
    //       </div> */}
    //     </>
    //   ),
    // },
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
                          <div className="value">2,00,000</div>
                        </div>
                        <div className="col-5 col-md-4">
                          <div className="head">No. of Stocks</div>
                          <div className="value">10-15</div>
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
        </>
      ),
    },
    "mojoone": {
      title: "Mojo One",
      content: (
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
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleButtonClick}
                  >
                    I am Ready
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
      ),
    },
    // aggressive: {
    //   title: "Aggressive",
    //   content: (
    //     <div className="col-12 mt-3">
    //       <div className="mp-card">
    //         <div className="card-body">
    //           <div className="row align-items-start">
    //             <div className="col-12 col-md-7 me-md-4 wealth-basket">
    //               <div className="d-flex align-items-center gap-3 mb-2">
    //                 <span className="mp-sectorIcons flex-shrink-0">
    //                   <img
    //                     src="https://sandbox-st.mojowealth.in/images/aggressive-portfolio-icon.png"
    //                     alt="icici_mm.png"
    //                   />
    //                 </span>
    //                 <div className="flex-grow-1 title">
    //                   Aggressive Portfolio <div className="tag"> High Risk</div>
    //                 </div>
    //               </div>
    //               <div>
    //                 <p>
    //                   The aim is maximum capital appreciation through high-risk
    //                   investments, making it suitable for individuals with a
    //                   very high-risk tolerance and a long-term perspective.
    //                 </p>
    //                 <div className="info row mb-3">
    //                   <div className="col-4 col-md-3 ps-0">
    //                     <div className="head">Min. Investment</div>
    //                     <div className="value">2,00,000</div>
    //                   </div>
    //                   <div className="col-5 col-md-4">
    //                     <div className="head">No. of Stocks</div>
    //                     <div className="value">10-15</div>
    //                   </div>
    //                   <div className="col-3 col-md-3">
    //                     <div className="head">3 Year CAGR</div>
    //                     <div className="value">
    //                       <img
    //                         src="https://sandbox-st.mojowealth.in/images/home/carg.png"
    //                         alt="carg.png"
    //                       />
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //               <button
    //                 type="button"
    //                 className="btn btn-primary"
    //                 onClick={handleButtonClick}
    //               >
    //                 Know More
    //               </button>
    //             </div>
    //             <div className="col-12 col-md-4 wealth-basket-btn">
    //               <img
    //                 src="https://sandbox-st.mojowealth.in/images/home/graph1a-lock.png"
    //                 className="img-fluid"
    //                 alt="graph1a.png"
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   ),
    // },
    // moderate: {
    //   title: "Moderate",
    //   content: (
    //     <div className="col-12 mt-3">
    //       <div className="mp-card">
    //         <div className="card-body">
    //           <div className="row align-items-start">
    //             <div className="col-12 col-md-7 me-md-4 wealth-basket">
    //               <div className="d-flex align-items-center gap-3 mb-2">
    //                 <span className="mp-sectorIcons flex-shrink-0">
    //                   <img
    //                     src="https://sandbox-st.mojowealth.in/images/moderate-portfolio-icon.png"
    //                     alt="icici_mm.png"
    //                   />
    //                 </span>
    //                 <div className="flex-grow-1 title">
    //                   Moderate Portfolio <div className="tag"> High Risk</div>
    //                 </div>
    //               </div>
    //               <div>
    //                 <p>
    //                   The aim is maximum capital appreciation through high-risk
    //                   investments, making it suitable for individuals with a
    //                   very high-risk tolerance and a long-term perspective.
    //                 </p>
    //                 <div className="info row mb-3">
    //                   <div className="col-4 col-md-3 ps-0">
    //                     <div className="head">Min. Investment</div>
    //                     <div className="value">2,00,000</div>
    //                   </div>
    //                   <div className="col-5 col-md-4">
    //                     <div className="head">No. of Stocks</div>
    //                     <div className="value">10-15</div>
    //                   </div>
    //                   <div className="col-3 col-md-3">
    //                     <div className="head">3 Year CAGR</div>
    //                     <div className="value">
    //                       <img
    //                         src="https://sandbox-st.mojowealth.in/images/home/carg.png"
    //                         alt="carg.png"
    //                       />
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //               <button
    //                 type="button"
    //                 className="btn btn-primary"
    //                 onClick={handleButtonClick}
    //               >
    //                 Know More
    //               </button>
    //             </div>
    //             <div className="col-12 col-md-4 wealth-basket-btn">
    //               <img
    //                 src="https://sandbox-st.mojowealth.in/images/home/graph1a-lock.png"
    //                 className="img-fluid"
    //                 alt="graph1a.png"
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   ),
    // },
    // conservative: {
    //   title: "Conservative",
    //   content: (
    //     <div className="col-12 mt-3">
    //       <div className="mp-card">
    //         <div className="card-body">
    //           <div className="row align-items-start">
    //             <div className="col-12 col-md-7 me-md-4 wealth-basket">
    //               <div className="d-flex align-items-center gap-3 mb-2">
    //                 <span className="mp-sectorIcons flex-shrink-0">
    //                   <img
    //                     src="https://sandbox-st.mojowealth.in/images/conservative-portfolio-icon.png"
    //                     alt="icici_mm.png"
    //                   />
    //                 </span>
    //                 <div className="flex-grow-1 title">
    //                   Conservative Portfolio{" "}
    //                   <div className="tag"> High Risk</div>
    //                 </div>
    //               </div>
    //               <div>
    //                 <p>
    //                   The aim is maximum capital appreciation through high-risk
    //                   investments, making it suitable for individuals with a
    //                   very high-risk tolerance and a long-term perspective.
    //                 </p>
    //                 <div className="info row mb-3">
    //                   <div className="col-4 col-md-3 ps-0">
    //                     <div className="head">Min. Investment</div>
    //                     <div className="value">2,00,000</div>
    //                   </div>
    //                   <div className="col-5 col-md-4">
    //                     <div className="head">No. of Stocks</div>
    //                     <div className="value">10-15</div>
    //                   </div>
    //                   <div className="col-3 col-md-3">
    //                     <div className="head">3 Year CAGR</div>
    //                     <div className="value">
    //                       <img
    //                         src="https://sandbox-st.mojowealth.in/images/home/carg.png"
    //                         alt="carg.png"
    //                       />
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //               <button
    //                 type="button"
    //                 className="btn btn-primary"
    //                 onClick={handleButtonClick}
    //               >
    //                 Know More
    //               </button>
    //             </div>
    //             <div className="col-12 col-md-4 wealth-basket-btn">
    //               <img
    //                 src="https://sandbox-st.mojowealth.in/images/home/graph1a-lock.png"
    //                 className="img-fluid"
    //                 alt="graph1a.png"
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   ),
    // },
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
              <div className="section_title">
                Tailored Solutions for Every Investor
              </div>
              <div className="section_subtitle">AI Driven Strategies</div>
            </div>
          </div>
          {/* <div className="row">
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
          </div> */}
          <div className="transaction-tab-bg-style">
            <div className="row justify-content-md-center justify-content-left scrollar-tab">
              <div className="col-12 tabs-content">
                <div className="d-flex justify-content-md-center justify-content-left">
                  {/* <div
                    className={
                      selectedPortfolio === "all"
                        ? "transact-active-tab tabs-text-style"
                        : " tabs-text-style"
                    }
                    onClick={handleClick("all")}
                  >
                    All Portfolios
                  </div> */}

                  <div
                    className={
                      selectedPortfolio === "multi-bagger"
                        ? "tabs-text-style transact-active-tab"
                        : "tabs-text-style"
                    }
                    onClick={handleClick("multi-bagger")}
                  >
                    Multi Bagger Equity
                  </div>

                  <div
                    className={
                      selectedPortfolio === "Mojo One "
                        ? "tabs-text-style transact-active-tab"
                        : "tabs-text-style"
                    }
                    onClick={handleClick("mojoone")}
                  >
                    Mojo One Strategy Portfolio
                  </div>
                  {/* <div
                    className={
                      selectedPortfolio === "aggressive"
                        ? "tabs-text-style transact-active-tab"
                        : "tabs-text-style"
                    }
                    onClick={handleClick("aggressive")}
                  >
                    Aggressive
                  </div>
                  <div
                    className={
                      selectedPortfolio === "moderate"
                        ? "tabs-text-style transact-active-tab"
                        : "tabs-text-style"
                    }
                    onClick={handleClick("moderate")}
                  >
                    Moderate
                  </div>
                  <div
                    className={
                      selectedPortfolio === "conservative"
                        ? "tabs-text-style transact-active-tab"
                        : "tabs-text-style"
                    }
                    onClick={handleClick("conservative")}
                  >
                    Conservative
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12">
              {/* <h3>{portfolioData[selectedPortfolio].title}</h3> */}
              {portfolioData[selectedPortfolio].content}
              {/* <section className="sub-sectionspace">
                <div className="container bg-primary innerspace">
                  <div className="row  ">
                    <div className="col-12 col-md-6">
                      <div className="section-header mt-0">
                        <div className="section_title">
                          Be Your Own Fund Manager!
                        </div>
                      </div>
                      <p>
                        Set your stock selection rules - we will find stocks
                        that fit perfectly. Build your ideal portfolio by
                        answering just a few questions and start investing
                        effortlessly with just one click!
                      </p>
                      <div className="mt-3">
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={handleButtonClick}
                        >
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
              </section> */}
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
                        Choose from our powerful strategies - Mojo Stocks,
                        Reliable Performers, Hidden Turnarounds, and Momentum
                        Now - customize their weightage, and get the perfect mix
                        to generate alpha.
                      </p>
                      <div className="mt-3">
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={handleButtonClick}
                        >
                          I am Ready
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

export default SectionSpace;
