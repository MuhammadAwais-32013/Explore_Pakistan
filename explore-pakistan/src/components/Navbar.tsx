import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold cursor-pointer">Explore Pakistan</h1>
        </Link>
        <ul className="flex gap-8">
          <li>
            <Link href="/destinations" className="hover:underline">
              Destinations
            </Link>
          </li>
          <li>
            <Link href="/hotels" className="hover:underline">
              Hotels
            </Link>
          </li>
          <li>
            <Link href="/flights" className="hover:underline">
              Flights
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
