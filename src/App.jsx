import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import AboutMe from "./sections/AboutMe";
import Services from "./sections/Services";
import WorkExperiences from "./sections/WorkExperiences";
import ContactMe from "./sections/ContactMe";
import Footer from "./sections/Footer";
import MySkills from "./sections/MySkills";

function App() {
  return (
    <main className="relative">
      <Nav />
      <section className="px-0 mx-0 pt-20 bg-gray-50">
        <Hero />
      </section>
      <section className="px-12 max-w-7xl mx-auto">
        <AboutMe />
      </section>
      <section className="px-12 max-w-7xl mx-auto">
        <MySkills />
      </section>
      <section className="px-12 mx-0 bg-gray-50">
        <Services />
      </section>
      <section className="px-12 mx-0 bg-gray-50">
        <WorkExperiences />
      </section>
      <section className="px-12 max-w-7xl mx-auto">
        <ContactMe />
      </section>
      <section className="px-12 mx-0 bg-gray-50 border-t border-slate-200">
        <Footer />
      </section>
    </main>
  );
}

export default App;
