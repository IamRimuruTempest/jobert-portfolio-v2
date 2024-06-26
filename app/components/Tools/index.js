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
import {
  SiTailwindcss,
  SiVuetify,
  SiMysql,
  SiFirebase,
  SiDotnet,
} from "react-icons/si";
export default function Tools() {
  const skills = [
    { icon: FaJs, title: "JavaScript" },
    { icon: FaPhp, title: "Php" },
    { icon: FaLaravel, title: "Laravel" },
    { icon: FaVuejs, title: "VueJS" },
    { icon: FaReact, title: "React" },
    { icon: FaAngular, title: "Angular" },
    { icon: FaPython, title: "Python" },
    { icon: FaNodeJs, title: "NodeJS" },
    { icon: SiMysql, title: "MySql" },
    { icon: SiFirebase, title: "Firebase" },
    { icon: IoLogoIonic, title: "Ionic" },
    { icon: TbBrandCSharp, title: "CSharp" },
    { icon: SiTailwindcss, title: "Tailwind CSS" },
    { icon: FaBootstrap, title: "Bootstrap" },
    { icon: SiVuetify, title: "Vuetify" },
    { icon: FaHtml5, title: "Html" },
    { icon: FaCss3Alt, title: "Css" },
    { icon: FaSquareGithub, title: "Github" },
    { icon: FaSquareGitlab, title: "Gitlab" },
  ];
  //   const icons = [
  //     FaJs,
  //     FaPhp,
  //     FaLaravel,
  //     SiMysql,
  //     FaHtml5,
  //     FaCss3Alt,
  //     FaVuejs,
  //     FaReact,
  //     FaAngular,
  //     SiFirebase,
  //     FaPython,
  //     FaNodeJs,
  //     IoLogoIonic,
  //     TbBrandCSharp,
  //     SiTailwindcss,
  //     FaBootstrap,
  //     SiVuetify,
  //     FaSquareGithub,
  //     FaSquareGitlab,
  //   ];

  return (
    <>
      <div className="grid grid-cols-5 gap-4">
        {skills.map((skill) => (
          <div className="flex justify-center items-center flex-col hover:text-[#F0DB4F]">
            <skill.icon size="2.5em" />
            <p className="text-xs py-2">{skill.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}
