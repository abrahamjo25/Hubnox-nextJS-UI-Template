import Image from "next/image";
import Hero from "./_components/Hero";
import Events from "./_components/Events";
import Hub from "./_components/Hub";
import Creaters from "./_components/Creaters";
import Join from "./_components/Join";
import CreateEvent from "./_components/CreateEvent";
import WhoWeAre from "./_components/WhoWeAre";
import Footer from "./_components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <div className="bg-gray-900 h-24 flex items-start">
        <div className="flex items-center justify-between gap-4 mx-16 w-full py-6">
          <div className="">
            <Image
              src="/images/hubnox.png"
              alt="LOGO"
              width={140}
              height={80}
            />
          </div>
          <div className=" hidden lg:flex justify-center items-center gap-4 text-gray-300 ">
            <Link
              href="#events"
              className="hover:text-pink-400 hover:cursor-pointer ml-5"
            >
              Events
            </Link>
            <Link
              href="#creaters"
              className="hover:text-pink-400 hover:cursor-pointer ml-5"
            >
              Creators
            </Link>
            <Link
              href="#create_event"
              className="hover:text-pink-400 hover:cursor-pointer ml-5"
            >
              Create Event
            </Link>
            <Link
              href="#who_we_are"
              className="hover:text-pink-400 hover:cursor-pointer ml-5"
            >
              About us
            </Link>
          </div>
          <div className="">
            <Link href="#join">
              <Button className="hidden md:flex px-2 text-xs md:text-md">
                Become a member
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <section id="hero">
        <Hero />
      </section>
      <section id="events">
        <Events />
      </section>
      <section id="hub">
        <Hub />
      </section>
      <section id="creaters">
        <Creaters />
      </section>
      <section id="join">
        <Join />
      </section>
      <section id="create_event">
        <CreateEvent />
      </section>
      <section id="who_we_are">
        <WhoWeAre />
      </section>
      <Footer />
    </div>
  );
}
