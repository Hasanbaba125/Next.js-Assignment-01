import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-3xl font-bold font-mono ml-32">
          <Link href="/">Pizza Munch</Link>
        </div>
        <div className="flex space-x-8">
          <Link href="/location" className="text-gray-300 hover:text-white">Location</Link>
          <Link href="/about" className="text-gray-300 hover:text-white">About Us!</Link>
          <Link href="/menu" className="text-gray-300 hover:text-white">Menu</Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>
          <Link href="/order" className="text-gray-300 hover:text-white">Order Now!</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
