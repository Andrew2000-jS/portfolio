import {
  About,
  Contact,
  Experience,
  Footer,
  Hero,
  Navbar,
  Projects,
} from "./sections";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
