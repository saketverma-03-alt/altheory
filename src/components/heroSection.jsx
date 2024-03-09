import BannerImage from "@public/banner.png";
import Image from "next/image";

export function HeroSection() {
  return (
    <>
      <div className="grid md:grid-cols-2  text-[#303030] h-full max-w-[100rem]">
        <div className="md:mx-16 relative p-6 flex flex-col   col-span-2 lg:col-span-1 md:ml-24 my-14">
          <div className="absolute z-10 bg-[#FDA55C]/70 h-56 w-56 top-0 left-0 blur-3xl opacity-80"></div>
          <div className="">
            <h1 className="text-3xl sm:text-5xl  relative z-30 md:text-6xl font-bold leading-snug md:leading-normal">
              Enhance Your <br /> Business Operations <br /> With{" "}
              <span className="text-primary">Altheory</span>
              <br />
              Technologies
            </h1>
            <p className="text-md text-muted">
              BUSINESS MANAGEMENT SOFTWARE COMPANY
            </p>
          </div>
          <div className="my-8 flex w-full relative">
            <div className="absolute z-10 bg-blue-500 h-32 w-32 top-0 left-12 blur-3xl opacity-80"></div>
            <button className="bg-secondary relative z-20 font-bold text-white p-4 px-6">
              Get Started
            </button>
            <button className="font-bold p-4 px-6 relative z-20">
              How It Works
            </button>
          </div>
        </div>
        <div className="hidden lg:block">
          <Image src={BannerImage} />
        </div>
      </div>
    </>
  );
}
