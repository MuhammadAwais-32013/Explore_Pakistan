import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const DestinationsPage = () => {
  const dummyDestinations = [
    { id: 1, name: "Hunza Valley", description: "A picturesque valley in the Karakoram range." },
    { id: 2, name: "Skardu", description: "Gateway to the mighty mountains of the Karakoram." },
  ];

  return (
    <div>
      <NavBar />
      <main className="container mx-auto px-4 mt-16">
        <h2 className="text-3xl font-semibold">Popular Destinations</h2>
        <div className="grid grid-cols-2 gap-8 mt-8">
          {dummyDestinations.map(destination => (
            <div key={destination.id} className="bg-white shadow-md p-4 rounded">
              <h3 className="text-xl font-bold">{destination.name}</h3>
              <p className="mt-2">{destination.description}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DestinationsPage;
