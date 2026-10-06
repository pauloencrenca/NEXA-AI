import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Platform from "./components/Platform.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Platform />
      </main>
      <Footer />
    </>
  );
}
