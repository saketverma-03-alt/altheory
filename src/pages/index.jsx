import { Nav } from "@/components/navbar";

import AltheoryLogoW from "@public/altheory-logo-w.svg";

import BulgGif from "@public/bulb.gif";
import CostGif from "@public/money.gif";
import RocketGif from "@public/rocket.gif";

import ClientImg1 from "@public/client-1.svg";
import ClientImg2 from "@public/client-2.svg";
import ClientImg3 from "@public/client-3.svg";
import ClientImg4 from "@public/client-4.svg";

import BGImage from "@public/Background.svg";

import Image from "next/image";
import { TestimonialSection } from "@/components/tetimonialSection";
import { UsepSectin } from "@/components/UspSection";

import { HeroSection } from "@/components/heroSection";
import { AboutusSection } from "@/components/abutUsSection";
import { OurProductSection } from "@/components/ourproductSecction";
import { TeamSection } from "@/components/teamSection";
import { useIntersectionObserver } from "@/hooks";
import {
  Envelope,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "react-bootstrap-icons";
import StatsSection from "@/components/statsSec";
import { motion } from "framer-motion";
import Footer from "@/components/footer";

export default function Example() {
  const [activeTabId, secRefs] = useIntersectionObserver();

  return (
    <>
      <Nav activeTabId={activeTabId} />
      {/* <div className="h-[5.2rem] bg-white z-10 relative"></div> */}
      <main className="flex flex-col items-center text-secondary overflow-x-hidden">
        <section className="" id="home" ref={secRefs.home}>
          <HeroSection />
        </section>
        <section className="max-w-[1980px] md:mx-36 mt-12 lg:mt-40">
          <div className="mb-10">
            <div className="text-2xl  font-semibold text-center mb-4">
              Harness the Power of Business Management Software for Growth
            </div>
            <p className="mx-auto px-10 text-center max-w-2xl leading-[26px]  text-muted ">
              Unique and powerful suite of software to run your entire business,
              brought to you by a company with the long term vision to transform
              the way you work.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 my-8">
            <div className="flex p-4 flex-col md:flex-row items-center">
              <figure className="mr-6 w-20 h-20">
                <Image alt="icon" src={BulgGif} width={80} height={80} />
              </figure>
              <div className="flex-1 space-y-2 text-center md:text-left">
                <div className="font-[500] text-xl">Elevate Productivity </div>
                <p className="text-muted">
                  Streamlining processes and leveraging innovative tools to
                  maximize efficiency and output
                </p>
              </div>
            </div>
            <div className="flex p-4 flex-col md:flex-row items-center">
              <figure className="mr-6 w-20 h-20">
                <Image alt="icon" src={CostGif} />
              </figure>
              <div className="flex-1 space-y-2 text-center md:text-left ">
                <div className="font-[500] text-xl">
                  Transforming Business Dynamics{" "}
                </div>
                <p className="text-muted">
                  Revolutionizing technological landscapes to redefine business
                  strategies and operations
                </p>
              </div>
            </div>
            <div className="flex col-span-2 md:col-span-1 p-4 flex-col md:flex-row items-center">
              <figure className="mr-6 w-20 h-20">
                <Image alt="icon" src={RocketGif} />
              </figure>
              <div className="flex-1 space-y-2  text-center md:text-left">
                <div className="font-[500] text-xl">
                  Transforming Operations{" "}
                </div>
                <p className="text-muted">
                  Optimizing processes and workflows to enhance efficiency and
                  productivity{" "}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About us section */}

        <span id="about" ref={secRefs.about}></span>

        <section className="bg-[#FAFAFA] py-16 mt-20 w-full flex flex-col  items-center  ">
          <AboutusSection />
        </section>
        {/* our product section */}
        <span id="products" className="" ref={secRefs.product}></span>

        <section className=" w-full grid md:grid-cols-2 p-6 md:p-20 mt-16 mb-12 max-w-[1980px] lg:px-36">
          <OurProductSection />
        </section>

        {/* STATS section */}
        <section>
          <StatsSection />
        </section>
        {/*Product USP section*/}
        <section
          id="usp"
          className="flex bg-[#E8F5FF] w-full py-24 justify-center items-center flex-col mt-28"
        >
          <UsepSectin />
          {/*TODO: have to do some work here prob need interactive components*/}
        </section>
        {/* Testimonial section */}
        <section
          id="testimonial"
          className="my-24 max-w-[1980px] lg:px-36 px-6 "
        >
          <TestimonialSection />
        </section>
        {/* Founders Section */}
        <TeamSection />
        {/*Trusted By section*/}
        <section className="mt-32 flex items-center flex-col max-w-[1980px] lg:px-36">
          <motion.h2
            initial={{ opacity: 0 }}
            // animate={{ opacity: 100 }}
            whileInView={{ opacity: 100 }}
            exit={{ opacity: 0 }}
            transition={{ type: "linear", duration: 2 }}
            className="font-bold text-3xl text-center mb-2 px-4"
          >
            Trusted By Teams Around The Globally
          </motion.h2>
          <p className="text-muted text-center text-sm px-6">
            Unique And Powerful Suite Of Software To Run Your Entire Business,
            <br />
            Brought To You Transform The Way You Work.
          </p>
        </section>
        <div className="my-16 hidden md:block ">
          <motion.div
            transition={{ duration: 15, ease: "linear", repeat: Infinity }}
            initial={{ x: "-50%" }}
            animate={{ x: "0" }}
            className=" flex  p-4 gap-28 mt-16"
          >
            {[...Array(10)].map(() => (
              <>
                <Image alt="onboardme logo" src={ClientImg1} />
                <Image alt="client.sport logo" src={ClientImg2} />
                <Image alt="Lorem logo" src={ClientImg3} />
                <Image alt="Berry logo" src={ClientImg4} />
              </>
            ))}
          </motion.div>
        </div>
        <div className="grid grid-cols-2  p-4 gap-16 mt-16 my-16 md:hidden  ">
          <>
            <Image alt="onboardme logo" src={ClientImg1} />
            <Image alt="client.sport logo" src={ClientImg2} />
            <Image alt="Lorem logo" src={ClientImg3} />
            <Image alt="Berry logo" src={ClientImg4} />
          </>
        </div>
        <Footer />
      </main>
    </>
  );
}
