const DestinationCard = ({ destination }) => {
    return (
      <div className="destination-card">
        <img src={destination.image_url} alt={destination.name} className="w-full h-48 object-cover" />
        <h3 className="mt-2 text-xl">{destination.name}</h3>
        <p>{destination.description}</p>
      </div>
    );
  };
  
  export { DestinationCard };
  