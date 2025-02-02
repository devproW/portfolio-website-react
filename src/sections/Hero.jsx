import { profileImage1 } from "../assets/images";

function Hero() {
  return (
    <section
      id="home"
      className="flex max-lg:flex-col max-lg:justify-center max-lg:items-center justify-between items-start px-12 max-w-7xl mx-auto"
    >
      <div className="flex flex-col max-lg:items-center justify-end w-[500px] h-[400px] max-lg:h-[300px] animate-fadeInLeft">
        <h2 className="text-6xl font-poppins font-semibold leading-[88px] mb-1 tracking-wide">
          I'm Firdaus
        </h2>
        <h4 className="text-2xl font-poppins leading-8 font-normal mb-12 text-gray-600 w-7/12 tracking-wide">
          A freelance Full Stack AI Developer
        </h4>
        <button
          onClick={() => {
            window.location.href = "#contact-me";
          }}
          className="flex justify-center items-center font-poppins border h-16 font-medium leading-none text-xl rounded-md 
      transition-colors duration-300 tracking-wide bg-yellow-500 border-yellow-500 text-white hover:bg-white 
      hover:text-orange-400 w-56"
        >
          Hire Me
        </button>
      </div>
      <div className="flex max-lg:justify-center mx-auto justify-end items-center w-full max-w-[670px] h-auto animate-fadeInRight mt-6 max-lg:mt-10">
        <img
          src={profileImage1}
          alt="profile image"
          width={600}
          height={570}
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
}

export default Hero;
