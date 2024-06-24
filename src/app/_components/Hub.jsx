import Image from "next/image";
import React from "react";

const Hub = () => {
  return (
    <div className="bg-gray-900">
      <div className="flex flex-col  gap-4 mx-20 py-32">
        <h2 className="text-xl md:text-4xl text-white md:font-bold">
          We are the hub for high-quality
          <span className="text-blue-500">verified</span> events
        </h2>
        <p className="text-slate-400 py-4 max-w-screen-sm">
          We are a powerful community of people who love what they do,
          constantly pushing the boundaries of what is possible and inspiring
          others to do the same!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col gap bg-gray-700 rounded-lg justify-center px-4 py-4">
            <Image
              src="/images/elite.png"
              alt="elite"
              width={50}
              height={50}
              className="py-4"
            />
            <h2 className="text-2xl text-white font-bold py-4">Join the elite</h2>
            <p className="text-slate-400 mb-4">
              By becoming a member, you will become a part of an exclusive
              community and will have an access to events of life changing
              power.
            </p>
          </div>
          <div className="flex flex-col gap bg-gray-700 rounded-lg justify-center px-4 py-4">
            <Image
              src="/images/variety.png"
              alt="variety"
              width={50}
              height={50}
              className="py-4"
            />
            <h2 className="text-2xl text-white font-bold py-4">Join the variety</h2>
            <p className="text-slate-400 mb-4">
              By becoming a member, you will become a part of an exclusive
              community and will have an access to events of life changing
              power.
            </p>
          </div>
          <div className="flex flex-col gap bg-gray-700 rounded-lg justify-center px-4 py-4">
            <Image
              src="/images/network.png"
              alt="network"
              width={50}
              height={50}
              className="py-4"
            />
            <h2 className="text-2xl text-white font-bold py-4">
              Network, lear and glow
            </h2>
            <p className="text-slate-400 mb-4">
              By becoming a member, you will become a part of an exclusive
              community and will have an access to events of life changing
              power.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hub;
