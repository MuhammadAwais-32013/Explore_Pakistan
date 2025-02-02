import { useState, useEffect } from 'react';
import { DestinationCard } from '../components/DestinationCard';
import { HotelCard } from '../components/HotelCard';
import { FlightCard } from '../components/FlightCard';
import supabase from '../lib/supabase';

const HomePage = () => {
  const [destinations, setDestinations] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: destinationsData } = await supabase.from('destinations').select('*');
      setDestinations(destinationsData);

      const { data: hotelsData } = await supabase.from('hotels').select('*');
      setHotels(hotelsData);

      const { data: flightsData } = await supabase.from('flights').select('*');
      setFlights(flightsData);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <section className="hero bg-cover bg-center text-white py-32">
        <h1 className="text-5xl font-bold">Explore the Beauty of Pakistan</h1>
        <p className="mt-4 text-xl">Find your dream destination, hotels, and flights.</p>
        <button className="mt-8 bg-blue-500 text-white py-2 px-4 rounded">Start Exploring</button>
      </section>

      <section className="popular-destinations mt-16">
        <h2 className="text-3xl font-semibold">Popular Destinations</h2>
        <div className="grid grid-cols-3 gap-8 mt-6">
          {destinations.map(destination => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </section>

      <section className="hotel-booking mt-16">
        <h2 className="text-3xl font-semibold">Find Your Hotel</h2>
        <div className="grid grid-cols-3 gap-8 mt-6">
          {hotels.map(hotel => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </section>

      <section className="flight-booking mt-16">
        <h2 className="text-3xl font-semibold">Book Flights</h2>
        <div className="grid grid-cols-3 gap-8 mt-6">
          {flights.map(flight => (
            <FlightCard key={flight.id} flight={flight} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
