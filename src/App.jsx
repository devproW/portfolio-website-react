import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import AboutMe from "./sections/AboutMe";

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
    </main>
  );
}

export default App;
