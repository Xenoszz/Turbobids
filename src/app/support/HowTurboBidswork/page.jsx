"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from '../../../../src/app/components/Navbar';
import Footer from '../../../../src/app/components/Footer';
import "../../globals.css";

const features = [
  { 
    id: 1, 
    icon: 'https://cdn-icons-png.flaticon.com/128/2535/2535854.png', 
    title: 'View Before You Bid', 
    description: 'Want to see a vehicle in person? Visit a Turbobids location to view a vehicle before you bid.' 
  },
  { 
    id: 2, 
    icon: 'https://cdn-icons-png.flaticon.com/128/12705/12705597.png', 
    title: 'Great Deals', 
    description: 'Find something you love at a great price, from luxury brands to classics and more.' 
  },
  { 
    id: 3, 
    icon: 'https://cdn-icons-png.flaticon.com/128/2287/2287065.png', 
    title: 'Expansive Inventory', 
    description: "You're bound to find something that fits." 
  },
  { 
    id: 4, 
    icon: 'https://cdn-icons-png.flaticon.com/128/2535/2535856.png', 
    title: 'Daily Auctions', 
    description: 'Join Daily Auctions and follow the Auction calendar.' 
  },
];

const HowTurboBidswork = () => {
  const router = useRouter();

  // ฟังก์ชันสำหรับนำทางไปยังหน้า /home
  const handleNavigation = () => {
    router.push("/home");
  };

  return (
    <div className="min-h-screen bg-gray-100 font-happy">
      {/* Navbar */}
      <Navbar />

      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between mt-12">
        {/* Text Section */}
        <div className="text-gray-800 max-w-md mr-8 flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-orange-500 mb-8">How TurboBids Work</h1>
          <p className="text-2xl leading-relaxed mb-6">
            The most Cars, Trucks, SUVs, and More for Sale. Turbobids car auctions have something for everyone — used car buyers, for individuals.
          </p>
          <p className="text-2xl leading-relaxed mb-8">
            Buy your next car from the comfort of your own home. Win your car at an online auction, or let our proprietary software do the bidding for you.
          </p>
          {/* ปุ่ม Search Your Car ที่ใช้ handleNavigation */}
          <button 
            onClick={handleNavigation}
            className="bg-blue-600 hover:bg-blue-700 text-white text-2xl font-semibold py-4 px-8 rounded-lg shadow-md transition-transform duration-200 hover:scale-105"
          >
            Search Your Car!
          </button>
        </div>

        {/* Images Section */}
        <div className="flex flex-col space-y-6 mt-12 md:mt-0 px-6">
          {/* Grid for two small images on top */}
          <div className="grid grid-cols-2 gap-6">
            <img 
              src="https://expressautologistics.com/wp-content/uploads/Auto-Auction-Car-Shipping.jpg" 
              alt="Cars for sale" 
              className="rounded-lg shadow-md w-full h-64 object-cover transition-transform duration-300 ease-in-out hover:scale-105" 
            />
            <img 
              src="https://d2hucwwplm5rxi.cloudfront.net/wp-content/uploads/2023/10/02100201/car-auction-abu-dhabi-_-Body-2-28-9-23-1024x640.jpg" 
              alt="Car negotiation" 
              className="rounded-lg shadow-md w-full h-64 object-cover transition-transform duration-300 ease-in-out hover:scale-105" 
            />
          </div>

          {/* Large image below */}
          <img 
            src="https://theusedcarguy.co.uk/wp-content/uploads/2018/10/buying-cars-at-auction.jpg" 
            alt="Large Car Image" 
            className="rounded-lg shadow-md w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105" 
          />
        </div>
      </div>

      {/* Why Buy Section */}
      <div className="max-w-7xl mx-auto px-8 mt-16">
        <h2 className="text-3xl font-bold text-orange-500 text-left mb-8">Why Buy With TurboBids?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="flex items-start bg-white p-6 rounded-lg shadow-md">
              <img 
                src={feature.icon} 
                alt={feature.title} 
                className="w-12 h-12 object-cover mr-6"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default HowTurboBidswork;
