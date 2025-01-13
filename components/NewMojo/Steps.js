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
                <div className="pt-2">
                Register & Choose Your Portfolio <br />
                  <span className="text-small">
                    {" "}
                    Sign up and explore our range of portfolios tailored to your goals and risk appetite.
                  </span>
                </div>
              </li>
              <li className="doing">
                <div className="pt-2">
                Complete KYC & E-Sign Agreement <br />
                  <span className="text-small">
                  Verify your details, complete your KYC, and e-sign seamlessly.
                  </span>
                </div>
              </li>
              <li className="doing">
                <div className="pt-2">
                Complete Payment & Invest in a Click <br />
                  <span className="text-small">Pay securely to generate your portfolio and start building your wealth.</span>
                </div>
              </li>
            </ol>
          </div>
        </div>
        <div className="mt-md-5 text-center pt-4">
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
