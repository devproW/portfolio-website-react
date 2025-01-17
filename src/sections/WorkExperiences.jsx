function WorkExperiences() {
  return (
    <section
      id="Experiences"
      className="flex flex-col justify-center items-center pt-20 gap-9 max-w-7xl mx-auto pb-20"
    >
      <h2 className="text-5xl font-poppins font-semibold relative">
        Work Experiences
        <span className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-28 bg-orange-400 h-[6px]"></span>
      </h2>
      <h4 className="font-poppins text-base text-center leading-loose w-9/12 mt-6 text-gray-500">
        Bringing over 9 years of diverse work experience, including 3 years
        specializing as a Senior Data Scientist, delivering impactful solutions
        across industries.
      </h4>
      <div className="grid grid-cols-3 content-stretch w-full border border-slate-300">
        <div className="group flex justify-center items-center w-full h-96 transition-colors duration-300 hover:bg-orange-300">
          <div className="flex flex-col justify-start items-start gap-1 w-3/4">
            <h4 className="text-sm font-poppins leading-loose text-gray-500 transition-colors duration-300 group-hover:text-black">
              JUNE 2022 - OCTOBER 2024
            </h4>
            <h2 className="text-2xl font-poppins font-semibold">
              Senior Data Scientist
            </h2>
            <h4 className="text-sm font-poppins leading-loose text-gray-500">
              Tekkis Sdn. Bhd.
            </h4>
            <h4 className="text-sm font-poppins leading-loose text-gray-500 mt-2 transition-colors duration-300 group-hover:text-black">
              The lead developer for the research and development of Tekkis
              products such as electronic know your customer system and other
              on-going products developments.
            </h4>
          </div>
        </div>
        <div className="group flex justify-center items-center w-full h-96 border-r border-l border-slate-300 transition-colors duration-300 hover:bg-orange-300">
          <div className="flex flex-col justify-center items-start gap-1  w-3/4">
            <h4 className="text-sm font-poppins leading-loose text-gray-500 transition-colors duration-300 group-hover:text-black">
              March 2021 - APRIL 2022
            </h4>
            <h2 className="text-2xl font-poppins font-semibold">
              Data Scientist
            </h2>
            <h4 className="text-sm font-poppins leading-loose text-gray-500">
              Skymind CNS Sdn. Bhd.
            </h4>
            <h4 className="text-sm font-poppins leading-loose text-gray-500 mt-2 transition-colors duration-300 group-hover:text-black">
              Spearheaded the development of a machine learning model for
              deployment in production environment.
            </h4>
          </div>
        </div>
        <div className="group flex justify-center items-center w-full h-96 transition-colors duration-300 hover:bg-orange-300">
          <div className="flex flex-col justify-center items-start gap-1  w-3/4">
            <h4 className="text-sm font-poppins leading-loose text-gray-500 transition-colors duration-300 group-hover:text-black">
              NOVEMBER 2013 - MARCH 2020
            </h4>
            <h2 className="text-2xl font-poppins font-semibold">
              Project Analyst
            </h2>
            <h4 className="text-sm font-poppins leading-loose text-gray-500">
              UEM Group Bhd.
            </h4>
            <h4 className="text-sm font-poppins leading-loose text-gray-500 mt-2 transition-colors duration-300 group-hover:text-black">
              Completed the Enterprise Resource Planning Project from start to
              finish involving 2 of UEM Group subsidiaries, UEM Sunrise and PLUS
              which cost RM150 million.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkExperiences;
