const HeroSection = () => {
    return (
      <section className="hero bg-[url('/images/hero-bg.jpg')] bg-cover bg-center text-white py-32">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Explore the Beauty of Pakistan</h1>
          <p className="mt-4 text-xl">Plan your next adventure today.</p>
          <button className="mt-8 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  