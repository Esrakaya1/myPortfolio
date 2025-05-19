// import logo from "../assets/EK-logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center ">
        {/* <img src={logo} alt="logo" className="mx w-20 h-20" /> */}
        <a href="#" rel="noopener noreferrer">
          <div className="text-4xl ml-2">EK.</div>
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-4xl">
        <a
          href="https://www.linkedin.com/in/esraa-kaya/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="hover:text-purple-400 transition-colors duration-300" />
        </a>
        <a
          href="https://github.com/Esrakaya1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="hover:text-purple-400 transition-colors duration-300" />
        </a>
        <a
          href="https://leetcode.com/u/kyesra7/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLeetcode className="hover:text-purple-400 transition-colors duration-300" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
