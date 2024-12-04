import React from "react";

const Expertise = ({ isLogin, nextStep }) => {
  return (
    <section className="infinity-landing infinity-bg">
      <div className="container">
        <div className="row investor-bg">
          <div className="col-12">
            <h2 className="pb-2">
              Invest & Become a Infinity Member – Your Wealth, Our Expertise
            </h2>
            <h6 className="text-center">
              When you invest in one of our three strategy portfolios, you don’t
              just invest—you become part of an exclusive community. Here’s what
              you’ll enjoy as a member:
            </h6>
          </div>
        </div>

        <div className="row mt-3 mt-md-5 justify-content-md-center">
          {/* Icons and details */}
          {[...Array(5)].map((_, i) => (
            <div key={i} className="col-6 col-md-2 col-lg-2 icon-box">
              <div className="card h-100">
                <div className="card-body">
                  <div className="icon-sm">
                    <img
                      src={`https://sandbox-st.mojoinfinity.com/images/expertise-${
                        i + 1
                      }.svg`}
                      alt={`expertise-${i + 1}`}
                    />
                  </div>
                  <p className="m-0">
                    {
                      [
                        "Regular updates and insights",
                        "Active advisory & portfolio rebalancing",
                        "Performance Tracking",
                        "Exclusive Webinars",
                        "Portfolio Reviews",
                      ][i]
                    }
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
