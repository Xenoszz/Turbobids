"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../globals.css";
import { getUserIdFromToken } from "@/app/utils/auth";

export default function CommentPage() {
  const userID = getUserIdFromToken(); // ฟังก์ชันดึง userID จาก token

  const [formData, setFormData] = useState({
    Username: "", // เริ่มต้นเป็นค่าว่าง
    carModel: "",
    date: "",
    comment: "",
    rating: 0,
  });
  const [isLoading, setIsLoading] = useState(true); // สำหรับโหลดข้อมูล
  const [message, setMessage] = useState(""); // สำหรับแสดงข้อความข้อผิดพลาด

  // ดึง Username เมื่อโหลดหน้า
  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const res = await fetch(`http://localhost:9500/api/get-username/${userID}`);
        if (res.ok) {
          const data = await res.json();
          setFormData((prevState) => ({
            ...prevState,
            Username: data.Username, // <<--- เปลี่ยนเป็น 'Username' ตัวพิมพ์ใหญ่
          }));
        } else {
          setMessage("Error fetching username.");
        }
      } catch (error) {
        console.error("Error fetching username:", error);
        setMessage("An unexpected error occurred.");
      } finally {
        setIsLoading(false);
      }
    };

    if (userID) {
      fetchUsername();
    } else {
      setMessage("No user logged in.");
      setIsLoading(false);
    }
  }, [userID]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  // แสดง Loading ระหว่างดึงข้อมูล
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 font-happy">
      <Navbar />
      <div className="flex justify-center items-center py-10">
        <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-3xl">
          <h2 className="text-center text-4xl font-bold mb-4">Share Your Experience</h2>
            <h3 className="text-center text-2xl mb-8">Tell us how you feel about our website and survice!</h3>

          {/* แสดงข้อความข้อผิดพลาด */}
          {message && <p className="text-red-500 text-center mb-4">{message}</p>}

          {/* Comment Form */}
          <form onSubmit={handleSubmit} className="space-y-6 text-2xl">
            {/* Username Input */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Username</label>
              <input
                type="text"
                placeholder={formData.Username || "Display Name"} // แสดง Username
                readOnly
                className="w-full border bg-gray-100 text-gray-600 rounded-lg p-3 focus:outline-none cursor-not-allowed"
              />
            </div>

            {/* Car Model Input */}
            <div>
              <label className="block text-gray-700 mb-2">Car Model</label>
              <input
                type="text"
                name="carModel"
                placeholder="Enter car model"
                value={formData.carModel}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
                required
              />
            </div>

            {/* Date Input */}
            <div>
              <label className="block text-gray-700 mb-2">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
                required
              />
            </div>

            {/* Comment Input */}
            <div>
              <label className="block text-gray-700 mb-2">Your Comment</label>
              <textarea
                name="comment"
                placeholder="Write your comment here..."
                value={formData.comment}
                onChange={handleChange}
                rows="4"
                className="w-full border rounded-lg p-3"
                required
              />
            </div>

            {/* Rating Input */}
            <div>
              <label className="block text-gray-700 mb-2">Rating (1-5)</label>
              <input
                type="number"
                name="rating"
                placeholder="1-5"
                min="1"
                max="5"
                value={formData.rating}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}