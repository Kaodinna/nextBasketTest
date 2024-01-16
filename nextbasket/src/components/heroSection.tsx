import React from "react";

const HeroSection = () => {
  return (
    <div className=" bg-white pt-[80px] font-Montserrat font-[700]">
      <div className=" flex md:flex-row flex-col gap-[15px] justify-center items-center mx-auto">
        <div className="md:h-[616px] h-[300px] md:w-[452px] w-[332px] bg-heroImage1">
          <div className="p-[24px] gap-[5px] tracking-[0.2px]">
            <h6 className="text-[#2DC071] text-[14px] leading-[24px] ">
              5 Items
            </h6>
            <h2 className="md:text-[40px] text-[24px] md:leading-[50px] leading-[32px] text-[#252B42]">
              FURNITURE
            </h2>
            <h6 className="text-[#252B42] text-[14px] leading-[24px]">
              Read More
            </h6>
          </div>
        </div>
        <div className=" flex flex-col gap-[15px]">
          <div className="md:h-[300px] md:w-[679px] bg-heroImage2 w-[333px] h-[300px]">
            <div className="p-[24px] gap-[5px] tracking-[0.2px]">
              <h6 className="text-[#2DC071] text-[14px] leading-[24px] ">
                5 Items
              </h6>
              <h2 className="text-[24px] leading-[32px] text-[#252B42] tracking-[0.1px]">
                FURNITURE
              </h2>
              <h6 className="text-[#252B42] text-[14px] leading-[24px]">
                Read More
              </h6>
            </div>
          </div>
          <div className="flex md:flex-row flex-col gap-[16px]">
            <div className="h-[300px] w-[332px] bg-heroImage3">
              <div className="p-[24px] gap-[5px] tracking-[0.2px]">
                <h6 className="text-[#2DC071] text-[14px] leading-[24px] ">
                  5 Items
                </h6>
                <h2 className="text-[24px] leading-[32px] text-[#252B42] tracking-[0.1px]">
                  FURNITURE
                </h2>
                <h6 className="text-[#252B42] text-[14px] leading-[24px]">
                  Read More
                </h6>
              </div>
            </div>
            <div className="h-[300px] w-[332px] bg-heroImage4">
              <div className="p-[24px] gap-[5px] tracking-[0.2px]">
                <h6 className="text-[#2DC071] text-[14px] leading-[24px] ">
                  5 Items
                </h6>
                <h2 className="text-[24px] leading-[32px] text-[#252B42] tracking-[0.1px]">
                  FURNITURE
                </h2>
                <h6 className="text-[#252B42] text-[14px] leading-[24px]">
                  Read More
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
