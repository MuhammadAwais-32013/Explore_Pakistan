const HotelCard = ({ hotel }) => {
    return (
      <div className="hotel-card">
        <img src={hotel.image_url} alt={hotel.name} className="w-full h-48 object-cover" />
        <h3 className="mt-2 text-xl">{hotel.name}</h3>
        <p>{hotel.location}</p>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Book Now</button>
      </div>
    );
  };
  
  export { HotelCard };
  