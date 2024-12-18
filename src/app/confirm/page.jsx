"use client";

import React, { useState } from "react";
import Navbar from '../../../src/app/components/Navbar'
import Footer from '../../../src/app/components/Footer'
import "../globals.css";

function ConfirmAuction() {
  const [selectedOption, setSelectedOption] = useState("Confirm");
  const [errorText, setErrorText] = useState("");

  const handleSubmit = () => {
    // ตรวจสอบว่าเลือกยืนยันหรือรายงานการแก้ไข
    if (selectedOption === "Confirm") {
      alert("Auction confirmed!"); // ตัวอย่างการแจ้งเตือนเมื่อยืนยัน
      // สามารถเพิ่มการส่งข้อมูลหรือเปลี่ยนเส้นทางที่นี่
    } else if (selectedOption === "Report correction" && errorText.trim() !== "") {
      alert(`Reported correction: ${errorText}`); // ตัวอย่างการแจ้งเตือนเมื่อรายงานการแก้ไข
      // สามารถเพิ่มการส่งข้อมูลหรือเปลี่ยนเส้นทางที่นี่
    } else {
      alert("Please complete the form before submitting.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-happy">
      {/* Navbar */}
      <Navbar />

      {/* Auction Confirmation Section */}
      <div className="flex justify-center items-center py-10">
        <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-3xl">
          {/* Header */}
          <h2 className="text-center text-4xl font-bold mb-4">
            Congratulations! to Xenosz
          </h2>
          <h3 className="text-center text-2xl mb-8">You won this auction.</h3>

          {/* Auction Details */}
          <div className="mb-8">
            <h4 className="font-bold text-3xl mb-6">
              Details of this auction
            </h4>

            <div className="grid grid-cols-2 gap-y-5 text-2xl">
              <div>
                <p>
                  <span className="font-bold">Car ID:</span> 0123456789
                </p>
                <p>
                  <span className="font-bold">Brand:</span> BMW
                </p>
                <p>
                  <span className="font-bold">Model:</span> X4M
                </p>
                <p>
                  <span className="font-bold">Color:</span> BLACK
                </p>
                <p>
                  <span className="font-bold">Year:</span> 2023
                </p>
              </div>

              <div>
                <p>
                  <span className="font-bold">Auction closing date:</span>{" "}
                  15/10/2024
                </p>
                <p>
                  <span className="font-bold">Total auction price:</span>{" "}
                  200,000 $
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
  );
}

export default ConfirmAuction;
