import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <section className="flex flex-col justify-center items-center pt-20 gap-9 max-w-7xl mx-auto pb-20">
      <h2 className="text-6xl font-poppins font-semibold text-yellow-400">
        Firdaus K.
      </h2>
      <p className="text-lg text-center font-poppins leading-loose text-gray-500 w-2/3">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis quisquam
        nemo voluptatem est, ipsum enim, inventore ducimus obcaecati unde
        nostrum quia similique aperiam eveniet voluptas vero quidem ullam
        dolorem? Earum?
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
      </div>
    </section>
  );
}

export default Footer;
