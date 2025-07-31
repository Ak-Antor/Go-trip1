import React from "react";
import cus from "../assets/images/customer-service.png";
import sec from "../assets/images/security.png";
import play from "../assets/images/page-speed.png";

const BestPrice = () => {
  return (
    <>
      <section id="best-price" className="py-[120px]">
        <div className="container">
          <div className="flex justify-around tet items-center">
            <div className="w-[300px] text-center">
              <div className="flex justify-center">
                <img className="text-center" src={sec} alt="src-img" />{" "}
              </div>
              <div className="pt-[30px] text-center">
                <h2 className="text-[18px]   font-medium font-jost text-primary">
                  Best Price Guarantee
                </h2>
                <p className="w-[300px] text-center text-[15px] font-normal font-jost text-[#697488] ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>

            <div className="">
              <div className="flex justify-center">
                {" "}
                <img src={play} alt="payment-img" />{" "}
              </div>
              <div className="pt-[30px] text-center">
                <h2 className="text-[18px]   font-medium font-jost text-primary">
                  Easy & Quick Booking
                </h2>
                <p className="w-[300px] text-center text-[15px] font-normal font-jost text-[#697488] ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>

            <div className="user-img">
              <div className="flex justify-center">
                <img src={cus} alt="customer_img" />
              </div>

              <div className="pt-[30px] text-center">
                <h2 className="text-[18px]   font-medium font-jost text-primary">
                  Customer Care 24/7
                </h2>
                <p className="w-[300px] text-center text-[15px] font-normal font-jost text-[#697488] ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BestPrice;
