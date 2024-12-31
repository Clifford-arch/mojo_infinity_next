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
                What will you enjoy as an Infinity Member
              </div>
            </div>
          </div>
        </div>
        <div className="row col-12 col-md-12 col-lg-8 mx-auto py-4">
          <div className="col-4 col-md-4">
            <div className="hero-row">
              <img
                src="https://sandbox-st.mojowealth.in/images/home/regular-updt.png"
                className="img-fluid"
              />{" "}
              Regular Updates and Insights
            </div>
          </div>
          <div className="col-4 col-md-4">
            <div className="hero-row">
              <img
                src="https://sandbox-st.mojowealth.in/images/home/exclusive-webinar.png"
                className="img-fluid"
              />{" "}
              Exclusive Webinars
            </div>
          </div>
          <div className="col-4 col-md-4">
            <div className="hero-row">
              <img
                src="https://sandbox-st.mojowealth.in/images/home/portfolio-review.png"
                className="img-fluid"
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
