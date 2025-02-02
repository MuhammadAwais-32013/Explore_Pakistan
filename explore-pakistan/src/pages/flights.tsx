import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const FlightsPage = () => {
  const dummyFlights = [
    {
      id: 1,
      name: "PIA Flight 101",
      departure: "Karachi",
      arrival: "Islamabad",
    },
    {
      id: 2,
      name: "Air Blue 205",
      departure: "Lahore",
      arrival: "Skardu",
    },
  ];

  return (
    <div>
      <NavBar />
      <main className="container mx-auto px-4 mt-16">
        <h2 className="text-3xl font-semibold">Available Flights</h2>
        <div className="grid grid-cols-2 gap-8 mt-8">
          {dummyFlights.map((flight) => (
            <div key={flight.id} className="bg-white shadow-md p-4 rounded">
              <h3 className="text-xl font-bold">{flight.name}</h3>
              <p className="mt-1 text-gray-600">
                From: {flight.departure} - To: {flight.arrival}
              </p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FlightsPage;
