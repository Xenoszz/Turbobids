"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import axios from "axios";  
import { useRouter } from "next/navigation";  
import '../../globals.css';

export default function Home() {
  const [auctions, setAuctions] = useState([]); 
  const [searchTerm, setSearchTerm] = useState(""); 
  const router = useRouter(); 


  useEffect(() => {
    axios.get('http://localhost:9500/api/Todayauctions')
      .then(response => {

        const today = new Date().setHours(0, 0, 0, 0); 
        const todayAuctions = response.data.filter((auction) => {
        const auctionDate = new Date(auction.auction_start_date).setHours(0, 0, 0, 0);
          return auctionDate === today;
        });
        setAuctions(todayAuctions); 
      })
      .catch(error => {
        // console.error("Error fetching auction data:", error);
      });
  }, []); 


  useEffect(() => {
    if (searchTerm.length > 0) {

      axios.get(`http://localhost:9500/api/TodaySearch`, {
        params: { searchTerm } 
      })
        .then(response => {

          const today = new Date().setHours(0, 0, 0, 0);
          const todayAuctions = response.data.filter((auction) => {
            const auctionDate = new Date(auction.auction_start_date).setHours(0, 0, 0, 0);
            return auctionDate === today;
          });
          setAuctions(todayAuctions); 
        })
        .catch(error => {
          // console.error("Error fetching auction data:", error);
        });
    } else {

      setAuctions([]);
    }
  }, [searchTerm]); 


  const handleBidNow = (carID) => {
    router.push(`/auction/detail/${carID}`);  
  };

  return (
    <div className="min-h-screen bg-gray-100 font-happy">
      {/* Navbar */}
      <Navbar />

      {/* Header Section */}
      <div className="container mx-auto p-4 flex justify-between bg-white mb-4">
        <h1 className="text-2xl font-bold ml-6">Auctions Live Right Now</h1>
        <input
          type="text"
          placeholder="Search Keywords..."
          className="border border-gray-300 rounded-lg px-4 py-2"
          value={searchTerm}  
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
      </div>

      {/* Auctions Section */}
      <div className="space-y-6 max-w-7xl mx-auto mb-8">
        {/* Check if there are any auctions */}
        {auctions.length === 0 ? (
          <div className="text-center text-2xl text-gray-700 font-bold mt-8 bg-white rounded-3xl p-4 pt-60 pb-60">
            No auctions found for today.
          </div>
        ) : (
          auctions.map((auction) => (
            <div
              key={auction.auction_id}
              className="relative flex flex-col bg-white shadow-lg rounded-3xl p-4"
            >
              {/* Date */}
              <div className="text-xl font-bold text-gray-700 mb-2">
                {auction.formatted_auction_start_date}
              </div>

              {/* Auction Content */}
              <div className="flex flex-col md:flex-row justify-between items-center">
                {/* Image Section */}
                <img
                  src="/IMG/byd.JPG"  
                  alt="Car"
                  className="w-full md:w-1/3 h-auto object-cover rounded-md"
                />

                {/* Text Section */}
                <div className="flex flex-col w-full ml-6 md:ml-8 mt-4 md:mt-0">
                  <div className="flex flex-col md:flex-row justify-between text-lg mb-2">
                    {/* Left Group */}
                    <div>
                      <p><strong>Car ID:</strong> {auction.car_ID}</p>
                      <p><strong>Brand:</strong> {auction.car_brand}</p>
                      <p><strong>Model:</strong> {auction.car_model}</p>
                      <p><strong>Year:</strong> {auction.car_year}</p>
                    </div>

                    {/* Right Group */}
                    <div className="text-left md:mr-24 mt-2 md:mt-0">
                      <p><strong>Sale Highlights:</strong> {auction.car_details}</p>
                      <p><strong>Sale Time:</strong> {auction.formatted_auction_start_time}</p>
                      <p><strong>Current Bid:</strong> ${auction.auction_current_price}</p>
                    </div>
                  </div>
                </div>

                {/* Bid Now Button */}
                <div className="absolute bottom-4 right-4 mt-2 md:mt-0">
                  <button className="bg-blue-600 text-white text-sm font-bold py-2 px-4 rounded-3xl hover:bg-blue-700" onClick={() => handleBidNow(auction.car_ID)} >
                    Bid Now!
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}