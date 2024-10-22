"use client";

import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-[url('/images/bg1.jpg')] bg-cover bg-center">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full space-y-6 text-center"> 
        <h1 className="text-5xl font-bold text-red-600 mb-4">
          Oops!
        </h1>
        <p className="text-lg text-gray-700">
          Something went wrong. We couldn't find the page you were looking for.
        </p>
        <Link href="/" passHref>
          <button className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition duration-200 ease-in-out shadow-md">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
}
