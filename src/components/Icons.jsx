import { FaInstagram, FaGithub, FaMedium, FaLinkedin } from "react-icons/fa6";
import { FaPython, FaJs, FaPhp } from 'react-icons/fa';
import { SiTypescript, SiRust } from 'react-icons/si';


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

}



export default function Icons({iconName, className}){
  const Icon = icons[iconName.toLowerCase()];

  return (
    <>
      <Icon className={className} />
    </>
  )
}
