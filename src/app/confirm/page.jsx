"use client";

import React, { useState, useEffect } from "react";
import { useRouter,useSearchParams  } from "next/navigation"; 
import axios from 'axios'; 
import Navbar from '../../../src/app/components/Navbar';
import Footer from '../../../src/app/components/Footer';
import "../globals.css";

function ConfirmAuction() {
  const [selectedOption, setSelectedOption] = useState("Confirm");
  const [errorText, setErrorText] = useState("");
  const [auctionData, setAuctionData] = useState(null); 
  const router = useRouter(); 
  const searchParams = useSearchParams();
  const carId = searchParams.get('car_id');
  const userId = searchParams.get('user_id');

  useEffect(() => {
    if (carId && userId) {
    
      axios.get(`http://localhost:9500/api/auction-details?car_id=${carId}&user_id=${userId}`)
        .then(response => {
          console.log(response.data);
          setAuctionData(response.data[0]); 
        })
        .catch(error => {
          console.error("There was an error fetching the auction data:", error);
        });
    }
  }, [carId, userId]);  

  const handleSubmit = () => {
    // ตรวจสอบว่าเลือกยืนยันหรือรายงานการแก้ไข
    if (selectedOption === "Confirm") {
      alert("Auction confirmed!"); 
      router.push(`/comment?car_id=${carId}`); 
    } else if (selectedOption === "Report correction" && errorText.trim() !== "") {
      alert(`Reported correction: ${errorText}`); 
      router.push("/comment"); 
    } else {
      alert("Please complete the form before submitting.");
    }
  };

  if (!auctionData) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="font-happy">
    <div className="min-h-screen bg-gray-100 font-happy">
      {/* Navbar */}
      <Navbar />

      {/* Auction Confirmation Section */}
      <div className="flex justify-center items-center py-10">
        <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-3xl">
          {/* Header */}
          <h2 className="text-center text-4xl font-bold mb-4">
            Congratulations! to {auctionData.Username}
          </h2>
          <h3 className="text-center text-2xl mb-8">You won this auction.</h3>

          {/* Auction Details */}
          <div className="mb-8">
            <h4 className="font-bold text-3xl mb-6">
              Details of this auction
            </h4>

            <div className="grid grid-cols-2 gap-y-5 text-xl ">
              <div>
                <p>
                  <span className="font-bold">Car ID:</span> {auctionData.car_ID}
                </p>
                <p>
                  <span className="font-bold">Brand:</span> {auctionData.car_brand}
                </p>
                <p>
                  <span className="font-bold">Model:</span> {auctionData.car_model}
                </p>
                <p>
                  <span className="font-bold">Color:</span> {auctionData.car_color}
                </p>
                <p>
                  <span className="font-bold">Year:</span> {auctionData.car_year}
                </p>
              </div>

              <div>
                <p>
                  <span className="font-bold ">Auction closing date:</span>{" "}
                  {auctionData.formatted_auction_end_date}
                </p>
                <p>
                  <span className="font-bold">Total auction price:</span>{" "}
                  {auctionData.bid_amount} $
                </p>
              </div>
            </div>
          </div>

          {/* Confirmation Options */}
          <div className="mb-8">
            <p className="font-bold text-2xl mb-4">Confirm auction information:</p>
            <div className="flex items-center space-x-6">
              <label className="flex items-center space-x-2 text-xl">
                <input
                  type="radio"
                  name="confirm"
                  value="Confirm"
                  checked={selectedOption === "Confirm"}
                  onChange={() => setSelectedOption("Confirm")}
                  className="accent-black w-6 h-6"
                />
                <span>Confirm</span>
              </label>

              <label className="flex items-center space-x-2 text-xl">
                <input
                  type="radio"
                  name="confirm"
                  value="Report correction"
                  checked={selectedOption === "Report correction"}
                  onChange={() => setSelectedOption("Report correction")}
                  className="accent-black w-6 h-6"
                />
                <span>Report correction</span>
              </label>
            </div>

            {/* Error Input */}
            {selectedOption === "Report correction" && (
              <div className="mt-6">
                <label className="block text-xl mb-2">
                  Please specify any errors encountered:
                </label>
                <input
                  type="text"
                  value={errorText}
                  onChange={(e) => setErrorText(e.target.value)}
                  className="w-full border-2 border-gray-300 p-3 rounded-lg text-xl focus:outline-none focus:border-orange-400"
                />
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center mt-6">
            <button
              onClick={handleSubmit}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg text-xl hover:bg-blue-600"
            >
              Submit
            </button>
          </div>

          {/* Footer Text */}
          <p className="text-center text-lg text-gray-600 mt-8">
            We’ll send you an email to verify the correct information and inform
            you of the date and time you can inspect and pay for your vehicle at
            our designated location.
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  </div>
  );
}

export default ConfirmAuction;
