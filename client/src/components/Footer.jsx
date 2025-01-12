import { assets } from "../assets/assets";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-4 py-3 mt-20">
      <img src={assets.logo} width={150} alt="" />
      <p className="flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:border-hidden">
        Copyright @Mihir_Jain | All right reserved.{" "}
      </p>

      <div className="flex gap-3">
        {/* <img src={assets.facebook_icon} width={35} alt="" /> */}
        <FaFacebook className="w-8 h-8" />
        {/* <img src={assets.instagram_icon} width={35} alt="" /> */}
        <FaLinkedin className="w-8 h-8" />
        <FaGithub className="w-8 h-8" />
        <FaInstagram className="w-8 h-8" />

        {/* <img src={assets.github} width={35} alt="" /> */}
      </div>
    </div>
  );
};

export default Footer;
