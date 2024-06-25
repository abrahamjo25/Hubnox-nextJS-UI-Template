import { Button } from "@/components/ui/button";
import React from "react";

const CreateEvent = () => {
  return (
    <div className="bg-gray-900">
      <div className="py-20 px:10 md:px-20 flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between">
          <div className="">
            <h2 className="text-white font-bold text-4xl mb-3">
              Create your event with Hubnox!
            </h2>
            <p className="text-slate-400 ">
              We are a powerful community of people who love what they do,
              constantly pushing the boundaries of what is possible and
              inspiring others to do the same!
            </p>
          </div>
          <div className="py-3">
            <Button className="float-end">Become a creater</Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-4 py-4">
          <div className="col-span-3 rounded-lg hover:shadow-md  hover:shadow-pink-500/50 bg-gray-800 cursor-pointer">
            <div className="flex flex-col gap-4 px-4 py-6">
              <div className=" w-10 h-10 bg-pink-500 rounded-full filter blur-sm opacity-70" />
              <h3 className="text-white text-2xl font-bold ">Join the elite</h3>
              <p className=" text-slate-400 max-w-screen-sm">
                Hopnox is the ultimate destination for exclusive and bespoke
                beauty and hair experiences.
              </p>
            </div>
          </div>
          <div className="col-span-2 rounded-lg hover:shadow-md  hover:shadow-blue-500/50 bg-gray-800 cursor-pointer">
            <div className="flex flex-col gap-4 px-4 py-6">
              <div className=" w-10 h-10 bg-blue-500 rounded-full filter blur-sm opacity-70" />
              <h3 className="text-white text-2xl font-bold ">
                Like-minded people
              </h3>
              <p className=" text-slate-400">
                Hopnox is the ultimate destination for exclusive and bespoke
                beauty and hair experiences.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-4 py-4">
          <div className="col-span-2 rounded-lg hover:shadow-md  hover:shadow-blue-500/50 bg-gray-800 cursor-pointer">
            <div className="flex flex-col gap-4 px-4 py-6">
              <div className=" w-10 h-10 bg-blue-500 rounded-full filter blur-sm opacity-70" />
              <h3 className="text-white text-2xl font-bold ">
                Business growth
              </h3>
              <p className=" text-slate-400">
                Hopnox is the ultimate destination for exclusive and bespoke
                beauty and hair experiences.
              </p>
            </div>
          </div>
          <div className="col-span-3 rounded-lg hover:shadow-md  hover:shadow-pink-500/50 bg-gray-800 cursor-pointer">
            <div className="flex flex-col gap-4 px-4 py-6">
              <div className=" w-10 h-10 bg-pink-500 rounded-full filter blur-sm opacity-70" />
              <h3 className="text-white text-2xl font-bold ">Its easy</h3>
              <p className=" text-slate-400 max-w-screen-sm">
                Hopnox is the ultimate destination for exclusive and bespoke
                beauty and hair experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
