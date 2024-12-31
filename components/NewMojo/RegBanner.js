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
        <div className="row portfolio-assessment bg-secondary">
          <div className="col-12 col-md-4 order-lg-2">
            <img
              src="https://sandbox-st.mojowealth.in/images/home/pregraph.png"
              className="img-fluid"
              alt="Risk Assessment"
            />
          </div>
          <div className="col-12 col-md-8 text-center text-md-start order-lg-1">
            <div className="section_title">
              Register and Assess Your Risk Profile in 5 Minutes!
            </div>
            <div className="mt-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleButtonClick} // Handle the button click
              >
                I am Ready
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegBanner;
