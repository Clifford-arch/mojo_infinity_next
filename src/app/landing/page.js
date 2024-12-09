"use client";
import React, { Suspense, useEffect, useState } from "react";
import FeatureBox from "../../../components/MojoInfinity/FeatureBox";
// import SidebarLeft from "../../../components/MojoInfinity/SidebarLeft";
import FAQSection from "../../../components/MojoInfinity/FAQSection";
// import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Image from "next/image";
import "@/../style/kyc.css";
import "@/../style/landing.css";
import { useAuth } from "../../../api/AuthContext";
import environment from "../../../utils/environment";

const Expertise = React.lazy(() =>
  import("../../../components/MojoInfinity/Expertise")
);

const Page = () => {
  const { isLogin, redirectUrl, nextStep, loading } = useAuth();
  // useEffect(() => {
  //   const checkLogin = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await axios.get(
  //         "https://sandboxwealth-frapi.mojoinfinity.com/users/check-login",
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //             Accept: "application/json",
  //           },
  //           withCredentials: true,
  //         }
  //       );
  //       if (response.data.code === 200) {
  //         setIsLogin(response.data.data.is_login);
  //         setRedirectUrl(response.data.data.redirect_url);
  //         setNextStep(response.data.data.next_step);
  //       }
  //     } catch (error) {
  //       console.log("Error checking login:", error);
  //     } finally {
  //       setLoading(false); // Stop loading after the check
  //     }
  //   };

  //   checkLogin();
  // }, []);

  return (
    <>
      <section className="infinity-landing bannerwrapper">
        <div className="container text-center">
          <h1>Mojo Infinity</h1>
          <h5>Reimagined for Superior Results!</h5>
          <Suspense>
          <Image
            className="img-fluid"
            src={`${environment.IMG_URL}infinity-mark.svg`}
            alt="Mojo Infinity Mark"
            width={50}
            height={50}
            loading="lazy"
          />
          </Suspense>
          <p>
            Your Launchpad to Achieving High Net Worth and Financial Prosperity
          </p>
        </div>
      </section>

      <section
        className="infinity-landing section-bg"
        data-bg="https://sandbox-st.mojoinfinity.com/images/investor-bg.jpg"
      >
        <div className="container">
          <h2 className="text-center">Tailored Solutions for Every Investor</h2>
          <div className="row">
            {[
              {
                number: "01",
                title: "Mojo Flagship",
                description:
                  "Discover our tailored portfolios to diversify and grow your investments. Find the approach that fits your goals!",
                minInvestment: "₹2 Lacs",
                url: "https://sandboxwealth-www.mojoinfinity.com/invest-strategy/invest?plan=1",
              },
              {
                number: "02",
                title: "Pick your Mojo Strategy",
                description:
                  "Choose from MOJO ONE strategies for a balanced mix of quality stocks and market opportunities. Tailor your investment to fit your goals!",
                minInvestment: "₹2 Lacs",
                url: "https://sandboxwealth-www.mojoinfinity.com/invest-strategy/invest?plan=2",
              },
              {
                number: "03",
                title: "Be your own Fund Manager",
                description:
                  "Customize your investments by setting specific entry and exit parameters for stocks. Create a portfolio that perfectly matches your strategy and financial goals!",
                minInvestment: "₹10 Lacs",
                url: "https://sandboxwealth-www.mojoinfinity.com/invest-strategy/invest?plan=3",
              },
            ].map((feature, index) => (
              <FeatureBox
                key={index}
                {...feature}
                isLogin={isLogin}
                nextStep={nextStep}
                redirectUrl={feature.url}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="infinity-landing">
        <div className="container">
          <h2 className="text-center">How to get started?</h2>
          <div className="steps d-flex  flex-sm-nowrap flex-wrap justify-content-between padding-top-2x padding-bottom-1x">
            {[
              {
                title: "Sign up and Complete your KYC",
                imgSrc:
                  "https://sandbox-st.mojoinfinity.com/images/get-started-1.svg",
                alt: "get-started-1",
              },
              {
                title:
                  "Choose your preferred investment strategy and enter the amount you wish to invest with us.",
                imgSrc:
                  "https://sandbox-st.mojoinfinity.com/images/get-started-2.svg",
                alt: "get-started-2",
              },
              {
                title:
                  "Generate your ideal portfolio and begin tracking your investment journey",
                imgSrc:
                  "https://sandbox-st.mojoinfinity.com/images/get-started-3.svg",
                alt: "get-started-3",
              },
              {
                title:
                  "Set your portfolio parameters and pay the applicable fees",
                imgSrc:
                  "https://sandbox-st.mojoinfinity.com/images/get-started-4.svg",
                alt: "get-started-4",
              },
            ].map((step, index) => (
              <div className="step" key={index}>
                <div className="step-icon-wrap">
                  <div className="step-icon">
                    <Image
                      src={step.imgSrc}
                      alt={step.alt}
                      width={75}
                      height={75}
                      loading="lazy"
                    />
                  </div>
                </div>
                <h4 className="step-title">{step.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Suspense fallback={<div>Loading...</div>}>
        <Expertise />
      </Suspense>

      <section className="infinity-landing pb-0">
        <div className="container">
          <div className="row onetime-fee">
            <div className="col-12 col-md-4">
              <h1>
                One-Time,
                <br />
                <b>Transparent Fee</b>
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

export default Page;
