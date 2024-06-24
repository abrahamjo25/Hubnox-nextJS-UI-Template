import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Join = () => {
  return (
    <div className="bg-gray-800">
      <div className="mx-20 py-20 grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-16">
        <Image
          src="/images/joinus.png"
          alt="Join"
          width={800}
          height={300}
          className="rounded-lg w-auto"
        />
        <div className="flex flex-col gap-4  ">
          <h2 className="text-4xl font-bold text-white  max-w-screen-sm">
            Join <span className="text-pink-500">Hunbox</span> for events that
            will change your life!
          </h2>
          <p className="text-slate-400  max-w-screen-sm">
            By becoming a member, you become a part of an exclusive community of
            creators and will have an access to events of life changing power.
          </p>
          <Button className="inline-block p-2 text-base text-white rounded-md whitespace-nowrap max-w-screen-sm">Get the app</Button>
        </div>
      </div>
    </div>
  );
};

export default Join;
