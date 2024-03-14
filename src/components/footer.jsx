import AltheoryLogoW from "@public/altheory-logo-w.svg";

import BGImage from "@public/Background.svg";

import Image from "next/image";

import {
  Envelope,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "react-bootstrap-icons";
export default function Footer() {
  return (
    <>
      <footer className=" mx-auto md:px-16 w-full max-w-7xl mt-24">
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
              <Image alt="altheory logo" src={AltheoryLogoW} />
              <p className="max-w-sm text-white/70 my-4 text-sm ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores sequi veritatis rerum omnis cum quidem, tempora aut!
                Obcaecati aperiam ducimus et optio iste libero,
              </p>
              <ul className="flex gap-4">
                <Instagram className="text-white/80 hover:text-primary cursor-pointer" />
                <Facebook className="text-white/80 hover:text-primary cursor-pointer" />
                <Twitter className="text-white/80 hover:text-primary cursor-pointer" />
                <Linkedin className="text-white/80 hover:text-primary cursor-pointer" />
                <Youtube className="text-white/80 hover:text-primary cursor-pointer" />
              </ul>
            </div>
            <div className=" text-white/90 flex flex-col md:flex-row gap-8 flex-1">
              <ul className="flex flex-col">
                <div className="text-primary ">Menu</div>
                <div className=" flex md:flex-col gap-2 flex-wrap md:gap-1">
                  <a href="#home">Home</a>
                  <a href="#about">About</a>
                  <a href="#products">
                    Product{" "}
                    <span className="inline-block bg-green-500 text-xs px-1 rounded-full">
                      OFFER
                    </span>{" "}
                  </a>
                  <a href="career">Career</a>
                  <a href="contact">Contact</a>
                </div>
              </ul>
              <ul className="flex flex-col">
                <div className="text-primary   ">Address</div>
                <div className=" flex md:flex-col gap-2 md:gap-1">
                  <p className="max-w-48">
                    Leoxsys Building, 4th Floor, Maheshwari Nagar, Mahadevpura,
                    Bangalore, Karnataka, 560043, IN
                  </p>
                </div>
              </ul>
              <ul className="flex flex-col">
                <div className="text-primary   ">Say Hellow</div>
                <div className=" flex flex-col gap-1">
                  <div>
                    <span>
                      {" "}
                      <a
                        className="flex gap-2 items-center hover:text-primary"
                        href="mailto&#58;info&#64;altheory&#46;com"
                      >
                        {" "}
                        <Envelope className="h-5 w-5  " /> Contact
                      </a>
                    </span>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>

        <div
          id="contact"
          //   ref={secRefs.contact}
          className="text-muted flex w-full my-4 px-2 text-sm"
        >
          <span className="block">
            Copyright © <span className="text-secondary font-bold"></span> | is
            Proudly Powered by Altheory
          </span>
          <span className="ml-auto block">
            Privacy policy | Terms and condition
          </span>
        </div>
      </footer>
    </>
  );
}
