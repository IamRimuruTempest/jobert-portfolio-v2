import Link from "next/link";

export default function Navbar() {
  const links = [
    { path: "#skills", label: "skills" },
    { path: "#experience", label: "experience" },
    { path: "#projects", label: "projects" },
  ];
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div class="lg:sticky lg:top-20">
        <nav
          class="flex flex-row justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div>
            <p className="py-1 px-2 font-semibold text-[#F0DB4F]">
              jobert.webdev
            </p>
          </div>
          <div class="flex flex-row space-x-0">
            {links.map((link, index) => (
              <a
                class="transition-all hover:text-[#F0DB4F] hover:font-semibold flex align-middle relative py-1 px-2"
                href={link.path}
                key={index}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </aside>
  );
}
