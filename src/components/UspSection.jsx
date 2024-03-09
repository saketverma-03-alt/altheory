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
      <p className=" text-center text-sm sm:text-md text-muted w-full px-4">
        With our business management software, you'll unlock the full potential
        of your business,
        <br /> streamline operations, and achieve sustainable growth. Experience
        the difference today.
      </p>
      {/*shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]  */}
      <div className="flex mt-24 ">
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          <div className="grid grid-cols-2 md:grid-cols-1  p-4  text-left">
            <button
              onClick={(e) => setSelected(0)}
              value={0}
              className={`${
                selected === 0 ? "text-primary shadow-bal" : ""
              } px-6 py-4 flex gap-2  text-left h-fit
               `}
            >
              <div className="h-12 w-12 grid place-items-center">
                <Lightbulb className="self-center " />
              </div>
              <span className="flex-1 block my-auto text-sm">
                Customizable Solutions
              </span>
            </button>
            <button
              onClick={(e) => setSelected(1)}
              value={0}
              className={`${
                selected === 1 ? "text-primary shadow-bal" : ""
              } px-6 py-4 flex gap-2  text-left h-fit  `}
            >
              <div className="h-12 w-12 grid place-items-center">
                <Lightbulb className="self-center " />
              </div>
              <span className="flex-1 block my-auto text-sm">
                Customizable Solutions
              </span>
            </button>
            <button
              onClick={(e) => setSelected(2)}
              value={2}
              className={`${
                selected === 2 ? "text-primary shadow-bal" : ""
              } px-6 py-4 flex gap-2  text-left  h-fit `}
            >
              <div className="h-12 w-12 grid place-items-center">
                <Lightbulb className="self-center " />
              </div>
              <span className="flex-1 block my-auto text-sm">
                Customizable Solutions
              </span>
            </button>
            <button
              onClick={(e) => setSelected(3)}
              value={0}
              className={`${
                selected === 3 ? "text-primary shadow-bal" : ""
              } px-6 py-4 flex gap-2  text-left  h-fit `}
            >
              <div className="h-12 w-12 grid place-items-center">
                <Lightbulb className="self-center " />
              </div>
              <span className="flex-1 block my-auto text-sm">
                Customizable Solutions
              </span>
            </button>
          </div>
          <div className="grid md:col-span-2 grid-cols-1 md:grid-cols-2  p-6 gap-20">
            {selected === 0 && <Usp1 />}
            {selected === 1 && <Usp1 />}
            {selected === 2 && <Usp1 />}
            {selected === 3 && <Usp1 />}
          </div>
        </div>
      </div>
    </>
  );
}

const Usp1 = () => {
  return (
    <>
      <Image src={MainImage} className="rounded-xl  object-cover md:mr-20" />
      <div className="flex justify-center flex-col">
        <figure
          className="rounded-full shadow-bal grid place-items-center p-6    border-gray-200 h-20 w-20 md:h-24 md:w-24
        "
        >
          <Image src={CustmSol} className="h-full w-full" />
        </figure>
        <p
          className="mt-8 mb-8 max-w-64 text-muted
        "
        >
          We understand that every business is unique. Our software can be fully
          customized to align with your specific workflows, processes, and
          industry requirements, ensuring optimal performance and productivity
        </p>

        <button className="btn-primary w-fit  text-white rounded-xl   px-6">
          Explor Now
        </button>
      </div>
    </>
  );
};
