import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss,
  faDocker,
  faGithub,
  faHtml5,
  faJs,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

function MySkills() {
  return (
    <section
      id="about-me"
      className="flex flex-col justify-center items-center pt-20 gap-9 max-w-7xl mx-auto pb-20"
    >
      <h2 className="text-5xl font-poppins font-semibold relative">
        My Skills
        <span className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-28 bg-orange-400 h-[6px]"></span>
      </h2>
      <div className="grid max-lg:grid-cols-3 grid-cols-5 content-center justify-center items-center gap-12 w-full mt-12">
        <div className="flex flex-col justify-center items-center">
          <FontAwesomeIcon icon={faPython} className="text-gray-700 text-7xl" />
          <p className="text-gray-500 text-lg font-poppins">Python</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <FontAwesomeIcon icon={faDocker} className="text-gray-700 text-7xl" />
          <p className="text-gray-500 text-lg font-poppins">Docker</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <FontAwesomeIcon icon={faGithub} className="text-gray-700 text-7xl" />
          <p className="text-gray-500 text-lg font-poppins">Github</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <FontAwesomeIcon icon={faReact} className="text-gray-700 text-7xl" />
          <p className="text-gray-500 text-lg font-poppins">React</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <FontAwesomeIcon icon={faHtml5} className="text-gray-700 text-7xl" />
          <p className="text-gray-500 text-lg font-poppins">HTML</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <FontAwesomeIcon icon={faCss} className="text-gray-700 text-7xl" />
          <p className="text-gray-500 text-lg font-poppins">CSS</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <FontAwesomeIcon icon={faJs} className="text-gray-700 text-7xl" />
          <p className="text-gray-500 text-lg font-poppins">JavaScript</p>
        </div>
      </div>
    </section>
  );
}

export default MySkills;
