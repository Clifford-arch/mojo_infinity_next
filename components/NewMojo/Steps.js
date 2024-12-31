import React from "react";
import { useRouter } from "next/navigation";

const Steps = ({ isLogin }) => {
  const router = useRouter();

  const handleButtonClick = () => {
    if (isLogin) {
      router.push("/invest-strategy/invest");
    } else {
      router.push("/user/login");
    }
  };
  return (
    <section className="sectionspace ">
      <div className="container">
        <div className="row ">
          <div className="section-header text-center">
            <div className="section_title">Invest In a Few Clicks</div>
            <div className="section_subtitle">
              Your perfect investment is just 3 easy steps away
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-xl-12 py-2 order-status-bar">
            <ol className="steps">
              <li className="doing">
                <div>
                  Sign up and KYC <br />
                  <span className="text-small">
                    {" "}
                    Tell us about you and do a risk profile
                  </span>
                </div>
              </li>
              <li className="doing">
                <div>
                  Choose a Portfolio <br />
                  <span className="text-small">
                    Explore our products and find the most suitable one
                  </span>
                </div>
              </li>
              <li className="doing">
                <div>
                  Invest In a Click <br />
                  <span className="text-small">And watch your wealth grow</span>
                </div>
              </li>
            </ol>
          </div>
        </div>
        <div className="mt-3 text-center">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleButtonClick}
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Steps;
