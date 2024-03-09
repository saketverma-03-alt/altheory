import ProdSecImaeg from "@public/product-main.png";
import ProdSecIcon1 from "@public/prod-sec-icon-1.svg";
import ProdSecIcon2 from "@public/prod-sec-icon-2.png";
import ProdSecIcon3 from "@public/prod-sec-icon-3.png";

import Image from "next/image";
export function OurProductSection() {
  return (
    <>
      <figure className="md:hidden ">
        <Image src={ProdSecImaeg} />
      </figure>
      <div className="mr-6">
        <div className="mb-2 text-md font-bold ">Our Product</div>

        <h3 className="mb-6 leading-snug text-4xl font-bold">
          {" "}
          Elevate Your Lifestyle With Our Premium{" "}
          <span className="text-primary">Products</span>
        </h3>
        <div className="space-y-2 max-w-lg mb-8">
          <div className="flex gap-4 items-center p-4 rounded-xl shadow-sm">
            <figure className="bg-gray-200 rounded-full p-3 h-fit w-fit">
              <Image src={ProdSecIcon1} />
            </figure>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold ">Onbordme</h3>
              <p className="text-muted text-sm ">
                Lorem Ipsum has been the industry standard from a dummy text
                ever since the unknown printer to galley of type book.{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center p-4 rounded-xl shadow-sm">
            <figure className="bg-gray-200 rounded-full p-3 h-fit w-fit">
              <Image src={ProdSecIcon2} />
            </figure>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold ">Cluster HRMS</h3>
              <p className="text-muted  text-sm">
                Lorem Ipsum has been the industry standard from a dummy text
                ever since the unknown printer to galley of type book.{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center p-4 rounded-xl shadow-sm">
            <figure className="bg-gray-200 rounded-full p-3 h-fit w-fit">
              <Image src={ProdSecIcon3} />
            </figure>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold ">Facility Management</h3>
              <p className="text-muted  text-sm">
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
        <Image src={ProdSecImaeg} />
      </figure>
    </>
  );
}
