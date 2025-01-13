import { profileImage1 } from "../assets/images";
import Button from "../components/Button";

function Hero() {
  return (
    <section
      id="home"
      className="flex max-lg:flex-col justify-between items-start px-12 max-w-7xl mx-auto"
    >
      <div className="flex flex-col justify-end w-[500px] h-[400px] max-lg:h-[300px] animate-fadeInLeft">
        <h2 className="text-6xl font-poppins font-semibold leading-[88px] mb-1 tracking-wide">
          I'm Firdaus
        </h2>
        <h4 className="text-2xl font-poppins leading-8 font-normal mb-12 text-gray-600 w-7/12 tracking-wide">
          A freelance Full Stack AI Developer
        </h4>
        <Button label="Hire Me" />
      </div>
      <div className="flex justify-end items-center w-[670px] h-[600px] animate-fadeInRight max-lg:mt-6">
        <img
          src={profileImage1}
          alt="profile image"
          width={600}
          height={570}
          className="object-contain"
        />
      </div>
    </section>
  );
}

export default Hero;
