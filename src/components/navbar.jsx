import Image from "next/image";
import logo from "@public/logo.svg";

import { Disclosure } from "@headlessui/react";

import { useEffect } from "react";
import { List, MenuButton } from "react-bootstrap-icons";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "home", current: false },
  { name: "About", href: "about", current: false },
  { name: "Products", href: "products", current: false },
  { name: "Careers", href: "career", current: false },
  { name: "Contact", href: "contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Nav = ({ activeTabId }) => {
  useEffect(() => {
    console.log("tab", activeTabId);
  }, [activeTabId]);
  return (
    <Disclosure
      as="nav"
      className="sticky top-0 backdrop-blur-lg z-[999] bg-white/50 w-full"
    >
      {({ open }) => (
        <>
          <div className="relative  w-full  flex justify-center   px-2 sm:px-6 lg:px-24 shadow-xl shadow-orange-300/20 z-[999] ">
            <div className="max-w-[1980px] w-full grid ">
              <div className="relative flex  items-center justify-center">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md  text-gray-400 hover:bg-primary/30 hover: focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    <List />
                  </Disclosure.Button>
                </div>
                <div className="ml-14 justify-self-center self-center relative mx-auto md:mx-0 ">
                  <Link href={"/"}>
                    <Image
                      src={logo}
                      alt="altheory logo"
                      height={56}
                      width={200}
                      className="my-4 h-10 md:h-14 w-28 md:w-52"
                    />
                  </Link>
                </div>
                <div className="flex flex-1  items-center justify-center sm:justify-start">
                  <div className="hidden  sm:block sm:mx-auto">
                    <div className="flex gap-4 ">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={
                            (item.href === "career" ? "/" : "/#") + item.href
                          }
                          className={classNames(
                            item.current
                              ? " "
                              : " hover:border-b-primary border-b-4 transition-colors  hover:",
                            "" + activeTabId === item.href
                              ? "border-b-primary "
                              : " border-b-transparent",
                            " px-3 py-2 text-md lg:text-xl font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    className="relative rounded-full  p-1 text-gray-400 hover: focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                  </button>

                  <button
                    as="div"
                    className="bg-primary text-md btn-primary px-6  lg:px-12 py-3 text-white"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? " " : " hover:bg-primary/30 hover:",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
