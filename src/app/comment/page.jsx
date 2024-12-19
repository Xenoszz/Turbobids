"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../globals.css";
import { getUserIdFromToken } from "@/app/utils/auth";
import { useRouter,useSearchParams } from "next/navigation";  

export default function CommentPage() {
  const userID = getUserIdFromToken(); 
  const router = useRouter();
  const searchParams = useSearchParams();
  const carId = searchParams.get('car_id');

  const [formData, setFormData] = useState({
    Username: "",
    carModel: "",
    date: "",
    comment: "",
    rating: 0,
  });
  const [isLoading, setIsLoading] = useState(true); 
  const [message, setMessage] = useState(""); 


  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const res = await fetch(`http://localhost:9500/api/get-username?user_id=${userID}&car_id=${carId}`);
        if (res.ok) {
          const data = await res.json();
          console.log(data);
          setFormData((prevState) => ({
            ...prevState,
            Username: data.Username, 
            carModel: data.car_model,
            carbrand: data.carBrand, 
            car_model: data.carModel,
            car_year: data.carYear, 
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

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    console.log("Form submitted:", formData); 
    

    try {
      const res = await fetch("http://localhost:9500/api/submit-comment", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify({
          car_id: carId,   
          date: formData.date, 
          comment: formData.comment, 
          rating: formData.rating, 
        }),
      });
  
      if (res.ok) {
        const data = await res.json();
        console.log("Response from server:", data);

        router.push("/home"); 
      } else {
        setMessage("Error submitting comment."); 
      }
    } catch (error) {
      console.error("Error submitting comment:", error);
      setMessage("An unexpected error occurred.");
    }
  };
  


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
                placeholder={formData.carModel || "Display Name"} // แสดง Username
                readOnly
                className="w-full border bg-gray-100 text-gray-600 rounded-lg p-3 focus:outline-none cursor-not-allowed"
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