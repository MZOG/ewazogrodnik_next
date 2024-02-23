"use client";
import Logo from "/public/logo.svg";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navItems = [
  { name: "Start", href: "/" },
  { name: "My works", href: "/works" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between p-5"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/">
            <Image src={Logo} alt="Ewa Zogrodnik" width={50} />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-12">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-primary text-sm font-medium leading-6 hover:text-black"
            >
              {item.name}
            </Link>
          ))}
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        {/* mobile */}
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-rose-100 px-5 py-5 sm:inset-y-2 sm:max-w-sm sm:rounded-bl-xl sm:rounded-tl-xl sm:border sm:border-rose-300/70 ">
          <div className="flex items-center justify-between sm:justify-end">
            <Link href="/" className="sm:hidden">
              <Image src={Logo} alt="Ewa Zogrodnik" width={50} />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navItems.map((item, index) => (
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    key={index}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
