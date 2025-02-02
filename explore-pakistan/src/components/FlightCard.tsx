const FlightCard = ({ flight }) => {
    return (
      <div className="flight-card">
        <h3 className="text-xl">{flight.name}</h3>
        <p>{flight.departure} to {flight.arrival}</p>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Book Flight</button>
      </div>
    );
  };
  
  export { FlightCard };
  