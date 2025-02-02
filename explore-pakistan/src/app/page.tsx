import HeroSection from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <main className="container mx-auto px-4 mt-16">
        <section className="text-center">
          <h2 className="text-3xl font-semibold">Discover Pakistan’s Treasures</h2>
          <p className="text-lg mt-4">
            Explore breathtaking destinations, luxurious hotels, and affordable flights.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
