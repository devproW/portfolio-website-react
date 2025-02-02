import { dataImage, mlImage, pythonImage, uiImage } from "../assets/icons";

function Services() {
  return (
    <section
      id="services"
      className="flex flex-col justify-center items-center pt-20 gap-9 max-w-7xl mx-auto pb-20"
    >
      <h2 className="text-5xl font-poppins font-semibold relative">
        Services
        <span className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-28 bg-orange-400 h-[6px]"></span>
      </h2>
      <h4 className="font-poppins text-base text-center leading-loose w-9/12 mt-6 text-gray-500">
        I specialize in creating dynamic websites, robust Python backend
        systems, innovative machine learning solutions, and data science
        strategies tailored to meet your unique needs.
      </h4>
      <div className="grid max-lg:grid-cols-1 grid-cols-2 content-stretch gap-12 w-full">
        <div className="flex justify-center items-center bg-blue-custom-gradient w-full h-80 rounded-xl">
          <div className="flex flex-col justify-center items-start w-3/4 gap-4">
            <img
              src={uiImage}
              alt="front-end icon"
              className="w-12 h-16 object-contain"
            />
            <h2 className="text-2xl font-poppins font-semibold text-white">
              Web Development
            </h2>
            <h4 className="font-poppins text-base leading-loose text-white">
              Crafting modern, responsive, and user-friendly websites tailored
              to elevate your online presence.
            </h4>
          </div>
        </div>
        <div className="flex justify-center items-center bg-yellow-custom-gradient w-full h-80 rounded-xl">
          <div className="flex flex-col justify-center items-start w-3/4 gap-4">
            <img
              src={pythonImage}
              alt="python icon"
              className="w-12 h-16 object-contain"
            />
            <h2 className="text-2xl font-poppins font-semibold text-white">
              Python Backend Development
            </h2>
            <h4 className="font-poppins text-base leading-loose text-white">
              Building robust and scalable Python backend solutions to power
              your applications with efficiency and reliability.
            </h4>
          </div>
        </div>
        <div className="flex justify-center items-center bg-purple-custom-gradient w-full h-80 rounded-xl">
          <div className="flex flex-col justify-center items-start w-3/4 gap-4">
            <img
              src={mlImage}
              alt="machine learning icon"
              className="w-12 h-16 object-contain"
            />
            <h2 className="text-2xl font-poppins font-semibold text-white">
              Machine Learning
            </h2>
            <h4 className="font-poppins text-base leading-loose text-white">
              Delivering innovative machine learning solutions to unlock
              data-driven insights and transform your business operations.
            </h4>
          </div>
        </div>
        <div className="flex justify-center items-center bg-green-custom-gradient w-full h-80 rounded-xl">
          <div className="flex flex-col justify-center items-start w-3/4 gap-4">
            <img
              src={dataImage}
              alt="data science icon"
              className="w-12 h-16 object-contain"
            />
            <h2 className="text-2xl font-poppins font-semibold text-white">
              Data Science
            </h2>
            <h4 className="font-poppins text-base leading-loose text-white">
              Providing actionable data science solutions to turn complex data
              into valuable insights and strategic decisions.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
