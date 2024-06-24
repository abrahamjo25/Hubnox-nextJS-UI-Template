import Image from "next/image";
import React from "react";
import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiArrowRight,
} from "react-icons/fi";

const Events = () => {
  let events = [
    {
      img: "/images/event-1.png",
      date: "20 Jan, 2024",
      title: " Barber Expo London 2023",
      text: "Embrace the world of barbering, the UK's premier event for barbers and industry professionals.",
    },
    {
      img: "/images/event-2.png",
      date: "20 Jan, 2024",
      title: " Barber Expo London 2023",
      text: "Embrace the world of barbering, the UK's premier event for barbers and industry professionals.",
    },
    {
      img: "/images/event-3.png",
      date: "20 Jan, 2024",
      title: " Barber Expo London 2023",
      text: "Embrace the world of barbering, the UK's premier event for barbers and industry professionals.",
    },
    {
      img: "/images/event-2.png",
      date: "20 Jan, 2024",
      title: " Barber Expo London 2023",
      text: "Embrace the world of barbering, the UK's premier event for barbers and industry professionals.",
    },
  ];
  return (
    <div className="bg-gray-900">
      <div className="flex flex-col justify-center mx-20">
        <h2 className="text-xl md:text-4xl py-4 mt-10 text-slate-200 md:font-bold">
          Upcoming events
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
        {events?.map((item, index) => (
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
              <span className="block text-blue-300 font-bold">{item.date}</span>
              <h2 className="text-lg font-bold text-white mt-3">{item.title}</h2>
              <p className="text-sm text-slate-400 mt-3">{item.text}</p>
              <div className="flex justify-between ">
                <div className="flex gap-2 items-center mt-3">
                  <Image
                    className="rounded-full mt-3"
                    src="/images/profile.png"
                    alt="I"
                    width={40}
                    height={20}
                  />
                  <p className="text-white">Olivia Doe</p>
                </div>
                <div className="flex gap-2 items-center mt-3">
                  <span className="text-pink-400">See event</span>
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

export default Events;
