import { profileImage1, profileImage3 } from "../assets/images";
import Button from "../components/Button";

function AboutMe() {
  // const googleDriveFileId = "1Mtr5L4A15IImwGMXXzYPdRruRh3AsXqa7g2Vpw74teI"; // Replace with actual file ID
  // const downloadLink = `https://drive.google.com/uc?id=${googleDriveFileId}&export=download`;
  const downloadLink =
    "https://www.dropbox.com/scl/fi/o7handvfuh8qsdggdaw8b/Resume-Firdaus.pdf?rlkey=7r2xru8ob01ccdowuzcvzx1dv&st=k1r90yrp&dl=1";

  const handleDownload = () => {
    window.open(downloadLink, "_blank"); // Forces opening in a new tab
  };

  return (
    <section
      id="about-me"
      className="flex max-lg:flex-col max-lg:items-center justify-around items-start pt-20 pb-20"
    >
      <div className="flex justify-center items-center max-lg:mt-6 my-auto">
        <img
          src={profileImage3}
          alt="profile image"
          width={300}
          height={300}
          className="object-contain rounded-full"
        />
      </div>
      <div className="flex flex-col justify-start items-around gap-10 w-full max-w-[600px] max-lg:mt-10">
        <h2 className="text-5xl font-poppins font-semibold relative max-lg:text-center">
          About Me
          <span className="absolute bottom-[-20px] left-0 w-28 bg-orange-400 h-[6px] max-lg:left-1/2 max-lg:transform max-lg:-translate-x-1/2"></span>
        </h2>
        <div className="flex flex-col justify-between gap-3 mt-5">
          <h4 className="font-poppins text-base leading-loose text-gray-500">
            My name is Firdaus Khalid. I'm a freelance Full Stack AI developer
            based in Kuala Lumpur, Malaysia. I'm very passionate and dedicated
            to my work.
          </h4>
          <h4 className="font-poppins text-base leading-loose text-gray-500">
            With a 3 years experience as a professional Full Stack Developer, I
            have acquired the skills neccessary to build great and premium
            websites.
          </h4>
        </div>
        <div className="flex justify-start items-center gap-6">
          <button
            onClick={() => {
              window.location.href = "#Experiences";
            }}
            className="flex justify-center items-center font-poppins border h-16 font-medium leading-none text-xl rounded-md 
      transition-colors duration-300 tracking-wide bg-orange-400 border-orange-400 text-white hover:bg-orange-100
      hover:text-orange-400 w-full max-w-2/6"
          >
            View Works
          </button>
          <button
            onClick={handleDownload}
            className="flex justify-center items-center font-poppins border h-16 font-medium leading-none text-xl rounded-md 
      transition-colors duration-300 tracking-wide bg-white border-orange-400 text-orange-400 hover:bg-orange-100
      hover:text-white w-full max-w-2/6"
          >
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
