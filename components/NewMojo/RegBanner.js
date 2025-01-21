import React from "react";
import { useRouter } from "next/navigation";

const RegBanner = ({ isLogin }) => {
  const router = useRouter();

  const handleButtonClick = () => {
    if (isLogin) {
      router.push("/invest-strategy/invest");
    } else {
      router.push("/user/login");
    }
  };

  return (
    <section className="">
      <div className="container p-0 m-0">
        {/* <div className="row portfolio-assessment bg-secondary">
          <div className="col-12 col-md-4 order-lg-2 graph-image text-md-end text-left pt-md-0 pt-3">
            <img
              src="https://sandbox-st.mojowealth.in/images/home/pregraph.png"
              className="img-fluid"
              alt="Risk Assessment"
            />
          </div>
          <div className="col-12 col-md-8 text-center text-md-start order-lg-1">
            <div className="section_title1">
              Complete KYC, Assess Your Risk, and Start Investing in Minutes!
            </div>
            <div className="mt-3 mb-2">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleButtonClick} // Handle the button click
              >
                I am Ready
              </button>
            </div>
          </div>
        </div> */}
        <div className="row">
          <div className="col-12">
            <div className="portfolio-assessment bg-secondary justify-content-between px-4 py-2">
              <div className="pt-lg-0 pt-2">
                Complete Your KYC, Assess Your Risk, and Start Investing in
                Minutes!
              </div>
              <button
                type="button"
                className="btn btn btn-md btn-primary "
                onClick={handleButtonClick}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegBanner;
