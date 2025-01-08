function Hero() {
  return (
    <section className="flex justify-between items-start pt-20">
      <div className="flex flex-col justify-end w-[500px] h-[400px]">
        {/* <div className="bg-blue-600 w-[470px] h-2 mb-10"></div> */}
        <h2 className="text-6xl font-poppins font-semibold leading-[88px] mb-1">
          I'm Firdaus
        </h2>
        {/* <div className="bg-blue-600 w-[400px] h-[70px] mb-[50px]"></div> */}
        <h4 className="text-2xl font-poppins leading-8 font-normal mb-12 text-gray-600">
          A freelance Full Stack AI Developer
        </h4>
        <div className="bg-blue-600 w-[229px] h-[63px]"></div>
      </div>
      <div className="bg-blue-300 w-[670px] h-[600px]"></div>
    </section>
  );
}

export default Hero;
