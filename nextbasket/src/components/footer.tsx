import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="font-Montserrat font-[700]">
      <div className="bg-[#FAFAFA] py-[40px] flex flex-col justify-center ">
        <div className="  flex md:flex-row justify-between mx-auto flex-col w-[80%]">
          <h3 className="text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42]">
            Bandage
          </h3>
          <div className="gap-[20px] flex flex-row">
            <Image
              alt="facebook"
              src="/images/facebookFooter.svg"
              width={24}
              height={24}
            />
            <Image
              alt="facebook"
              src="/images/instagramFooter.svg"
              width={24}
              height={24}
            />
            <Image
              alt="facebook"
              src="/images/twitterFooter.svg"
              width={24}
              height={19.76}
            />
          </div>
        </div>
      </div>
      <div className="py-[50px] bg-[#FFFFFF]">
        <div className="flex md:flex-row leading-[24px] gap-[30px] mx-auto flex-col  w-[80%]">
          <div className="gap-[20px] flex flex-col md:w-1/6 w-full">
            <h5 className="text-[16px]  tracking-[0.1px] text-[#252B42]">
              Company Info
            </h5>
            <Link
              href="/about-us"
              className="text-[#737373] tracking-[0.2px] text-[14px]"
            >
              About Us
            </Link>
            <Link
              href="/carrier"
              className="text-[#737373] tracking-[0.2px] text-[14px]"
            >
              Carrier
            </Link>
            <Link
              href="/hiring"
              className="text-[#737373] tracking-[0.2px] text-[14px]"
            >
              We are hiring
            </Link>
            <Link
              href="/blog"
              className="text-[#737373] tracking-[0.2px] text-[14px]"
            >
              Blog
            </Link>
          </div>
          <div className="gap-[20px] flex flex-col  md:w-1/6 w-full">
            {" "}
            <h5 className="text-[16px]  tracking-[0.1px] text-[#252B42]">
              Legal
            </h5>
            <Link
              href="/about-us"
              className="text-[#737373] tracking-[0.2px] text-[14px]"
            >
              About Us
            </Link>
            <Link
              href="/carrier"
              className="text-[#737373] tracking-[0.2px] text-[14px]"
            >
              Carrier
            </Link>
            <Link
              href="/hiring"
              className="text-[#737373] tracking-[0.2px] text-[14px]"
            >
              We are hiring
            </Link>
            <Link
              href="/blog"
              className="text-[#737373] tracking-[0.2px] text-[14px]"
            >
              Blog
            </Link>
          </div>
          <div className="gap-[20px] flex flex-col  md:w-1/6 w-full">
            {" "}
            <h5 className="text-[16px]  tracking-[0.1px] text-[#252B42]">
              Features
            </h5>
            <Link
              href="/business-marketing"
              className="text-[#737373] tracking-[0.2px] text-[14px]"
            >
              Business Marketing
            </Link>
            <Link
              href="/user-analytic"
              className="text-[#737373] tracking-[0.2px] text-[14px]"
            >
              User Analytic
            </Link>
            <Link
              href="/live-chat"
              className="text-[#737373] tracking-[0.2px] text-[14px]"
            >
              Live Chat
            </Link>
            <Link
              href="/support"
              className="text-[#737373] tracking-[0.2px] text-[14px]"
            >
              Unlimited Support
            </Link>
          </div>
          <div className="gap-[20px] flex flex-col  md:w-1/6 w-full">
            {" "}
            <h5 className="text-[16px]  tracking-[0.1px] text-[#252B42]">
              Resources
            </h5>
            <Link
              href="/ios-android"
              className="text-[#737373] tracking-[0.2px] text-[14px]"
            >
              IOS & Android
            </Link>
            <Link
              href="/demo"
              className="text-[#737373] tracking-[0.2px] text-[14px]"
            >
              Watch a Demo
            </Link>
            <Link
              href="/customers"
              className="text-[#737373] tracking-[0.2px] text-[14px]"
            >
              Customers
            </Link>
            <Link
              href="/api"
              className="text-[#737373] tracking-[0.2px] text-[14px]"
            >
              API
            </Link>
          </div>
          <div className="gap-[20px] flex flex-col  md:w-2/6 w-full">
            {" "}
            <h5 className="text-[16px]  tracking-[0.1px] text-[#252B42]">
              Get In Touch
            </h5>
            <div className="rounded-[5px] border-[1px] border-[#E6E6E6] flex flex-row items-center text-[14px] leading-[28px] tracking-[0.2px] font-[400]">
              <div className="w-[70%] bg-[#E6E6E6]  py-[29px] p-[20px] text-[#737373]">
                <p>Your Email</p>
              </div>
              <div className="w-[30%] bg-[#23A6F0] py-[29px] rounded-r-[5px] text-[#FFFFFF] text-center">
                <p>Subscribe</p>
              </div>
            </div>
            <p className="text-[12px]">Lore imp sum dolor Amit</p>
          </div>
        </div>
      </div>
      <div className="bg-[#FAFAFA] py-[25px] flex flex-col justify-center ">
        <div className="  flex md:flex-row justify-between mx-auto flex-col w-[80%]">
          <h6 className="text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
            Made With Love By Finland All Right Reserved
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
