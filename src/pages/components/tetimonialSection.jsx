import companyLogo1 from "@public/testimonial-1.svg";
import manImage from "@public/testimonial-1-image.svg";
import Pattern from "@public/Pattern.svg";

import star from "@public/star.svg";
import Image from "next/image";

import { Transition } from "@headlessui/react";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialSection() {
  const [testmPageNum, setTestPageNum] = useState(1);
  const MAX_PAGE = 2;
  const MIN_PAGE = 1;
  function changeTestiPageNum(num) {
    if (num < MIN_PAGE) return setTestPageNum(MAX_PAGE);
    if (num > MAX_PAGE) return setTestPageNum(MIN_PAGE);

    setTestPageNum(num);
  }
  return (
    <>
      <div className="grid md:grid-cols-2">
        {/* info */}
        <div className="p-10 md:p-16">
          <h3 className="font-bold">TESTIMONIALS</h3>

          <h3 className="text-6xl font-bold  mt-2 mb-6">
            What People <br /> <span className="text-primary"> Say</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            corporis quam eius reprehenderit, suscipit provident, eligendi
            veritatis, quidem delectus dolorum esse amet molestias explicabo?
          </p>
        </div>
        {/* cards */}
        <div>
          <div className=" p-8 flex flex-col lg:flex-row gap-4">
            {testmPageNum === 1 && (
              <>
                <TestimonialCard key={1} />
                <TestimonialCard key={2} />
              </>
            )}
            {testmPageNum === 2 && (
              <>
                <TestimonialCard key={3} />
                <TestimonialCard key={4} />
              </>
            )}
          </div>
          <div className="flex col-span-2 ">
            <div className="mx-auto flex gap-1">
              <span
                className={`${
                  testmPageNum == 1 ? "bg-red-600" : "bg-red-600/50"
                } h-4 w-4 rounded-full  block`}
              ></span>
              <span
                className={`${
                  testmPageNum == 2 ? "bg-red-600" : "bg-red-600/50"
                } h-4 w-4 rounded-full  block`}
              ></span>
            </div>
            <div className="flex gap-4 m-4">
              <button
                onClick={() => changeTestiPageNum(testmPageNum + 1)}
                className="p-2 bg-gray-800 shadow-lg rounded-full text-white"
              >
                <ChevronLeft />
              </button>

              <button
                onClick={() => changeTestiPageNum(testmPageNum - 1)}
                className="p-2 bg-gray-800 rounded-full text-white"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      <TestimonialFoot />
    </>
  );
}

function TestimonialCard() {
  return (
    <>
      <Transition
        appear={true}
        show={true}
        enter="transition-all duration-500"
        enterFrom=" opacity-10 translate-x-10"
        enterTo=" translate-x-0 opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="bg-[#FFF8F8] rounded-xl p-10 flex flex-col justify-between ">
          <div className="flex justify-between  items-center gap-8">
            <figure>
              <Image src={companyLogo1} />
            </figure>
            <figure className="flex gap-1">
              {[0, 0, 0, 0, 0].map(() => (
                <Image
                  src={star}
                  className="h-4 w-4"
                  height={100}
                  width={100}
                />
              ))}
            </figure>
          </div>
          <p className="my-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, alias.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab,
            aperiam.
          </p>
          <div className="flex items-center gap-4 ">
            <figure className="">
              <Image
                src={manImage}
                className="h-16 w-16"
                height={300}
                width={300}
              />
            </figure>
            <div className="flex flex-col">
              <div className="font-bold">Mohamad Alam </div>
              <div className="text-sm text-muted">UI/UX Designer, India </div>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
}

function TestimonialFoot() {
  const [testmPageNum, setTestPageNum] = useState(1);
  const MAX_PAGE = 2;
  const MIN_PAGE = 1;
  function changeTestiPageNum(num) {
    console.log("dd", testmPageNum);
    if (num < MIN_PAGE) return setTestPageNum(MAX_PAGE);
    if (num > MAX_PAGE) return setTestPageNum(MIN_PAGE);

    setTestPageNum(num);
    console.log("dd", testmPageNum);
  }
  return (
    <>
      <div className="relative bg-[#303030] w-full py-36 grid place-items-center ">
        <figure>
          <Image
            className="absolute z-10 top-1/2 right-1/2 translate-x-1/2 translate-y-[-50%]"
            src={Pattern}
          />
        </figure>
        <div className="flex z-20 relative justify-around h-full items-center max-w-[1980px]  text-white">
          <button
            onClick={() => changeTestiPageNum(testmPageNum - 1)}
            className=" bg-gray-800 hover:bg-gray-800/50 p-8 text-3xl rounded-full text-white"
          >
            <ChevronLeft />
          </button>
          <div className="lg:mx-36">
            {testmPageNum === 1 && (
              <>
                <TestimonialFootCard key={1} />
              </>
            )}
            {testmPageNum === 2 && (
              <>
                <TestimonialFootCard key={2} />
              </>
            )}
          </div>
          <button
            onClick={() => changeTestiPageNum(testmPageNum + 1)}
            className=" bg-gray-800 hover:bg-gray-800/50 p-8 text-3xl rounded-full text-white"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </>
  );
}

const TestimonialFootCard = () => {
  return (
    <>
      <Transition
        appear={true}
        show={true}
        enter="transition-all duration-500"
        enterFrom=" opacity-0 translate-x-10"
        enterTo=" translate-x-0 opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="flex flex-col justify-center items-center">
          <figure>
            <Image
              src={manImage}
              className="h-40 w-40"
              height={300}
              width={300}
            />
          </figure>
          <h3 className="font-bold text-3xl mt-4">Atul Soni</h3>
          <h4>Analysist</h4>
          <figure className="flex gap-1 my-6">
            {[0, 0, 0, 0, 0].map(() => (
              <Image src={star} className="h-4 w-4" height={100} width={100} />
            ))}
          </figure>
          <p className="text-center max-w-md leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus dolorum exercitationem laborum quo ullam! Assumenda
            officia aspernatur vitae
          </p>
        </div>
      </Transition>
    </>
  );
};
