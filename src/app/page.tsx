import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-end justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/bg1.jpg')] bg-cover bg-center"></div>
      <div className="relative z-10 text-right pr-8">
        <h1 className="text-5xl font-bold text-white mb-11">
          Welcome to Our Pizza Munch!
        </h1>
        <p className="text-lg text-white mb-6">
          Enjoy the best pizzas made from fresh ingredients and a lot of love.
        </p>
        <Link href="/order">
          <button className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition duration-200 ease-in-out">
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
}
