import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ navPages }: { navPages: Array<Page> }) {
  const navigation = navPages;
  /* [
        { name: "Dashboard", href: "#", current: true },
        { name: "Team", href: "#", current: false },
        { name: "Projects", href: "#", current: false },
        { name: "Calendar", href: "#", current: false },
      ]; */
  return (
    <Disclosure as="nav" className="bg-gray-800 absolute inset-x-0 top-0">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Menü megnyitása</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src={logo}
                    alt="TheOld - Crafters"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src={logo}
                    alt="TheOld - Crafters"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.title}
                        to={item.path}
                        className={classNames(
                          item.isDropdown
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.isDropdown ? "page" : undefined}
                      >
                        {item.title}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            {({ close }) => (
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <NavLink
                    key={item.title}
                    to={item.path}
                    className={classNames(
                      item.isDropdown
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.isDropdown ? "page" : undefined}
                    onClick={() => close()}
                  >
                    {item.title}
                  </NavLink>
                ))}
              </div>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
