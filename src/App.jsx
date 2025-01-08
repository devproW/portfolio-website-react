import Nav from "./components/Nav";
import Hero from "./sections/Hero";

function App() {
  return (
    <main className="relative">
      <Nav />
      <section className="px-12 max-w-7xl mx-auto">
        <Hero />
      </section>
    </main>
  );
}

export default App;
