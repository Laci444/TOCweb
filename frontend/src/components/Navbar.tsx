import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { Fragment } from "react";

function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ navPages }: { navPages: Array<Page> }) {
  return (
    <Disclosure as="nav" className="bg-gray-800 absolute inset-x-0 top-0 z-10">
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
                    <NavLink
                      key="HOME-pc"
                      to="/"
                      className={({isActive}) => classNames(
                        isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                         'rounded-md px-3 py-2 text-base font-medium'
                       )}
                      onClick={() => close()}
                    >
                      Főoldal
                    </NavLink>
                    <NavLink
                      key="SHOP-pc"
                      to="https://bolt.oldcrafters.net"
                      className={({isActive}) => classNames(
                        isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                         'rounded-md px-3 py-2 text-base font-medium'
                       )}
                      onClick={() => close()}
                    >
                      Bolt
                    </NavLink>
                    <div className="w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-20 dark:opacity-100"></div>
                    {navPages
                      .filter((x) => !x.isDropdown)
                      .map((item) => (
                        <NavLink
                          key={item.title + "-pc"}
                          to={item.path}
                          className={({isActive}) => classNames(
                            isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                             'rounded-md px-3 py-2 text-base font-medium'
                           )}
                          aria-current={item.isDropdown ? "page" : undefined}
                        >
                          {item.title}
                        </NavLink>
                      ))}
                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                        <Menu.Button className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium h-full">
                          <span className="sr-only">
                            Lenyíló menü megnyitása
                          </span>
                          Egyéb
                        </Menu.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute left-0 z-10 mt-2 w-48 origin-top-left rounded-md bg-gray-700 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {navPages
                            .filter((x) => x.isDropdown)
                            .map((item) => (
                              <Menu.Item key={item.title + "-menu-pc"}>
                                {({ active }) => (
                                  <NavLink
                                    to={item.path}
                                    className={classNames(
                                      active ? "bg-gray-800" : "",
                                      "block px-4 py-2 text-sm text-gray-300"
                                    )}
                                  >
                                    {item.title}
                                  </NavLink>
                                )}
                              </Menu.Item>
                            ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            {({ close }) => (
              <div className="space-y-1 px-2 pb-3 pt-2 grid ">
                <NavLink
                      key="HOME-mobile"
                      to="/"
                      className={({isActive}) => classNames(
                        isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                         'rounded-md px-3 py-2 text-base font-medium'
                       )}
                      onClick={() => close()}
                    >
                      Főoldal
                    </NavLink>
                    <NavLink
                      key="SHOP-mobile"
                      to="https://bolt.oldcrafters.net"
                      className={({isActive}) => classNames(
                        isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                         'rounded-md px-3 py-2 text-base font-medium'
                       )}
                      onClick={() => close()}
                    >
                      Bolt
                    </NavLink>
                    <div className="w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-20 dark:opacity-100"></div>
                    {navPages
                      .filter((x) => !x.isDropdown)
                      .map((item) => (
                        <NavLink
                          key={item.title + "-mobile"}
                          to={item.path}
                          className={({isActive}) => classNames(
                            isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                             'rounded-md px-3 py-2 text-base font-medium'
                           )}
                          aria-current={item.isDropdown ? "page" : undefined}
                          onClick={() => close()}
                        >
                          {item.title}
                        </NavLink>
                      ))}
                      <Menu as="div" className="relative">
                        <Menu.Button className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium h-full w-full text-start">
                          <span className="sr-only">
                            Lenyíló menü megnyitása
                          </span>
                          Egyéb
                        </Menu.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute left-0 z-10 mt-2 w-48 origin-top-left rounded-md bg-gray-700 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {navPages
                            .filter((x) => x.isDropdown)
                            .map((item) => (
                              <Menu.Item>
                                {({ active }) => (
                                  <NavLink
                                    key={item.title + "-menu-mobile"}
                                    to={item.path}
                                    className={classNames(
                                      active ? "bg-gray-800" : "",
                                      "block px-4 py-2 text-sm text-gray-300"
                                    )}
                                    onClick={() => close()}
                                  >
                                    {item.title}
                                  </NavLink>
                                )}
                              </Menu.Item>
                            ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
              </div>
              
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
