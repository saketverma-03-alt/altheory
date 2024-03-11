import BannerImage from "@public/banner.png";
import Image from "next/image";

export function HeroSection() {
  return (
    <>
      <div className="grid md:grid-cols-2  text-[#303030] h-full max-w-[1980px] overflow-x-clip ">
        <div className=" relative flex flex-col   col-span-2 lg:col-span-1 px-6 md:px-32 my-14">
        <div className="absolute z-10 bg-[#FDA55C]/50 h-64 w-64 translate-y-[-6rem]  left-12 blur-3xl opacity-80"></div>

          <div className="">
            <h1 className="text-5xl sm:text-5xl md:mt-20 relative z-30 md:text-6xl md:whitespace-nowrap font-extrabold leading-snug md:leading-snug">
              Enhance Your <br /> Business Operations <br /> With{" "}
              <span className="text-primary">Altheory</span>
              <br />
              Technologies
            </h1>
            <p className="text-xl mt-6 md:whitespace-nowrap text-muted">
              BUSINESS MANAGEMENT SOFTWARE COMPANY
            </p>
          </div>
          <div className="my-8 flex w-full relative">
            <div className="absolute z-10 bg-blue-500 h-32 w-32 top-0 left-12 blur-3xl opacity-80"></div>
            <button className="bg-secondary hover:bg-primary transition-colors rounded-2xl text-xl md:text-2xl  relative z-20 font-semibold text-white p-4 px-6">
              Get Started
            </button>
            <button className="font-semibold text-xl md:text-2xl p-4 px-6 relative z-20 hover:text-primary">
              How It Works
            </button>
          </div>
        </div>
        <div className="hidden lg:block pt-11">
          <Image src={BannerImage} width={1260} height={1980} className="scale-[1.25] z-0 relative" />
        </div>
      </div>
    </>
  );
}
