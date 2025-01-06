import React from "react";

const InfinityBenefits = () => {
  return (
    <section className="sub-sectionspace">
      <div className="container innerspace bg-tertiary">
        <div className="row">
          <div className="col-12 col-md-12 text-center">
            <div className="section-header mt-0">
              <div className="section_title">
                {" "}
                Why Become an Infinity Member
              </div>
            </div>
          </div>
        </div>
        <div className="row col-12 col-md-12 col-lg-10 mx-auto py-md-4 py-0">
          <div className="col-4 col-md-4">
            <div className="hero-row">
              <img
                src="https://sandbox-st.mojowealth.in/images/home/regular-updt.png"
                className="img-fluid"
                alt="regular-updt.png"
              />{" "}
              Regular Updates and Insights
            </div>
          </div>
          <div className="col-4 col-md-4">
            <div className="hero-row">
              <img
                src="https://sandbox-st.mojowealth.in/images/home/exclusive-webinar.png"
                className="img-fluid"
                alt="exclusive-webinar.png"
              />{" "}
              Exclusive Webinars
            </div>
          </div>
          <div className="col-4 col-md-4">
            <div className="hero-row">
              <img
                src="https://sandbox-st.mojowealth.in/images/home/portfolio-review.png"
                className="img-fluid"
                alt="portfolio-review.png"
              />{" "}
              Portfolio Reviews
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfinityBenefits;
