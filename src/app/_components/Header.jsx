import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="bg-gray-900 h-20 flex items-start">
      <div className="flex items-center justify-between gap-4 mx-16 w-full py-4">
        <div className="">
          <Image src="/images/hubnox.png" alt="LOGO" width={140} height={80} />
        </div>
        <div className=" hidden lg:flex justify-center items-center gap-4 text-gray-300 ">
          <p className="hover:text-pink-400 hover:cursor-pointer">Events</p>
          <p className="hover:text-pink-400 hover:cursor-pointer">Creators</p>
          <p className="hover:text-pink-400 hover:cursor-pointer">
            Create Event
          </p>
          <p className="hover:text-pink-400 hover:cursor-pointer">About us</p>
        </div>
        <div className="">
          <Button>Become a member</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
