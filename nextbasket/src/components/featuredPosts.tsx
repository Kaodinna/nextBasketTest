import React from "react";
import Image from "next/image";
import Link from "next/link";
const FeaturedPosts = () => {
  return (
    <div className="font-Montserrat bg-white font-[700]">
      <div className="py-[80px]">
        <div className="flex justify-center flex-col items-center">
          <h4 className="font-[400] text-[20px] leading-[30px] tracking-[0.2px] text-[#737373]">
            Featured Products
          </h4>
          <h3 className="font-[700] text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42]">
            THE BEST SERVICES
          </h3>
          <p className="font-[400] text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">
            Problems trying to resolve the conflict between{" "}
          </p>
        </div>
        <div className="flex md:flex-row w-[60%] justify-center items-center mx-auto flex-col">
          <div className="py-[35px] px-[40px] md:w-1/3 w-full flex flex-col justify-center items-center text-center">
            <Image
              width={72}
              height={72}
              alt="Easy Wins Icon"
              src="/images/easyWins.svg"
            />
            <h3 className="font-[700] text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42]">
              Easy Wins
            </h3>
            <p className="font-[400] text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">
              Get your best looking smile now!
            </p>
          </div>
          <div className="py-[35px] px-[40px] md:w-1/3 w-full flex flex-col justify-center items-center text-center">
            <Image
              width={72}
              height={72}
              alt="Concrete Icon"
              src="/images/concrete.svg"
            />
            <h3 className="font-[700] text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42]">
              Concrete
            </h3>
            <p className="font-[400] text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">
              Defalcate is most focused in helping you discover your most
              beautiful smile
            </p>
          </div>
          <div className="py-[35px] px-[40px] md:w-1/3 w-full flex flex-col justify-center items-center text-center">
            <Image
              width={72}
              height={72}
              alt="Hack Growth Icon"
              src="/images/hackGrowth.svg"
            />
            <h3 className="font-[700] text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42]">
              Hack Growth
            </h3>
            <p className="font-[400] text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">
              Overcame any hurdle or any other problem.
            </p>
          </div>
        </div>
      </div>
      <div className="py-[112px] flex flex-col gap-[80px]">
        <div className="font-[700] tracking-[0.2px] text-center">
          <h6 className=" text-[14px] leading-[24px]  text-[#23A6F0]">
            Practice Advice
          </h6>
          <h2 className="text-[40px] leading-[50px] text-[#252B42]">
            Featured Posts
          </h2>
        </div>
        <div className="flex flex-col justify-center">
          <div className="grid md:grid-cols-3 grid-cols-1 font-[400] tracking-[0.2px] text-[#737373] mx-auto justify-center gap-[30px]">
            <div className="flex-flex-col items-center w-[348px] ">
              <div className="w-[348px] h-[300px] bg-madison1 p-[20px]">
                <span className="bg-[#E74040] rounded-[3px] px-[10px] text-[14px] leading-[24px] text-[#FFFFFF]">
                  NEW
                </span>
              </div>{" "}
              <div className="px-[25px] pt-[25px] pb-[35px] border-[1px] rounded-b-[3px] shadow-sm">
                <span className="gap-[15px] flex flex-row  text-[12px] leading-[16px] ">
                  <small className=" text-[#8EC2F2]">Google</small>
                  <small className="">Trending</small>
                  <small className="">New</small>
                </span>
                <h4 className="text-[20px] text-[#252B42] leading-[30px] ">
                  Loudest à la Madison #1 (L&apos;integral)
                </h4>
                <p className="text-[14px] leading-[20px] ">
                  We focus on ergonomics and meeting you where you work.
                  It&apos;s only a keystroke away.
                </p>
                <div className="text-[12px] leading-[16px] py-[15px] flex flex-row ">
                  <span className="flex flex-row">
                    <Image
                      width={16}
                      height={16}
                      alt="Hack Growth Icon"
                      src="/images/clock.svg"
                    />
                    <small>22 April 2021</small>
                  </span>
                  <span className="flex flex-row">
                    <Image
                      width={16}
                      height={14.67}
                      alt="Hack Growth Icon"
                      src="/images/comments.svg"
                    />
                    <small>10 comments</small>
                  </span>
                </div>
                <span className="flex flex-row gap-[10px]">
                  <h6 className="text-[14px] leading-[24px]">Learn More</h6>
                  <Image
                    width={9}
                    height={16}
                    alt="Hack Growth Icon"
                    src="/images/rightIcon.svg"
                  />
                </span>
              </div>
            </div>
            <div className="flex-flex-col items-center w-[348px]">
              {" "}
              <div className="w-[348px] h-[300px] bg-madison2 p-[20px]">
                <span className="bg-[#E74040] rounded-[3px] px-[10px] text-[14px] leading-[24px] text-[#FFFFFF]">
                  NEW
                </span>
              </div>{" "}
              <div className="px-[25px] pt-[25px] pb-[35px] border-[1px] rounded-b-[3px] shadow-sm">
                {" "}
                <span className="gap-[15px] flex flex-row  text-[12px] leading-[16px] ">
                  <small className=" text-[#8EC2F2]">Google</small>
                  <small className="">Trending</small>
                  <small className="">New</small>
                </span>
                <h4 className="text-[20px] text-[#252B42] leading-[30px] ">
                  Loudest à la Madison #1 (L&apos;integral)
                </h4>
                <p className="text-[14px] leading-[20px] ">
                  We focus on ergonomics and meeting you where you work.
                  It&apos;s only a keystroke away.
                </p>
                <div className="text-[12px] leading-[16px] py-[15px] flex flex-row">
                  <span className="flex flex-row">
                    <Image
                      width={16}
                      height={16}
                      alt="Hack Growth Icon"
                      src="/images/clock.svg"
                    />
                    <small>22 April 2021</small>
                  </span>
                  <span className="flex flex-row">
                    <Image
                      width={16}
                      height={14.67}
                      alt="Hack Growth Icon"
                      src="/images/comments.svg"
                    />
                    <small>10 comments</small>
                  </span>
                </div>
                <span className="flex flex-row gap-[10px]">
                  <h6 className="text-[14px] leading-[24px]">Learn More</h6>
                  <Image
                    width={9}
                    height={16}
                    alt="Hack Growth Icon"
                    src="/images/rightIcon.svg"
                  />
                </span>
              </div>
            </div>
            <div className="flex-flex-col items-center w-[348px]">
              {" "}
              <div className="w-[348px] h-[300px] bg-madison3 p-[20px]">
                <span className="bg-[#E74040] rounded-[3px] px-[10px] text-[14px] leading-[24px] text-[#FFFFFF]">
                  NEW
                </span>
              </div>{" "}
              <div className="px-[25px] pt-[25px] pb-[35px] border-[1px] rounded-b-[3px] shadow-sm">
                <span className="gap-[15px] flex flex-row  text-[12px] leading-[16px] ">
                  <small className=" text-[#8EC2F2]">Google</small>
                  <small className="">Trending</small>
                  <small className="">New</small>
                </span>
                <h4 className="text-[20px] text-[#252B42] leading-[30px] ">
                  Loudest à la Madison #1 (L&apos;integral)
                </h4>
                <p className="text-[14px] leading-[20px] ">
                  We focus on ergonomics and meeting you where you work.
                  It&apos;s only a keystroke away.
                </p>
                <div className="text-[12px] leading-[16px] py-[15px] flex flex-row">
                  <span className="flex flex-row">
                    <Image
                      width={16}
                      height={16}
                      alt="Hack Growth Icon"
                      src="/images/clock.svg"
                    />
                    <small>22 April 2021</small>
                  </span>
                  <span className="flex flex-row">
                    <Image
                      width={16}
                      height={14.67}
                      alt="Hack Growth Icon"
                      src="/images/comments.svg"
                    />
                    <small>10 comments</small>
                  </span>
                </div>
                <span className="flex flex-row gap-[10px]">
                  <h6 className="text-[14px] leading-[24px]">Learn More</h6>
                  <Image
                    width={9}
                    height={16}
                    alt="Hack Growth Icon"
                    src="/images/rightIcon.svg"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[80px] font-[700]">
        <div className="p-[48px] flex md:flex-row justify-center mx-auto flex-col">
          <div className="md:w-1/2 w-full text-[14px] leading-[24px] tracking-[0.2px] gap-[28px] flex flex-col justify-center items-center text-center">
            <h3 className="text-[24px] text-[#252B42] leading-[32px] tracking-[0.1px]">
              What they say about us
            </h3>
            <Image
              width={90}
              height={90}
              alt="Regina"
              src="/images/regina.svg"
            />
            <Image
              width={130.07}
              height={22.01}
              alt="Regina"
              src="/images/stars.svg"
            />
            <h6 className="  text-[#737373]">
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </h6>
            <Link href="" className="text-[#23A6F0]">
              Regina Miles
            </Link>
            <h6 className="text-[#252B42]">Designer</h6>
          </div>
          <div className="md:w-1/2 w-full">
            <Image
              width={464}
              height={460.03}
              alt="Regina"
              src="/images/photoGrid.svg"
            />
          </div>
        </div>
      </div>
      <div className="bg-action-background bg-cover bg-center bg-no-repeat w-full h-[640px]">
        <div className="pt-[160px] pb-[112px] md:w-1/3 w-full flex flex-col justify-center items-center mx-auto">
          <div className="flex flex-col gap-[30px] items-center text-center">
            <h6 className="text-[14px] leading-[24px] tracking-[0.2px] text-[#23A6F0]">
              Designing Better Experience
            </h6>
            <h2 className="text-[40px] leading-[50px] tracking-[0.2px] text-[#252B42]">
              Problems trying to resolve the conflict between{" "}
            </h2>
            <p className="font-[400] text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics:{" "}
            </p>
            <h3 className="text-[24px] leading-[32px] tracking-[0.1px] text-[#23856D]">
              $16.48
            </h3>
            <div>
              <button className="py-[15px] px-[40px] text-[#FFFFFF] bg-[#23A6F0] rounded-[5px] text-[14px] leading-[22px] tracking-[0.2px]">
                ADD YOUR CALL TO ACTION
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
