import FounderImage from "@public/founderImage.png";
import waveImage from "@public/waves.svg";
import fillImage from "@public/Fill.svg";
import AtulSoni from "@public/atul-soni.png";
import saket from "@public/saket.png";
import dev_narayn from "@public/dev_narayn.png";
import srb from "@public/srb.png";
import alam from "@public/mohad-alam.png";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter } from "react-bootstrap-icons";

const teamMembers = [
    {
    name: "Debashish",
    des: "co-founder",
    css: " bg-gradient-to-r  from-red-800 to-red-600",
    image: AtulSoni,
  },
  {
    name: "Atul Soni",
    des: "Product Manager",
    css: "from-blue-100 to-blue-700",
    image: AtulSoni,
  },
  {
    name: "Mohad Alam",
    des: "UI UX Designer",
    css: "from-gray-200 to-gray-500",
    image: alam,
  },
  {
    name: "Sourab Chhabra",
    des: "Frontend Devloper",
    css: "from-gray-200 to-gray-200",
    image: srb,
  },
  {
    name: "dev narayan",
    des: "Software Devloper",
    css: "from-green-600 to-green-400",
    image: dev_narayn,
  },
  {
    name: "Saket Verma",
    des: "Frontend Devoper",
    css: "from-sky-400 to-sky-200",
    image: saket,
  },
];

export function TeamSection() {
  return (
    <>
      <section className="bg-[#2D3853] text-white h-fit py-36 w-full flex justify-center items-center">
        <div className="grid md:grid-cols-2 px-8 gap-16 max-w-[1980px] lg:px-36 w-full ">
          <div className="relative flex flex-col w-full">
            <h2 className="relative z-[2]">
              <span className="block ml-6 mb-[-1.5rem] text-3xl opacity-70">
                Meet
              </span>
              <br />
              <span className=" font-extrabold text-5xl">Our Founder</span>
            </h2>
            <Image
              src={fillImage}
              className="absolute top-[0px] left-[-100px] z-[1] "
            />

            <figure className="p-4 max-w-3xl ">
              <Image
              alt="Ravi Sankar Founder"
                src={FounderImage}
                width={400}
                height={700}
                className="z-[10] relative"
              />
              <Image
                alt="vector graphic"
                src={waveImage}
                className="absolute bottom-[-30px] right-60 z-20 "
              />
            </figure>
          </div>
          <div className="flex justify-center flex-col">
            <p className="font-bold text-4xl">Ravi Sankar</p>
            <p className="text-2xl opacity-80 mt-2">CEO & Founder</p>

            <p className="mb-6 text-2xl mt-8 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
              tenetur asperiores hic sunt earum dolorum vitae facilis cum
              quaerat aut quibusdam deleniti, nam quo amet officia saepe. In,
              molestias ipsam!
            </p>

            <p className=" text-2xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
              tenetur asperiores hic sunt earum dolorum vitae facilis cum
              quaerat aut quibusdam deleniti, nam quo amet officia saepe. In,
              molestias ipsam!
            </p>
            <figure className="mt-16  hover:text-primary rounded-2xl hover:bg-white w-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="72"
                height="72"
                fill="currentColor"
                class="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
            </figure>
          </div>
        </div>
      </section>

      <section className="py-36 grid  md:grid-cols-3 max-w-[1980px] px-8 lg:px-36">
        {/* fiunder frame */}
        <div className="mb-8 p-8">
          <span className="text-2xl block font-semibold mb-6">
            OUR CREATIVE TEAM
          </span>
          <h3 className="text-6xl font-bold mb-8">
            Get To Know
            <br />
            <span className="text-primary">Creative</span>
          </h3>
          <p className="max-w-xl ">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
            Suspendisse urna nibh, viverra non
          </p>
        </div>
        <div className="grid relative grid-cols-2 lg:grid-cols-3 col-span-2 gap-4 text-black">
         

          {/* team members frame */}
          {teamMembers.map((item) => {
            return (
              <>
         

          <div className="border md:p-4 flex flex-col gap-2 p-2 group duration-400 transition-all  delay-0 hover:rounded-none rounded-t-full  hover:shadow-xl  ">
          <figure className={`${item.css}   group-hover:srounded-t-full relative ease-in-out duration-400  transition-all bg-gradient-to-t pt-2 md:pt-6 group-hover:rounded-none rounded-t-full `}>
              <div className="">
                <Image alt={item.name + 'team member image'} src={item.image} className="w-full transition-all duration-500 group-hover:scale-100 h-full object-cover " />
              </div>

              <div className="absolute bottom-0  bg-gradient-to-t text-white gap-4 text-xl group-hover:text-3xl pb-4 from-slate-500 group-hover:opacity-100 transition-all flex via-transparent h-1/2 w-full opacity-0 items-end justify-center">
                <a href="#home" className="block hover:text-primary">
                  <Instagram />
                </a>
                <a href="#home" className="block hover:text-primary">
                  <Facebook />
                </a>
                <a href="#home" className="block hover:text-primary">
                  <Twitter />
                </a>
                <a href="#home" className="block hover:text-primary">
                  <Linkedin />
                </a>
              </div>
            </figure>

            <p className="w-full text-center">
              <span className="text-md md:text-2xl">{item.name}</span> <br />
              <span className="text-sm md:text-md opacity-70">{item.des}</span>
            </p>
          </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}
