"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function Navbar() {
  const links = [
    { path: "#skills", label: "skills" },
    { path: "#experience", label: "experience" },
    { path: "#projects", label: "projects" },
  ];

  return (
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
    <header class="sticky top-0 inset-x-0 flex flex-wrap   z-50 w-full h-20  bg-[#0f172a]  mb-10  sm:py-0">
      <nav
        class="relative max-w-[85rem]  w-full mx-auto  flex items-center justify-between gap-0"
        aria-label="Global"
      >
        <div class="flex items-center justify-between">
          <a href="/" className="py-1 font-semibold text-[#F0DB4F]">
            jobert.webdev
          </a>
        </div>

        <div class="flex flex-row gap-y-4  items-center justify-end  gap-x-5 sm:mt-0 sm:ps-7">
          {links.map((link, index) => (
            // <a
            //   class="transition-all hover:text-[#F0DB4F] hover:font-semibold flex align-middle relative py-1 px-2"
            //   href={link.path}
            //   key={index}
            // >
            //   {link.label}
            // </a>
            <a
              class="font-medium transition-all hover:text-[#F0DB4F] sm:py-6 "
              href={link.path}
              key={index}
              aria-current="page"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
