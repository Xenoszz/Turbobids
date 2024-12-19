"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";
import CarCard from "../app/components/CarCard";
import "../app/globals.css";
import axios from "axios";
import { Star } from "lucide-react";

function Page() {
  const [cars, setCars] = useState([]);
  const [topCars, setTopCars] = useState([]);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (direction === "left") {
      container.scrollBy({ left: -300, behavior: "smooth" });
    } else {
      container.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.post("http://localhost:9500/cars");
        const sortedCars = response.data.sort((a, b) => b.rating - a.rating);
        setTopCars(sortedCars.slice(0, 4));
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchCars();
  }, []);

  return (
    <div className="font-happy">
      <div>
        <Navbar />
      </div>

      <div className="flex flex-col items-center text-center p-4">
        <div className="text-3xl sm:text-4xl mt-10">
          <h1>Discover Your Next Car at Auction Today!</h1>
          <div className="mt-10 mb-10 border-b-4 border-black w-1/2 mx-auto rounded-full"></div>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8 mb-8">
            <Link href="/auth/register">
              <button className="bg-orange-500 text-white py-3 px-12 text-lg rounded-full hover:bg-blue-600">
                Register
              </button>
            </Link>
            <Link href="/auth/login">
              <button className="bg-[#2A2F6E] text-white py-3 px-12 text-lg rounded-full hover:bg-blue-600">
                Sign in
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 mt-12 mb-24">
        {topCars.map((car) => (
          <CarCard
            key={car.car_ID}
            carImage={car.car_image || "/IMG/car2.jpg"}
            carModel={`${car.car_brand} ${car.car_model}`}
            status={car.status || "Bidding"}
            countdownTime={car.countdown || 3600}
            detailsLink={`/auth/login`}
          />
        ))}
      </div>

      <div className="flex flex-col lg:flex-row justify-center gap-8 bg-[#2A2F6E] rounded-3xl mt-10 mb-10 px-4 lg:px-20 py-10">
        <div className="bg-white p-6 rounded-3xl flex-1">
          <h2 className="text-lg font-semibold">What is Turbobids?</h2>
          <p className="mt-4 text-sm leading-relaxed">
            Copart is a global leader in 100% online car auctions featuring used, wholesale and
            repairable vehicles. We make it easy for Members to find, bid on, and win vehicles like
            classic car, boats, repo cars, ATVs, exotics, motorcycles and more.
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl flex-1">
          <h2 className="text-lg font-semibold">ตัวอย่างรีวิวที่เราได้รับจากลูกค้าจริง</h2>
          <div className="bg-orange-200 rounded-3xl p-6 mt-4">
            <div className="flex items-center">
              <h3 className="font-semibold">เสนอส สุดหล่อท่อดัง</h3>
              <div className="flex ml-4">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} size={20} color="#f27f21" strokeWidth={3} />
                ))}
              </div>
            </div>
            <div className="mt-4 text-sm">
              <p>Honda Accord 2021</p>
              <p>13 OCT 2024</p>
              <p>บริการดีมากครับ รถสวยถูกใจ เงินในเป๋าแห้งเหือด...</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Page;