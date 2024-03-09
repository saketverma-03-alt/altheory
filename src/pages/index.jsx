import { Nav } from "@/components/navbar";
import BannerImage from "@public/banner.png";

import AltheoryLogoW from "@public/altheory-logo-w.svg";

import Logo from "@public/logo.svg";
import AboutUs from "@public/aboutUs.png";
import BulgGif from "@public/gif-1.gif";
import CostGif from "@public/gif-2.gif";
import RocketGif from "@public/gif-3.gif";

import ProdSecImaeg from "@public/product-main.png";
import ProdSecIcon1 from "@public/prod-sec-icon-1.svg";
import ProdSecIcon2 from "@public/prod-sec-icon-2.png";
import ProdSecIcon3 from "@public/prod-sec-icon-3.png";

import ClientImg1 from "@public/client-1.svg";
import ClientImg2 from "@public/client-2.svg";
import ClientImg3 from "@public/client-3.svg";
import ClientImg4 from "@public/client-4.svg";

import BGImage from "@public/Background.svg";

import Image from "next/image";
import { TestimonialSection } from "@/components/tetimonialSection";
import { UsepSectin } from "@/components/UspSection";
import {
  FacebookIcon,
  InstagramIcon,
  Linkedin,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import { HeroSection } from "@/components/heroSection";
import { AboutusSection } from "@/components/abutUsSection";
import { OurProductSection } from "@/components/ourproductSecction";
export default function Example() {
  return (
    <>
      <Nav />
      <main className="flex flex-col items-center text-secondary">
        <section className="]">
          <HeroSection />
        </section>
        <section className="max-w-7xl">
          <div className="mb-10">
            <div className="text-4xl  font-bold text-center mb-4">
              Explore Premium Features
            </div>
            <p className="mx-auto text-center max-w-2xl  text-muted ">
              Unique and powerful suite of software to run your entire business,
              brought to you by a company with the long term vision to transform
              the way you work.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 my-8">
            <div className="flex p-4 flex-col md:flex-row items-center">
              <figure className="mr-2">
                <Image src={BulgGif} />
              </figure>
              <div className="flex-1 space-y-2 text-center md:text-left">
                <div className="font-bold">Grow your business</div>
                <p className="text-muted">
                  We also help our clients with social media strategy
                </p>
              </div>
            </div>
            <div className="flex p-4 flex-col md:flex-row items-center">
              <figure className="mr-2">
                <Image src={CostGif} />
              </figure>
              <div className="flex-1 space-y-2 text-center md:text-left ">
                <div className="font-bold">Cost saving ideas</div>
                <p className="text-muted">
                  We believe in challenges and so we have mode challenges.
                </p>
              </div>
            </div>
            <div className="flex col-span-2 md:col-span-1 p-4 flex-col md:flex-row items-center">
              <figure className="mr-2">
                <Image src={RocketGif} />
              </figure>
              <div className="flex-1 space-y-2  text-center md:text-left">
                <div className="font-bold">Boost performance</div>
                <p className="text-muted">
                  We deliver email marketing campaigns to your audience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About us section */}
        <section className="bg-[#FAFAFA] w-full flex flex-col items-center  ">
          <AboutusSection />
        </section>
        {/* our product section */}

        <section className=" w-full grid md:grid-cols-2 p-6 md:p-20  max-w-[1440px]">
          <OurProductSection />
        </section>

        {/* STATS section */}
        <section>
          <div className="border-t border-muted m-10 ">
            <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-4 gap-16 pt-16">
              <div className="flex items-center gap-4">
                <span className="text-3xl">
                  324
                  <span className="text-[#5956E8]">+</span>
                </span>
                <span className="text-muted">
                  CLIENTS <br /> WORLDWIDE
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-3xl">
                  975
                  <span className="text-[#FF1850]">+</span>
                </span>

                <span className="text-muted">
                  PROJECTS <br /> COMPLETED
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-3xl">
                  25
                  <span className="text-[#FFDC60]">+</span>
                </span>
                <span className="text-muted">
                  TEAM <br /> MEAMBERS
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-3xl">
                  85m
                  <span className="text-[#38E55E]">+</span>
                </span>
                <span className="text-muted">
                  REVENUE <br /> GENERATED
                </span>
              </div>
            </div>
          </div>
        </section>
        {/*Product USP section*/}
        <section className="flex  flex-col mt-28">
          <UsepSectin />
          {/*TODO: have to do some work here prob need interactive components*/}
        </section>
        {/* Testimonial section */}
        <section className="my-24">
          <TestimonialSection />
        </section>
        {/*Trusted By section*/}
        <section className="my-32 flex items-center flex-col">
          <h1 className="font-bold text-3xl text-center mb-2 px-4">
            Trusted By Teams Around The Globally
          </h1>
          <p className="text-muted text-center text-sm px-6">
            Unique And Powerful Suite Of Software To Run Your Entire Business,
            <br />
            Brought To You Transform The Way You Work.
          </p>
          <div className="grid lg:flex grid-cols-2 p-4 gap-16 mt-16 ">
            <Image src={ClientImg1} />
            <Image src={ClientImg2} />
            <Image src={ClientImg3} />
            <Image src={ClientImg4} />
          </div>
        </section>
        <footer className=" md:px-16 w-full max-w-7xl mt-24">
          <form
            style={{
              backgroundImage: `url(${BGImage.src})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className=" flex flex-col md:flex-row items-center shadow-bal p-8 md:px-12 md:py-16 w-full max-w-4xl relative mb-[-100px] mx-auto z-50
               rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-[#231656] flex-1">
              Get Updates By Subscribe <br />
              Our Weekly <span className="text-white"> Newsletter</span>
            </h3>
            <div className="flex md:items-center w-full md:w-fit mt-8 md:mt-0 md:flex-row gap-4 flex-col">
              <input
                type="email"
                className="p-4 rounded-full w-full"
                placeholder="Enter your email"
              />
              <button
                className="p-4 rounded-full bg-[#231656] text-white"
                type="submit"
                placeholder="asda"
              >
                Subscripbe
              </button>
            </div>
          </form>

          <div className="bg-[#4A4A4A] relative w-full h-full rounded-xl px-8 md:px-16 pb-16">
            <div className="flex flex-col md:flex-row pt-40 gap-8 ">
              <div className="md:border-r border-gray-500 pr-8">
                <Image src={AltheoryLogoW} />
                <p className="max-w-sm text-white/70 my-4 text-sm ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores sequi veritatis rerum omnis cum quidem, tempora
                  aut! Obcaecati aperiam ducimus et optio iste libero,
                </p>
                <ul className="flex gap-4">
                  <InstagramIcon className="text-white/80 hover:text-primary cursor-pointer" />
                  <FacebookIcon className="text-white/80 hover:text-primary cursor-pointer" />
                  <TwitterIcon className="text-white/80 hover:text-primary cursor-pointer" />
                  <Linkedin className="text-white/80 hover:text-primary cursor-pointer" />
                  <YoutubeIcon className="text-white/80 hover:text-primary cursor-pointer" />
                </ul>
              </div>
              <div className=" text-white/90 flex flex-col md:flex-row gap-8 flex-1">
                <ul className="flex flex-col">
                  <div className="text-primary ">Menu</div>
                  <div className=" flex md:flex-col gap-2 flex-wrap md:gap-1">
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">
                      Product{" "}
                      <span className="inline-block bg-green-500 text-xs px-1 rounded-full">
                        OFFER
                      </span>{" "}
                    </a>
                    <a href="">Career</a>
                    <a href="">Contact</a>
                  </div>
                </ul>
                <ul className="flex flex-col">
                  <div className="text-primary   ">Address</div>
                  <div className=" flex md:flex-col gap-2 md:gap-1">
                    <p className="max-w-48">
                      Leoxsys Building, 4th Floor, Maheshwari Nagar,
                      Mahadevpura, Bangalore, Karnataka, 560043, IN
                    </p>
                  </div>
                </ul>
                <ul className="flex flex-col">
                  <div className="text-primary   ">Say Hellow</div>
                  <div className=" flex flex-col gap-1">
                    <div className="w-fit">+91 9999 111 123</div>
                    <div>+91 0111 234 567</div>
                    <div>info@Altheory.in</div>
                  </div>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-muted flex w-full my-4 px-2 text-sm">
            <span className="block">
              Copyright © <span className="text-secondary font-bold"></span> |
              is Proudly Powered by Altheory
            </span>
            <span className="ml-auto block">
              Privacy policy | Terms and condition
            </span>
          </div>
        </footer>
      </main>
    </>
  );
}
