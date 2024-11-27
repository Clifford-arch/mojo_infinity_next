"use client";
import React, { useState } from "react";
import FeatureBox from "../../../components/MojoInfinity/FeatureBox";
import SidebarLeft from "../../../components/MojoInfinity/SidebarLeft";
import FAQSection from "../../../components/MojoInfinity/FAQSection";
import "bootstrap/dist/css/bootstrap.min.css";

const page = () => {
  // const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  return (
    <>
      <section className="infinity-landing bannerwrapper">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1>Mojo Infinity</h1>
              <h5>Reimagined for Superior Results!</h5>
              <img
                className="img-fluid"
                src="https://sandbox-st.mojoinfinity.com/images/infinity-mark.svg"
                alt="Mojo Infinity Mark"
              />
              <p>
                Your Launchpad to Achieving High Net Worth and Financial
                Prosperity
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="infinity-landing section-bg">
        <div className="container">
          <div className="row investor-bg">
            <div className="col-12">
              <h2>Tailored Solutions for Every Investor</h2>
            </div>
          </div>
          <div className="row">
            <FeatureBox
              number="01"
              title="Mojo Flagship"
              description="Discover our tailored portfolios to diversify and grow your investments. Find the approach that fits your goals!"
              minInvestment="₹2 Lacs"
            />
            <FeatureBox
              number="02"
              title="Pick your Mojo Strategy"
              description="Choose from MOJO ONE strategies for a balanced mix of quality stocks and market opportunities. Tailor your investment to fit your goals!"
              minInvestment="₹2 Lacs"
            />
            <FeatureBox
              number="03"
              title="Be your own Fund Manager"
              description="Customize your investments by setting specific entry and exit parameters for stocks. Create a portfolio that perfectly matches your strategy and financial goals.!"
              minInvestment="₹10 Lacs"
            />
          </div>
        </div>
      </section>
      <section className="infinity-landing">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2> How to get started?</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
                <div className="step ">
                  <div className="step-icon-wrap">
                    <div className="step-icon">
                      <img src="https://sandbox-st.mojoinfinity.com/images/get-started-1.svg" />
                    </div>
                  </div>
                  <h4 className="step-title"> Sign up and Complete your KYC</h4>
                </div>
                <div className="step ">
                  <div className="step-icon-wrap">
                    <div className="step-icon">
                      <img src="https://sandbox-st.mojoinfinity.com/images/get-started-2.svg" />
                    </div>
                  </div>
                  <h4 className="step-title">
                    {" "}
                    Choose your preferred investment strategy and enter the
                    amount you wish to invest with us.
                  </h4>
                </div>
                <div className="step ">
                  <div className="step-icon-wrap">
                    <div className="step-icon">
                      <img src="https://sandbox-st.mojoinfinity.com/images/get-started-3.svg" />
                    </div>
                  </div>
                  <h4 className="step-title">
                    {" "}
                    Generate your ideal portfolio and begin tracking your
                    investment journey
                  </h4>
                </div>
                <div className="step">
                  <div className="step-icon-wrap">
                    <div className="step-icon">
                      <img src="https://sandbox-st.mojoinfinity.com/images/get-started-4.svg" />
                    </div>
                  </div>
                  <h4 className="step-title">
                    Set your portfolio parameters and pay the applicable fees{" "}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="infinity-landing infinity-bg">
        <div className="container">
          <div className="row investor-bg">
            <div className="col-12">
              <h2 className="pb-2">
                Invest & Become a Infinity Member – Your Wealth, Our Expertise
              </h2>
              <h6 className="text-center">
                When you invest in one of our three strategy portfolios, you
                don’t just invest—you become part of an exclusive community.
                Here’s what you’ll enjoy as a member:
              </h6>
            </div>
          </div>

          <div className="row mt-3 mt-md-5 justify-content-md-center">
            <div className="col-6 col-md-2 col-lg-2 icon-box">
              <div className="card h-100">
                <div className="card-body">
                  <div className="icon-sm">
                    <img src="https://sandbox-st.mojoinfinity.com/images/expertise-1.svg" />
                  </div>

                  <p className="m-0">Regular updates and insights</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-2 col-lg-2 icon-box">
              <div className="card h-100">
                <div className="card-body">
                  <div className="icon-sm">
                    <img src="https://sandbox-st.mojoinfinity.com/images/expertise-2.svg" />
                  </div>

                  <p className="m-0">
                    Active advisory & portfolio rebalancing{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-2 col-lg-2 icon-box">
              <div className="card h-100">
                <div className="card-body">
                  <div className="icon-sm">
                    <img src="https://sandbox-st.mojoinfinity.com/images/expertise-3.svg" />
                  </div>

                  <p className="m-0">Performance Tracking</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-2 col-lg-2 icon-box">
              <div className="card h-100">
                <div className="card-body">
                  <div className="icon-sm">
                    <img src="https://sandbox-st.mojoinfinity.com/images/expertise-4.svg" />
                  </div>

                  <p className="m-0">Exclusive Webinars</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-2 col-lg-2 icon-box">
              <div className="card h-100">
                <div className="card-body">
                  <div className="icon-sm">
                    <img src="https://sandbox-st.mojoinfinity.com/images/expertise-5.svg" />
                  </div>

                  <p className="m-0">Portfolio Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="infinity-landing pb-0">
        <div className="container">
          <div className="row onetime-fee">
            <div className="col-12 col-md-4">
              <h1>
                One-Time,
                <br />
                <b> Transparent Fee</b>
              </h1>
            </div>
            <div className="col-12 col-md-8">
              When you create a strategy, you pay a one-time fee based on your
              initial investment. We have clear, transparent pricing that
              ensures you get the most out of your investment.
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
    </>
  );
};

export default page;
