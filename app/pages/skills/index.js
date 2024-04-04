import {
  FaHtml5,
  FaJs,
  FaLaravel,
  FaCss3Alt,
  FaVuejs,
  FaNodeJs,
  FaSquareGithub,
  FaSquareGitlab,
  FaReact,
  FaAngular,
  FaPhp,
  FaPython,
  FaBootstrap,
} from "react-icons/fa6";
import { TbBrandCSharp } from "react-icons/tb";
import { IoLogoIonic } from "react-icons/io";
import { SiTailwindcss, SiVuetify, SiMysql } from "react-icons/si";
import Tools from "@/app/components/Tools";
export default function Skills() {
  const icons = [FaHtml5, FaJs, FaLaravel, FaPhp];
  return (
    <section id="skills" className="py-12">
      <h2 class="font-semibold text-base mb-4 uppercase">Technical Skills</h2>

      <Tools />
    </section>
  );
}
