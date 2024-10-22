import Link from "next/link";

export default function Location() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">Our Location</h1>
        <p className="text-lg text-gray-700 mb-4 text-center">
          We are located in the heart of the city.
        </p>

        <div className="w-full max-w-4xl shadow-lg rounded-lg overflow-hidden mb-8 mx-auto">
          <iframe
            className="w-full h-96"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345092214!2d144.95373531531632!3d-37.81627997975112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11f5cf%3A0x5045675218ce6e0!2sFlinders%20Street%20Station!5e0!3m2!1sen!2sau!4v1616750972631!5m2!1sen!2sau"
            allowFullScreen
            loading="lazy"
          />
        </div>

        <div className="mt-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Contact Us</h2>
          <p className="text-lg text-gray-700">Email: <a href="mailto:info@example.com" className="text-blue-500 hover:underline">info@example.com</a></p>
          <p className="text-lg text-gray-700">Phone: <span className="text-blue-500">+123 456 7890</span></p>
        </div>
      </div>
    </div>
  );
}
