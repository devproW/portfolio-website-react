import { profileImage1 } from "../assets/images";
import Button from "../components/Button";

function AboutMe() {
  return (
    <section
      id="about-me"
      className="flex max-lg:flex-col justify-around items-start pt-20 pb-20"
    >
      <div className="flex justify-center items-center max-lg:mt-6 my-auto">
        <img
          src={profileImage1}
          alt="profile image"
          width={300}
          height={300}
          className="object-contain rounded-full"
        />
      </div>
      <div className="flex flex-col justify-start items-around gap-10 w-[600px]">
        <h2 className="text-5xl font-poppins font-semibold relative">
          About Me
          <span className="absolute bottom-[-20px] left-0 w-28 bg-orange-400 h-[6px]"></span>
        </h2>
        <div className="flex flex-col justify-between gap-3 mt-5">
          <h4 className="font-poppins text-base leading-loose">
            My name is Firdaus Khalid. I'm a freelance Full Stack AI developer
            based in Kuala Lumpur, Malaysia. I'm very passionate and dedicated
            to my work.
          </h4>
          <h4 className="font-poppins text-base leading-loose">
            With a 6 years experience as a professional Full Stack Developer, I
            have acquired the skills neccessary to build great and premium
            websites.
          </h4>
        </div>
        <div className="flex justify-start items-center gap-6">
          <Button
            label="View Works"
            adjustWidth
            borderColor="border-orange-400"
          />
          <Button
            label="Download CV"
            backgroundColor="bg-white"
            textColor="text-orange-400"
            borderColor="border-orange-400"
            adjustWidth
          />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
