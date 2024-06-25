import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

const WhoWeAre = () => {
  let weAre = [
    { img: "/images/we-1.png", name: "Wojtek", job: "Technology" },
    { img: "/images/we-2.png", name: "Margo", job: "Business" },
    { img: "/images/we-3.png", name: "Byrd", job: "Creative" },
  ];
  return (
    <div className="bg-gray-900">
      <div className="px-10 md:px-20">
        <div className="flex flex-col gap-4 ">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-between">
            <div>
              <h2 className="text-white text-3xl font-bold">Who we are?</h2>
              <p className="text-slate-400 max-w-screen-sm">
                We are a powerful community of people who love what they do,
                constantly pushing the boundaries of what is possible and
                inspiring others to do the same!
              </p>
            </div>
            <div>
              <Button className="float-end">Become a member</Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {weAre?.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-4  justify-center text-left"
              >
                <Image
                  src={item.img}
                  width={600}
                  height={300}
                  alt="We"
                  className="rounded-lg"
                />
                <div className="text-left mt-4">
                  <h2 className="text-lg font-bold text-white mt-3">
                    {item.name}
                  </h2>
                  <p className="text-sm text-slate-400 mt-3">{item.job}</p>
                  <div className="flex gap-2 items-center mt-3">
                    <span className="text-pink-400">See profile</span>
                    <FiArrowRight className="text-pink-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
