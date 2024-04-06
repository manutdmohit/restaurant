// components/HeroSection.js
import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="hero-section relative">
      <Image
        src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        alt="Restaurant"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10"></div>
      <div className="container mx-auto flex flex-col items-center justify-center relative z-20 py-24">
        <h1 className="text-5xl font-bold mb-6 text-white text-center">
          Welcome to Gourmet Delights
        </h1>
        <p className="text-2xl mb-8 text-gray-300 ml-7 text-center">
          Experience the finest cuisine in a modern and elegant setting.
        </p>
        <button className="bg-yellow-500 text-black text-2xl px-8 py-4 rounded-md hover:bg-yellow-600 transition duration-300">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
