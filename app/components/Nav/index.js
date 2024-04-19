"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import ScrollSpy from "react-scrollspy-navigation";

export default function Navbar() {
  const links = [
    { path: "skills", label: "skills" },
    { path: "experience", label: "experience" },
    { path: "projects", label: "projects" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 inset-x-0 grid py-2 w-full z-50 h-32  bg-[#0f172a]">
        <ScrollSpy activeClass="text-[#F0DB4F]">
          <nav className="flex justify-between items-center max-container">
            <a href="/" className="py-1 font-semibold text-[#F0DB4F]">
              {`< jobertadviento.webdev />`}
            </a>

            <ul className="flex-1 flex justify-end items-center gap-16 max-lg:hidden">
              {links.map((link, index) => (
                <li key={index} className="nav__item">
                  <a
                    className="nav__link font-medium transition-all hover:text-[#F0DB4F] sm:py-6 "
                    href={`#${link.path}`}
                    key={index}
                    aria-current="page"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div
              className="hidden max-lg:block cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <RxHamburgerMenu className="text-xl" />
            </div>
          </nav>
        </ScrollSpy>
      </header>

      {isMenuOpen && (
        <div>
          <ScrollSpy activeClass="text-[#F0DB4F]">
            <nav className="fixed top-0 right-0 left-0 bottom-0 z-50 lg:bottom-auto bg-[#0f172a]  ">
              <div
                className="hidden max-lg:block fixed right-0  px-6 py-14 cursor-pointer"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                <AiOutlineClose className="text-xl" />
              </div>
              <ul className=" lg:hidden flex flex-col items-center justify-center h-full gap-8">
                <a href="/" className="py-1 font-semibold text-[#F0DB4F]">
                  {`< jobertadviento.webdev />`}
                </a>
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      class="font-medium transition-all hover:text-[#F0DB4F] sm:py-6 "
                      href={`#${link.path}`}
                      key={index}
                      aria-current="page"
                      onClick={() => {
                        setIsMenuOpen(!isMenuOpen);
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </ScrollSpy>
        </div>
      )}
    </>
  );
}
