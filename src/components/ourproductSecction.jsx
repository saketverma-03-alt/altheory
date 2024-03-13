import ProdSecImaeg from "@public/product-main.png";
import ProdSecIcon1 from "@public/prod-sec-icon-1.svg";
import ProdSecIcon2 from "@public/prod-sec-icon-2.png";
import ProdSecIcon3 from "@public/prod-sec-icon-3.png";

import Image from "next/image";
import { useState } from "react";
import { Transition } from "@headlessui/react";
export function OurProductSection() {
  const [selectedIdx,setSelectedIdx] = useState(1)
  return (
    <>
      <figure className="md:hidden ">
        <Image alt="product marketing image" src={ProdSecImaeg} />
      </figure>
      <div className="mr-6">
        <div className="mb-2 text-xl  font-semibold ">OUR PRODUCTS</div>

        <h3 className="mb-6 sm:leading-normal text-4xl sm:text-5xl font-extrabold">
          {" "}
          Elevate Your Lifestyle With Our Premium{" "}
          <span className="text-primary">Products</span>
        </h3>
        <div className="space-y-2  max-w-lg mb-8 ">
          <div onClick={() => setSelectedIdx(1)} className="flex gap-4 transition-color duration-200  hover:bg-primary group items-center p-4 rounded-xl shadow-sm">
            <figure className="bg-gray-200 rounded-full p-3 h-fit w-fit">
              <Image alt="icon" src={ProdSecIcon1} />
            </figure>
            <div className="flex-1 group-hover:text-white">
              <h3 className="text-2xl font-semibold ">Onbordme</h3>
              <p className="text-muted text-sm group-hover:text-white/90 ">
                Lorem Ipsum has been the industry standard from a dummy text
                ever since the unknown printer to galley of type book.{" "}
              </p>
            </div>
          </div>
          <div  onClick={() => setSelectedIdx(2)}className="flex gap-4 transition-color duration-200 hover:bg-primary group items-center p-4 rounded-xl shadow-sm">
            <figure className="bg-gray-200 rounded-full p-3 h-fit w-fit">
              <Image alt="icon" src={ProdSecIcon2} />
            </figure>
            <div className="flex-1 group-hover:text-white">
              <h3 className="text-2xl font-semibold ">Cluster HRMS</h3>
              <p className="text-muted  text-sm group-hover:text-white/90">
                Lorem Ipsum has been the industry standard from a dummy text
                ever since the unknown printer to galley of type book.{" "}
              </p>
            </div>
          </div>
          <div  onClick={() => setSelectedIdx(3)}className="flex gap-4 transition-color duration-200 hover:bg-primary group items-center p-4 rounded-xl shadow-sm">
            <figure className="bg-gray-200 rounded-full p-3 h-fit w-fit">
              <Image alt="icon" src={ProdSecIcon3} />
            </figure>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold group-hover:text-white ">Facility Management</h3>
              <p className="text-muted  text-sm group-hover:text-white/90">
                Lorem Ipsum has been the industry standard from a dummy text
                ever since the unknown printer to galley of type book.{" "}
              </p>
            </div>
          </div>
        </div>

        <button className="btn-primary p-4 text-white font-bold">
          Discover More
        </button>
      </div>
      <figure className="hidden md:block">
        {selectedIdx === 1 && 
        <Transition 
              appear={true}
                show={true}
                enter="transition-all duration-500"
                enterFrom="opacity-0 scale-90 "
                enterTo="opacity-100 "
                leave="transition-opacity duration-200"
                leaveFrom="opacity-100 "
                leaveTo="opacity-0 scale-90  "
        >

        <Image alt="product image" src={ProdSecImaeg} />
        </Transition>
}
 { selectedIdx === 2   &&    <Transition 
              appear={true}
                show={true}
                
                enter="transition-all duration-500"
                enterFrom="opacity-0 scale-90 "
                enterTo="opacity-100 "
                leave="transition-opacity duration-75"
                leaveFrom="opacity-100 "
                leaveTo="opacity-0   "
        >

        <Image alt="product image" src={ProdSecImaeg} />
        </Transition>
 }
  { selectedIdx === 3   &&    <Transition 
              appear={true}
                show={true}
                
                enter="transition-all duration-500"
                enterFrom="opacity-0 scale-90 "
                enterTo="opacity-100 "
                leave="transition-opacity duration-75"
                leaveFrom="opacity-100 "
                leaveTo="opacity-0   "
        >

        <Image alt="product image" src={ProdSecImaeg} />
        </Transition>
 }
    
       

      </figure>
    </>
  );
}
