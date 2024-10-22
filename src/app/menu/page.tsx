import Link from "next/link";

export default function Menu() {
  const pizzas = [
    {
      name: "Margherita",
      description: "Classic pizza with fresh tomatoes, mozzarella, and basil.",
      image: "/images/pizza-banner-m.jpeg", // Ensure the image path is correct
    },
    {
      name: "Pepperoni",
      description: "Delicious pizza topped with spicy pepperoni and cheese.",
      image: "/images/pizza-banner-p.jpeg",
    },
    {
      name: "BBQ Chicken",
      description: "Grilled chicken with BBQ sauce, onions, and cilantro.",
      image: "/images/pizza-banner-b.jpeg",
    },
    {
      name: "Veggie",
      description: "Loaded with fresh vegetables and mozzarella cheese.",
      image: "/images/pizza-banner-v.jpeg",
    },
    {
      name: "Hawaiian",
      description: "Ham and pineapple on a classic cheese pizza.",
      image: "/images/pizza-banner-h.jpeg",
    },
  ];

  return (
    <div className=" min-h-screen bg-yellow-200">
      <div className="container mx-auto p-20">
        <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center mt-0">Menu</h1>
        <p className="text-lg text-gray-700 mb-8 text-center">Explore our delicious pizzas:</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {pizzas.map((pizza, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg">
              <img src={pizza.image} alt={pizza.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-blue-600 mb-2">{pizza.name}</h2>
                <p className="text-gray-600 mb-4">{pizza.description}</p>
                <Link href="/order">
                  <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out">
                    Order Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
