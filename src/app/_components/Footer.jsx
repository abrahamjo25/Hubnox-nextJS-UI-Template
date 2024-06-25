import Image from "next/image";
import React from "react";
import {
  FiAlignCenter,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
import { FaSquareBehance } from "react-icons/fa6";
import { Instagram } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <div className="bg-slate-950">
      <div className="mx-4 md:mx-20 grid grid-cols-1 md:grid-cols-2 gap-4 py-20 items-center">
        <div className="">
          <Image
            src="/images/mobilapp.png"
            width={800}
            height={400}
            alt="mobile"
          />
        </div>
        <div className="flex flex-col gap-4 md:mt-32">
          <h2 className="text-3xl font-bold text-white">
            Download <span className="text-pink-500">Hubnox</span> app and
            explore a diverse range of beauty events!
          </h2>
          <p className="text-slate-400">
            Scan the QR code with your phone camera or download the app on the
            App Store
          </p>
          <div className="">
            <Image
              src="/images/appstore.png"
              width={200}
              height={100}
              alt="app store"
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center mr-4 md:mr-20 mb-6 justify-center">
          <div className="flex flex-col gap-3 px-2 md:px-20">
            <div className="mt-10">
              <Image
                src="/images/hubnox.png"
                alt="LOGO"
                width={140}
                height={60}
              />
            </div>
            <p className="text-slate-400">Follow us on social media</p>

            <div className="w-full  flex items-center  gap-4 flex-wrap">
              <button className="group transition-all duration-500 hover:-translate-y-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={40}
                  height={40}
                  viewBox="0 0 93 92"
                  fill="none"
                >
                  <rect
                    x="1.13867"
                    width="91.5618"
                    height="91.5618"
                    rx={15}
                    fill="url(#paint0_linear_7092_54439)"
                  />
                  <path
                    d="M38.3762 45.7808C38.3762 41.1786 42.1083 37.4468 46.7132 37.4468C51.3182 37.4468 55.0522 41.1786 55.0522 45.7808C55.0522 50.383 51.3182 54.1148 46.7132 54.1148C42.1083 54.1148 38.3762 50.383 38.3762 45.7808ZM33.8683 45.7808C33.8683 52.8708 39.619 58.618 46.7132 58.618C53.8075 58.618 59.5581 52.8708 59.5581 45.7808C59.5581 38.6908 53.8075 32.9436 46.7132 32.9436C39.619 32.9436 33.8683 38.6908 33.8683 45.7808ZM57.0648 32.4346C57.0646 33.0279 57.2404 33.608 57.5701 34.1015C57.8997 34.595 58.3684 34.9797 58.9168 35.2069C59.4652 35.4342 60.0688 35.4939 60.6511 35.3784C61.2334 35.2628 61.7684 34.9773 62.1884 34.5579C62.6084 34.1385 62.8945 33.6041 63.0105 33.0222C63.1266 32.4403 63.0674 31.8371 62.8404 31.2888C62.6134 30.7406 62.2289 30.2719 61.7354 29.942C61.2418 29.6122 60.6615 29.436 60.0679 29.4358H60.0667C59.2708 29.4361 58.5077 29.7522 57.9449 30.3144C57.3821 30.8767 57.0655 31.6392 57.0648 32.4346ZM36.6072 66.1302C34.1683 66.0192 32.8427 65.6132 31.9618 65.2702C30.7939 64.8158 29.9606 64.2746 29.0845 63.4002C28.2083 62.5258 27.666 61.6938 27.2133 60.5266C26.8699 59.6466 26.4637 58.3214 26.3528 55.884C26.2316 53.2488 26.2073 52.4572 26.2073 45.781C26.2073 39.1048 26.2336 38.3154 26.3528 35.678C26.4639 33.2406 26.8731 31.918 27.2133 31.0354C27.668 29.8682 28.2095 29.0354 29.0845 28.1598C29.9594 27.2842 30.7919 26.7422 31.9618 26.2898C32.8423 25.9466 34.1683 25.5406 36.6072 25.4298C39.244 25.3086 40.036 25.2844 46.7132 25.2844C53.3904 25.2844 54.1833 25.3106 56.8223 25.4298C59.2612 25.5408 60.5846 25.9498 61.4677 26.2898C62.6356 26.7422 63.4689 27.2854 64.345 28.1598C65.2211 29.0342 65.7615 29.8682 66.2161 31.0354C66.5595 31.9154 66.9658 33.2406 67.0767 35.678C67.1979 38.3154 67.2221 39.1048 67.2221 45.781C67.2221 52.4572 67.1979 53.2466 67.0767 55.884C66.9656 58.3214 66.5573 59.6462 66.2161 60.5266C65.7615 61.6938 65.2199 62.5266 64.345 63.4002C63.4701 64.2738 62.6356 64.8158 61.4677 65.2702C60.5872 65.6134 59.2612 66.0194 56.8223 66.1302C54.1855 66.2514 53.3934 66.2756 46.7132 66.2756C40.033 66.2756 39.2432 66.2514 36.6072 66.1302ZM36.4001 20.9322C33.7371 21.0534 31.9174 21.4754 30.3282 22.0934C28.6824 22.7316 27.2892 23.5878 25.897 24.977C24.5047 26.3662 23.6502 27.7608 23.0116 29.4056C22.3933 30.9948 21.971 32.8124 21.8497 35.4738C21.7265 38.1394 21.6982 38.9916 21.6982 45.7808C21.6982 52.57 21.7265 53.4222 21.8497 56.0878C21.971 58.7494 22.3933 60.5668 23.0116 62.156C23.6502 63.7998 24.5049 65.196 25.897 66.5846C27.289 67.9732 28.6824 68.8282 30.3282 69.4682C31.9204 70.0862 33.7371 70.5082 36.4001 70.6294C39.0687 70.7506 39.92 70.7808 46.7132 70.7808C53.5065 70.7808 54.3592 70.7526 57.0264 70.6294C59.6896 70.5082 61.5081 70.0862 63.0983 69.4682C64.7431 68.8282 66.1373 67.9738 67.5295 66.5846C68.9218 65.1954 69.7745 63.7998 70.4149 62.156C71.0332 60.5668 71.4575 58.7492 71.5768 56.0878C71.698 53.4202 71.7262 52.57 71.7262 45.7808C71.7262 38.9916 71.698 38.1394 71.5768 35.4738C71.4555 32.8122 71.0332 30.9938 70.4149 29.4056C69.7745 27.7618 68.9196 26.3684 67.5295 24.977C66.1395 23.5856 64.7431 22.7316 63.1003 22.0934C61.5081 21.4754 59.6894 21.0514 57.0284 20.9322C54.3612 20.811 53.5085 20.7808 46.7152 20.7808C39.922 20.7808 39.0687 20.809 36.4001 20.9322Z"
                    fill="white"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_7092_54439"
                      x1="90.9407"
                      y1="91.5618"
                      x2="-0.621143"
                      y2="-2.46459e-06"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FBE18A" />
                      <stop offset="0.21" stopColor="#FCBB45" />
                      <stop offset="0.38" stopColor="#F75274" />
                      <stop offset="0.52" stopColor="#D53692" />
                      <stop offset="0.74" stopColor="#8F39CE" />
                      <stop offset={1} stopColor="#5B4FE9" />
                    </linearGradient>
                  </defs>
                </svg>
              </button>

              <button className="group transition-all duration-500 hover:-translate-y-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={40}
                  height={40}
                  viewBox="0 0 93 93"
                  fill="none"
                >
                  <rect
                    x="1.13867"
                    y={1}
                    width="91.5618"
                    height="91.5618"
                    rx={15}
                    fill="#006699"
                  />
                  <path
                    d="M37.1339 63.4304V40.9068H29.6473V63.4304H37.1346H37.1339ZM33.3922 37.8321C36.0023 37.8321 37.6273 36.1025 37.6273 33.9411C37.5785 31.7304 36.0023 30.0491 33.4418 30.0491C30.8795 30.0491 29.2061 31.7304 29.2061 33.9409C29.2061 36.1023 30.8305 37.8319 33.3431 37.8319H33.3916L33.3922 37.8321ZM41.2777 63.4304H48.7637V50.8535C48.7637 50.1813 48.8125 49.5072 49.0103 49.0271C49.5513 47.6815 50.7831 46.2887 52.8517 46.2887C55.5599 46.2887 56.644 48.354 56.644 51.3822V63.4304H64.1297V50.516C64.1297 43.598 60.4369 40.3787 55.5115 40.3787C51.4733 40.3787 49.6998 42.6357 48.7144 44.173H48.7643V40.9075H41.2781C41.3759 43.0205 41.2775 63.4312 41.2775 63.4312L41.2777 63.4304Z"
                    fill="white"
                  />
                </svg>
              </button>
              <button className="group transition-all duration-500 hover:-translate-y-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={40}
                  height={40}
                  viewBox="0 0 93 92"
                  fill="none"
                >
                  <rect
                    x="1.13867"
                    width="91.5618"
                    height="91.5618"
                    rx={15}
                    fill="#337FFF"
                  />
                  <path
                    d="M57.4233 48.6403L58.7279 40.3588H50.6917V34.9759C50.6917 32.7114 51.8137 30.4987 55.4013 30.4987H59.1063V23.4465C56.9486 23.1028 54.7685 22.9168 52.5834 22.8901C45.9692 22.8901 41.651 26.8626 41.651 34.0442V40.3588H34.3193V48.6403H41.651V68.671H50.6917V48.6403H57.4233Z"
                    fill="white"
                  />
                </svg>
              </button>

              <button className="group transition-all duration-500 hover:-translate-y-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={40}
                  height={40}
                  viewBox="0 0 93 92"
                  fill="none"
                >
                  <rect
                    x="0.138672"
                    width="91.5618"
                    height="91.5618"
                    rx={15}
                    fill="black"
                  />
                  <path
                    d="M50.7568 42.1716L69.3704 21H64.9596L48.7974 39.383L35.8887 21H21L40.5205 48.7983L21 71H25.4111L42.4788 51.5869L56.1113 71H71L50.7557 42.1716H50.7568ZM44.7152 49.0433L42.7374 46.2752L27.0005 24.2492H33.7756L46.4755 42.0249L48.4533 44.7929L64.9617 67.8986H58.1865L44.7152 49.0443V49.0433Z"
                    fill="white"
                  />
                </svg>
              </button>

              <button
                type="button"
                data-twe-ripple-init
                data-twe-ripple-color="light"
                className="mb-2 inline-block rounded bg-[#1769ff] px-3 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              >
                <span className="[&>svg]:h-4 [&>svg]:w-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 576 512"
                  >
                    <path d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2 .6-8.7 .6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-4 text-slate-400 px-2 md:px-20 py-4">
            <p>Privacy policy</p>
            <p>Terms of use</p>
            <p>Creater agreement</p>
          </div>
          <div className="mt-4 shadow-xl border border-slate-500 rounded-lg md:px-4 ">
            <div className="flex flex-col gap-2 py-2 justify-center ">
              <h4 className="text-white text-xl">
                Subscribe to our newsletter
              </h4>
              <p className="text-slate-400 text-sm">
                Subscribe to our daily newsletter to receive news and promos
                about our platform.
              </p>
              <div className="flex items-center bg-gray-100 p-1 rounded-md shadow-md w-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-grow p-2 text-gray-700 bg-transparent border-none outline-none font-sans"
                />
                <button
                  type="button"
                  className="ml-4 px-2 py-1 text-md text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-1 border-b-2 border-slate-400 text-xl text-center mx-10 md:mx-20"></div>

        <div className="flex justify-between py-6 mx-10 md:mx-20">
          <p className="text-slate-400">Hobnox 2024</p>
          <p className="text-slate-400">Copyright @2024</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
