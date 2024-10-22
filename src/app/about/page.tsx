import Link from "next/link";

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center bg-[url('/images/bg1.jpg')] ">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-xl w-full text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">About Us!</h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to our pizzeria! We are passionate about serving delicious, handcrafted pizzas made with the freshest ingredients.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Our journey began with a simple love for pizza, and over the years, we've perfected our recipes to bring you mouth-watering flavors that will satisfy your cravings.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Whether you're a fan of classic Margherita or adventurous BBQ Chicken, we have something for everyone. Join us for a slice of happiness!
        </p>
      </div>
    </div>
  );
}
