import React, { useState } from "react";
import { IoIosStar } from "react-icons/io";
import user from '../assets/images/user.png'


const Customars = () => {

  const [value, setValue] = useState(1); 


  return (
    <>
      <section id="customars" className="bg-[#E5F0FD]">
        <div className="container">
          <div className="flex justify-between  ">
            <div className="py-[120px]">
              <h2 className="w-[353px] text-[30px] pb-[20px] font-semibold font-jost text-primary">What our customers are saying us?</h2>
              <p className="w-[520px] leading-[30px] text-[16px] font-normal font-jost text-[#697488] pb-[60px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas varius tortor nibh, sit amet tempor nibh finibus et.
                Aenean eu enim justo.
              </p>
              <div className="flex gap-[124px] items-center">
                <div>
                    <h2 className="text-[30px] font-semibold font-jost text-primary">13m+</h2>
                    <p className="text-[16px] font-normal font-jost text-[#697488]">Happy People</p>
                </div>
                      <div>
                    <h2 className="text-[30px] font-semibold font-jost text-primary">4.88</h2>
                    <p className="text-[16px] font-normal font-jost text-[#697488]">Overall rating</p>
                    <div className="flex gap-[7px]">
                      <IoIosStar  className="text-[#3554D1]"/>
                      <IoIosStar className="text-[#3554D1]" />
                      <IoIosStar  className="text-[#3554D1]"/>
                      <IoIosStar className="text-[#3554D1]" />
                      <IoIosStar className="text-[#3554D1]" />
                    
                    </div>
                </div>
              </div>
            </div>
            <div className="py-[134px]">
                <div className="flex items-center gap-[30px]">
                    <img src={user} alt="user-img" />
                    <div>
                        <h2 className="text-[16px] font-medium font-jost text-primary">Annette Black</h2>
                        <p className="text-[15px] font-normal font-jost text-[#697488]">UX / UI Designer</p>
                    </div>

                </div>
                <div className="pt-[30px] pb-[60px]">
                    <p className="w-[630px] text-[18px] font-medium font-jost text-primary">The place is in a great location in Gumbet. The area is safe and beautiful. The apartment was comfortable and the host was kind and responsive to our requests.</p>
                </div>
                  <div className="w-[60%] bg-[#e6f0fb] p-10">
      <div className="flex items-center justify-between text-[#0a0a23] font-bold text-xl mb-2">
        <span>01</span>
        <span>05</span>
      </div>

      <div className="relative w-full h-2 bg-gray-300 rounded">
        <div
          className="absolute h-2 bg-[#0a0a23] rounded"
          style={{ width: `${((value - 1) / 4) * 100}%` }}
        ></div>
      </div>


      <input
        type="range"
        min="1"
        max="5"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full mt-3 appearance-none bg-transparent slider-thumb"
      />
    </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Customars;
