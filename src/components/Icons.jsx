import { FaInstagram, FaGithub, FaMedium, FaLinkedin, FaGolang } from "react-icons/fa6";
import { FaPython, FaJs, FaPhp, FaJava } from 'react-icons/fa';
import { SiTypescript, SiRust } from 'react-icons/si';
import { TbBrandCpp } from "react-icons/tb";

// icons.github.io/react-icons/

const icons = {
  // social media
  github: FaGithub,
  ig: FaInstagram,
  medium: FaMedium,
  linkedin: FaLinkedin,

  // programming languages
  python: FaPython,
  js: FaJs,
  javascript: FaJs,
  php: FaPhp,
  typescript: SiTypescript,
  rust: SiRust,
  "c++": TbBrandCpp,
  go: FaGolang,
  java: FaJava,
}



export default function Icons({iconName, className}){
  const Icon = icons[iconName.toLowerCase()];

  return (
    <>
      <Icon className={className} />
    </>
  )
}
