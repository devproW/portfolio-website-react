function Services() {
  return (
    <section
      id="services"
      className="flex flex-col justify-center items-center pt-20 gap-9"
    >
      <h2 className="text-5xl font-poppins font-semibold relative">
        Services
        <span className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-28 bg-orange-400 h-[6px]"></span>
      </h2>
      <h4 className="font-poppins text-base text-center leading-loose w-8/12 mt-6">
        I specialize in creating dynamic websites, robust Python backend
        systems, innovative machine learning solutions, and data science
        strategies tailored to meet your unique needs.
      </h4>
    </section>
  );
}

export default Services;
