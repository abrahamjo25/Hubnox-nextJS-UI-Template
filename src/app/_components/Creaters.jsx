import Image from "next/image";
import React from "react";
import { FiArrowRight,FiArrowRightCircle,FiArrowLeftCircle } from "react-icons/fi";

const Creaters = () => {
  let creators = [
    {
      img: "/images/creator-1.png",
      name: " Olivia Doe",
      text: "Embrace the world of barbering, the UK's premier event for barbers and industry professionals.",
    },
    {
      img: "/images/creator-2.png",
      name: "Jane Parker",
      text: "Embrace the world of barbering, the UK's premier event for barbers and industry professionals.",
    },
    {
      img: "/images/creator-3.png",
      name: "Anna Watson",
      text: "Embrace the world of barbering, the UK's premier event for barbers and industry professionals.",
    },
    {
      img: "/images/creator-2.png",
      name: "Jane Parker",
      text: "Embrace the world of barbering, the UK's premier event for barbers and industry professionals.",
    },
  ];
  return (
    <div className="bg-gray-900 py-32">
      <div className="flex flex-col gap-4 mx-20">
        <h2 className="text-4xl text-white font-bold">
          Creators that create events with us
        </h2>
        <div className="flex justify-between">
          <p className="text-slate-400">
            Here are some upcoming events from our creaters.
          </p>
          <div className="flex items-center gap-4">
            <FiArrowLeftCircle className="w-6 h-6 text-slate-400 hover:text-pink-400" />
            <span className="text-slate-200 text-lg">1/8</span>
            <FiArrowRightCircle className="w-6 h-6 text-slate-400 hover:text-pink-400" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-20 gap-2 mt-3">
        {creators?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 items-center justify-start text-left"
          >
            <Image
              src={item.img}
              width={400}
              height={200}
              alt="event"
              className="rounded-lg"
            />
            <div className="text-left mt-4">
              <h2 className="text-lg font-bold text-white mt-3">{item.name}</h2>
              <p className="text-sm text-slate-400 mt-3">{item.text}</p>
              <div className="flex justify-between ">
                <div className="flex gap-2 items-center mt-3">
                  <span className="text-pink-400">See creator events</span>
                  <FiArrowRight className="text-pink-400" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Creaters;
