import React from "react";

const CommonHead = ({ HeadText, HeadP }) => {
  return (
    <>



      <div>
        <h2 className="text-[30px] font-bold font-jost text-[#051036]">
          {HeadText}
        </h2>
        <p className="text-[16px] pt-[5px] font-normal font-jost text-[#697488]">
          {HeadP}
        </p>
      </div>


    </>
  );
};

export default CommonHead;
