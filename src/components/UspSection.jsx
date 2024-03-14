import Image from "next/image";
import { useState } from "react";
import ExpSup from "@public/usp-1.svg";
import Insight from "@public/usp-2.svg";
import StreamLineInt from "@public/usp-3.svg";
import CustmSol from "@public/usp-4.svg";
import MainImage from "@public/usp-main.png";
// import { Lightbulb } from "lucide-react";
import { Transition } from "@headlessui/react";
import { Lightbulb } from "react-bootstrap-icons";

export function UsepSectin() {
  const [selected, setSelected] = useState(0);
  return (
    <>
      <div className="mx-auto mb-2  text-6xl font-extrabold px-6">
        Product <span className="text-primary ">USP</span>
      </div>
      <p className=" md:text-center text-md tracking-wider sm:text-md text-muted w-full px-6">
        With our business management software, you'll unlock the full potential
        of your business,
        <br /> streamline operations, and achieve sustainable growth. Experience
        the difference today.
      </p>
      <div className="flex mt-24 max-w-[1980px] lg:px-36 justify-center items-center">
        <div className="grid grid-cols-1 place-items-center lg:grid-cols-3 p-4 ">
          <div className="grid grid-cols-2 lg:grid-cols-1 w-fit h-fit   text-left">
            <button
              onClick={(e) => setSelected(0)}
              value={0}
              className={`${
                selected === 0
                  ? "text-primary shadow-bal bg-white"
                  : "opacity-80"
              } w-fit px-8 py-6 flex gap-6  text-left  h-fit font-[400] text-xl`}
            >
              <div className="grid place-items-center">
                <Lightbulb className="self-center " />
              </div>
              <span className="flex-1 block  ">Customizable Solutions</span>
            </button>
            <button
              onClick={(e) => setSelected(1)}
              value={0}
              className={`${
                selected === 1
                  ? "text-primary shadow-bal bg-white"
                  : "opacity-80"
              } w-fit px-8 py-6 flex gap-6  text-left  h-fit font-[400] text-xl`}
            >
              <div className="grid place-items-center">
                <Lightbulb className="self-center " />
              </div>
              <span className="flex-1 block  ">Customizable Solutions</span>
            </button>
            <button
              onClick={(e) => setSelected(2)}
              value={2}
              className={`${
                selected === 2
                  ? "text-primary shadow-bal bg-white"
                  : "opacity-80"
              } w-fit px-8 py-6 flex gap-6  text-left  h-fit font-[400] text-xl`}
            >
              <div className="grid place-items-center">
                <Lightbulb className="self-center " />
              </div>
              <span className="flex-1 block  ">Customizable Solutions</span>
            </button>
            <button
              onClick={(e) => setSelected(3)}
              value={0}
              className={`${
                selected === 3
                  ? "text-primary shadow-bal bg-white"
                  : "opacity-80"
              } w-fit px-8 py-6 flex gap-6  text-left  h-fit font-[400] text-xl`}
            >
              <div className="grid place-items-center">
                <Lightbulb className="self-center " />
              </div>
              <span className="flex-1 block  ">Customizable Solutions</span>
            </button>
          </div>
          <div className=" p-6 col-span-2 ">
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
      <Transition
        appear={true}
        show={true}
        as="div"
        className={"grid lg:grid-cols-2 gap-14  w-full"}
        enter="transition-all duration-500"
        enterFrom="opacity-0 scale-90 "
        enterTo="opacity-100 "
        leave="transition-opacity duration-200"
        leaveFrom="opacity-100 "
        leaveTo="opacity-0 scale-90  "
      >
        <Image
          alt="product usp"
          src={MainImage}
          className="rounded-xl  object-cover lg:mr-20"
        />
        <div className="flex justify-center flex-col">
          <figure
            className="rounded-full bg-white shadow-bal grid place-items-center p-6    border-gray-200 h-20 w-20 md:h-24 md:w-24
        "
          >
            <Image alt="icon" src={CustmSol} className="h-full w-full" />
          </figure>
          <p
            className="mt-8 mb-8 max-w-80 text-xl text-muted
        "
          >
            We understand that every business is unique. Our software can be
            fully customized to align with your specific workflows, processes,
            and industry requirements, ensuring optimal performance and
            productivity
          </p>

          <button className="btn-primary w-fit font-bold py-4  text-white rounded-xl   px-6">
            Explor Now
          </button>
        </div>
      </Transition>
    </>
  );
};
