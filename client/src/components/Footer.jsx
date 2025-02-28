import { FaCode } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-4 py-3 mt-20">
      {/* <img src={assets.logo} width={150} alt="" /> */}
      <h1 className="font-medium text-xl  rounded-lg text-white bg-blue-600 px-4 py-2 sm:text-2xl sm:font-semibold">
        PicScribe
      </h1>
      <p className="flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:border-hidden">
        Copyright @Mihir_Jain | All right reserved.{" "}
      </p>

      <div className="flex gap-3">
        {/* <img src={assets.facebook_icon} width={35} alt="" /> */}

        <Link to="https://leetcode.com/u/imihirjain/" target="blank">
          <FaCode className="size-6" />
        </Link>
        <Link to="https://github.com/imihirjain" target="blank">
          <FaGithub className="size-6" />
        </Link>
        <Link
          to="http://www.linkedin.com/in/mihir-jain-583633213"
          target="blank"
        >
          <FaLinkedin className="size-6" />
        </Link>
        {/* <img src={assets.instagram_icon} width={35} alt="" /> */}
        <Link to="https://www.instagram.com/imihirjain/" target="blank">
          <FaInstagram className="size-6" />
        </Link>

        {/* <img src={assets.github} width={35} alt="" /> */}
      </div>
    </div>
  );
};

export default Footer;
