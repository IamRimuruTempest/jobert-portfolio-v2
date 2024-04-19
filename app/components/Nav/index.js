"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const links = [
    { path: "#skills", label: "skills" },
    { path: "#experience", label: "experience" },
    { path: "#projects", label: "projects" },
  ];

  // const [menuOpen, setMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setMenuOpen(!menuOpen);
  // };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 inset-x-0 grid py-2 w-full z-50 h-32  bg-[#0f172a]">
        <nav className="flex justify-between items-center max-container">
          <a href="/" className="py-1 font-semibold text-[#F0DB4F]">
            jobert.webdev
          </a>
          <ul className="flex-1 flex justify-end items-center gap-16 max-lg:hidden">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  class="font-medium transition-all hover:text-[#F0DB4F] sm:py-6 "
                  href={link.path}
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
      </header>

      {isMenuOpen && (
        <div>
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
                    href={link.path}
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
        </div>
      )}
    </>

    // <aside className="tracking-tight">
    //   <div class="hidden lg:sticky lg:top-20">
    //     <nav
    //       class="flex flex-row justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
    //       id="nav"
    //     >
    //       <div>
    //         <p className="py-1 px-2 font-semibold text-[#F0DB4F]">
    //           jobert.webdev
    //         </p>
    //       </div>
    //       <div class="flex flex-row space-x-0">
    //         {links.map((link, index) => (
    //           <a
    //             class="transition-all hover:text-[#F0DB4F] hover:font-semibold flex align-middle relative py-1 px-2"
    //             href={link.path}
    //             key={index}
    //           >
    //             {link.label}
    //           </a>
    //         ))}
    //       </div>
    //     </nav>
    //   </div>

    //   <div
    //     id="newsletter-banner"
    //     tabindex="-1"
    //     class="fixed top-50 lg:top-0  z-50 max-w-2xl lg:h-36 lg:w-full  flex flex-col md:flex-row lg:mx-auto items-center  border-b border-gray-200 "
    //   >
    //     <nav
    //       class="flex flex-row justify-between w-full relative px-0  pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
    //       id="nav"
    //     >
    //       <div>
    //         <p className="py-1 px-2 font-semibold text-[#F0DB4F]">
    //           jobert.webdev
    //         </p>
    //       </div>
    //       <div class="flex flex-row space-x-0">
    //         {links.map((link, index) => (
    //           <a
    //             class="transition-all hover:text-[#F0DB4F] hover:font-semibold flex align-middle relative py-1 px-2"
    //             href={link.path}
    //             key={index}
    //           >
    //             {link.label}
    //           </a>
    //         ))}
    //       </div>
    //     </nav>
    //   </div>
    // </aside>
    // <header class="sticky top-0 inset-x-0 flex flex-wrap   z-50 w-full h-20  bg-[#0f172a]  mb-10  sm:py-0">
    //   <nav
    //     class="relative max-w-[85rem]  w-full mx-auto  flex items-center justify-between gap-0"
    //     aria-label="Global"
    //   >
    //     <div class="flex items-center justify-between">
    //       <a href="/" className="py-1 font-semibold text-[#F0DB4F]">
    //         jobert.webdev
    //       </a>
    //     </div>

    //     <div class="flex flex-row gap-y-4  items-center justify-end  gap-x-5 sm:mt-0 sm:ps-7">
    //       {links.map((link, index) => (
    //         // <a
    //         //   class="transition-all hover:text-[#F0DB4F] hover:font-semibold flex align-middle relative py-1 px-2"
    //         //   href={link.path}
    //         //   key={index}
    //         // >
    //         //   {link.label}
    //         // </a>
    //         <a
    //           class="font-medium transition-all hover:text-[#F0DB4F] sm:py-6 "
    //           href={link.path}
    //           key={index}
    //           aria-current="page"
    //         >
    //           {link.label}
    //         </a>
    //       ))}
    //     </div>
    //   </nav>
    // </header>

    // <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-4">
    //   <nav
    //     className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
    //     aria-label="Global"
    //   >
    //     <div className="flex items-center justify-between">
    //       <a className="flex-none text-xl font-semibold" href="#">
    //         Brand
    //       </a>
    //       <div className="sm:hidden">
    //         <button
    //           onClick={toggleMenu}
    //           type="button"
    //           className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
    //           aria-label="Toggle navigation"
    //         >
    //           <svg
    //             className={
    //               menuOpen
    //                 ? "hidden"
    //                 : "hs-collapse-open:hidden flex-shrink-0 size-4"
    //             }
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="24"
    //             height="24"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             stroke="currentColor"
    //             strokeWidth="2"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //           >
    //             <line x1="3" x2="21" y1="6" y2="6" />
    //             <line x1="3" x2="21" y1="12" y2="12" />
    //             <line x1="3" x2="21" y1="18" y2="18" />
    //           </svg>
    //           <svg
    //             className={
    //               menuOpen
    //                 ? "hs-collapse-open:block hidden flex-shrink-0 size-4"
    //                 : "hidden"
    //             }
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="24"
    //             height="24"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             stroke="currentColor"
    //             strokeWidth="2"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //           >
    //             <path d="M18 6 6 18" />
    //             <path d="m6 6 12 12" />
    //           </svg>
    //         </button>
    //       </div>
    //     </div>
    //     <div
    //       className={`hs-collapse ${
    //         menuOpen ? "" : "hidden"
    //       } overflow-hidden transition-all duration-300 basis-full grow sm:block`}
    //     >
    //       <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
    //         <a
    //           className="font-medium text-blue-500"
    //           href="#"
    //           aria-current="page"
    //         >
    //           Landing
    //         </a>
    //         <a
    //           className="font-medium text-gray-600 hover:text-gray-400"
    //           href="#"
    //         >
    //           Account
    //         </a>
    //         <a
    //           className="font-medium text-gray-600 hover:text-gray-400"
    //           href="#"
    //         >
    //           Work
    //         </a>
    //         <a
    //           className="font-medium text-gray-600 hover:text-gray-400"
    //           href="#"
    //         >
    //           Blog
    //         </a>
    //       </div>
    //     </div>
    //   </nav>
    // </header>
  );
}
