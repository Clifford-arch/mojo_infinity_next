"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
// import "@/../style/landing2.css";
import RegBanner from "../../../components/NewMojo/RegBanner";
import Steps from "../../../components/NewMojo/Steps";
import InfinityBenefits from "../../../components/NewMojo/InfinityBenefits";
import { useAuth } from "../../../api/AuthContext";
import SectionSpace from "../../../components/NewMojo/SectionSpace";
import SectionSpace1 from "../../../components/NewMojo/SectionSpace1";

const Landing2 = () => {
  const { isLogin } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLogin) {
      router.push("/invest-strategy/invest");
    }
  }, [isLogin, router]);

  return (
    <div className="container">
      <main className="spacing-top mt-5 pt-1">
        <section className="heroBanner sectionspace pre-login-space">
          <div className="container p-0">
            <div className="row text-center">
              <div className="col-12">
                <h1>Mojo Infinity </h1>
                <h6> Reimagined for Superior Results!</h6>
                <img
                  src="https://sandbox-st.mojowealth.in/images/home/infinity-icon.png"
                  width="60px"
                  className="img-fluid my-3"
                  alt="infinity-icon.png"
                />
                <p className="col-md-10 mx-auto ">
                  Invest in our Infinity Portfolios and we’ll help you manage it
                  to grow your wealth
                </p>
                <div className="row col-md-12 col-lg-10 mx-auto pt-4">
                  <div className="col-4">
                    <div className="hero-row">
                      <img
                        src="https://sandbox-st.mojowealth.in/images/home/personalised-icon.png"
                        className="img-fluid"
                        alt="personalised-icon"
                      />
                      Personalised Portfolio
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="hero-row">
                      <img
                        src="https://sandbox-st.mojowealth.in/images/home/active-advisory-icon.png"
                        className="img-fluid"
                        alt="active-advisory-icon.png"
                      />
                      Active Advisory
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="hero-row">
                      <img
                        src="https://sandbox-st.mojowealth.in/images/home/performance-tracking-icon.png"
                        className="img-fluid"
                        alt="performance-tracking-icon.png"
                      />
                      Performance Tracking
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <RegBanner isLogin={isLogin} />
        {/* <SectionSpace isLogin={isLogin} /> */}
        <SectionSpace1 isLogin={isLogin} />
        <Steps isLogin={isLogin} />
        <InfinityBenefits />
      </main>
    </div>
  );
};

export default Landing2;
