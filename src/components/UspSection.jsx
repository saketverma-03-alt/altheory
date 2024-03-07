import Image from "next/image";
import { useState } from "react";
import ExpSup from "@public/usp-1.svg";
import Insight from "@public/usp-2.svg";
import StreamLineInt from "@public/usp-3.svg";
import CustmSol from "@public/usp-4.svg";
import MainImage from "@public/usp-main.png";
import { Lightbulb } from "lucide-react";

export function UsepSectin() {
  const [selected, setSelected] = useState(0);
  return (
    <>
      <div className="mx-auto mb-2  text-4xl font-bold">
        Product <span className="text-primary ">USP</span>
      </div>
      <p className="max-w-3xl text-center text-muted">
        With our business management software, you'll unlock the full potential
        of your business,
        <br /> streamline operations, and achieve sustainable growth. Experience
        the difference today.
      </p>
      <div className="flex mt-24 ">
        <div className="grid grid-cols-3 h-full ">
          <div
            className="flex items-center
          flex-col gap-8 my-auto"
          >
            <button
              onClick={(e) => setSelected(0)}
              value={0}
              className={`${
                selected === 0 ? "text-primary shadow-xl" : ""
              } "px-6 py-4 flex gap-4  " `}
            >
              <Lightbulb />
              <span className=" flex items-center">Customizable Solutions</span>
            </button>
            <button
              onClick={(e) => setSelected(1)}
              value={0}
              className={`${
                selected === 1 ? "text-primary shadow-xl" : ""
              } "px-6 py-4 flex gap-4  " `}
            >
              <Lightbulb />
              <span className=" flex items-center">Customizable Solutions</span>
            </button>
          </div>
          <div className="grid col-span-2 grid-cols-2 gap-20">
            {selected === 0 && <Usp1 />}
          </div>
        </div>
      </div>
    </>
  );
}

const Usp1 = () => {
  return (
    <>
      <Image src={MainImage} className="rounded-xl  object-cover mr-20" />
      <div className="flex justify-center flex-col">
        <figure
          className="rounded-full shadow-xl grid place-items-center p-6   border border-gray-200 h-24 w-24
        "
        >
          <Image src={CustmSol} className="h-full w-full" />
        </figure>
        <p
          className="mt-10 mb-8 max-w-64
        "
        >
          We understand that every business is unique. Our software can be fully
          customized to align with your specific workflows, processes, and
          industry requirements, ensuring optimal performance and productivity
        </p>

        <button className=" w-fit bg-primary text-white rounded-xl hover:bg-primary/50  px-6">
          Explor Now
        </button>
      </div>
    </>
  );
};
