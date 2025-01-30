import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <section className="flex flex-col justify-center items-center pt-20 gap-11 max-w-7xl mx-auto pb-8">
      <h2 className="text-6xl font-poppins font-semibold text-yellow-400">
        Firdaus K.
      </h2>
      <p className="text-lg text-center font-poppins leading-loose text-gray-500 w-2/3">
        Empowering innovation through technology. All rights reserved.
      </p>
      <div className="flex justify-center items-center gap-3">
        <div className="flex justify-center items-center group bg-slate-300 rounded-full w-12 h-12 cursor-pointer hover:bg-yellow-300 transition-colors duration-300 ease-in-out">
          <FontAwesomeIcon
            icon={faFacebookF}
            className="text-gray-500 text-base group-hover:text-white cursor-pointer transition-colors duration-300 ease-in-out"
          />
        </div>
        <div className="flex justify-center items-center group bg-slate-300 rounded-full w-12 h-12 cursor-pointer hover:bg-yellow-300 transition-colors duration-300 ease-in-out">
          <FontAwesomeIcon
            icon={faTwitter}
            className="text-gray-500 text-base group-hover:text-white cursor-pointer transition-colors duration-300 ease-in-out"
          />
        </div>
        <div className="flex justify-center items-center group bg-slate-300 rounded-full w-12 h-12 cursor-pointer hover:bg-yellow-300 transition-colors duration-300 ease-in-out">
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className="text-gray-500 text-base group-hover:text-white cursor-pointer transition-colors duration-300 ease-in-out"
          />
        </div>
        <div className="flex justify-center items-center group bg-slate-300 rounded-full w-12 h-12 cursor-pointer hover:bg-yellow-300 transition-colors duration-300 ease-in-out">
          <FontAwesomeIcon
            icon={faGithub}
            className="text-gray-500 text-base group-hover:text-white cursor-pointer transition-colors duration-300 ease-in-out"
          />
        </div>
        <div className="flex justify-center items-center group bg-slate-300 rounded-full w-12 h-12 cursor-pointer hover:bg-yellow-300 transition-colors duration-300 ease-in-out">
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-gray-500 text-base group-hover:text-white cursor-pointer transition-colors duration-300 ease-in-out"
          />
        </div>
      </div>
      <p className="text-base font-poppins text-black font-normal mt-5">
        Copyright &copy; 2025
      </p>
    </section>
  );
}

export default Footer;
