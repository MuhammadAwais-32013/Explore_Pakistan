import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const HotelsPage = () => {
  const dummyHotels = [
    {
      id: 1,
      name: "Serena Hotel Islamabad",
      location: "Islamabad",
      description: "A luxurious hotel with world-class amenities.",
    },
    {
      id: 2,
      name: "Pearl Continental Lahore",
      location: "Lahore",
      description: "Experience luxury in the heart of Lahore.",
    },
  ];

  return (
    <div>
      <NavBar />
      <main className="container mx-auto px-4 mt-16">
        <h2 className="text-3xl font-semibold">Top Hotels</h2>
        <div className="grid grid-cols-2 gap-8 mt-8">
          {dummyHotels.map((hotel) => (
            <div key={hotel.id} className="bg-white shadow-md p-4 rounded">
              <h3 className="text-xl font-bold">{hotel.name}</h3>
              <p className="mt-1 text-gray-600">{hotel.location}</p>
              <p className="mt-2">{hotel.description}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HotelsPage;
