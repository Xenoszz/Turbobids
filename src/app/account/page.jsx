"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../globals.css";
import { getUserIdFromToken } from "@/app/utils/auth";

export default function AccountSetting() {
  const userID = getUserIdFromToken(); 

  const [formData, setFormData] = useState({
    UserID: userID,
    firstName: "",
    lastName: "",
    Username: "",
    email: "", 
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState(""); 

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch(`http://localhost:9500/api/user/${userID}`);
        if (res.ok) {
          const data = await res.json();
          setFormData((prevState) => ({
            ...prevState,
            firstName: data.firstname,
            lastName: data.lastname,
            Username: data.Username,
            email: data.email, 
          }));
        } else {
          setMessage("Error fetching user data.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setMessage("An unexpected error occurred.");
      }
    };

    fetchUserData();
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

    if (formData.newPassword !== formData.confirmPassword) {
      setMessage("New Password and Confirm Password do not match.");
      return;
    }

    try {
      const res = await fetch("http://localhost:9500/api/user/userupdate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (res.ok) {
        setMessage("Profile updated successfully.");
        setFormData((prevState) => ({
          ...prevState,
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        }));
      } else {
        setMessage(result.error || "An error occurred during update.");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      setMessage("An unexpected error occurred.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-happy text-lg">
      <Navbar />
      <div className="flex justify-center items-center py-10">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">
          <div className="flex justify-center mb-6">
            <img
              src="https://i.namu.wiki/i/P0Wo_FxNXLiIP879hbjvTttcDZzOWtjNds_mu5Lofyim3oc4vncV2lMokmx1zcBhHmNmcWKVdcFGxUugYkKdsA.webp"
              alt="รูปโปรไฟล์"
              className="w-24 h-24 rounded-full object-cover"
            />
          </div>
          <form onSubmit={handleSubmit}>
            {message && (
              <div className="mb-4 text-center text-red-500 font-bold">
                {message}
              </div>
            )}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  placeholder={formData.firstName || "First Name"}
                  readOnly
                  className="w-full border bg-gray-100 text-gray-600 rounded-lg p-3 focus:outline-none cursor-not-allowed"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  placeholder={formData.lastName || "Last Name"}
                  readOnly
                  className="w-full border bg-gray-100 text-gray-600 rounded-lg p-3 focus:outline-none cursor-not-allowed"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Username</label>
              <input
                type="text"
                placeholder={formData.Username || "Display Name"}
                readOnly
                className="w-full border bg-gray-100 text-gray-600 rounded-lg p-3 focus:outline-none cursor-not-allowed"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                placeholder={formData.email || "Email"}
                readOnly
                className="w-full border bg-gray-100 text-gray-600 rounded-lg p-3 focus:outline-none cursor-not-allowed"
              />
            </div>
            <h2 className="font-bold text-xl mb-4">Password Change</h2>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Current Password</label>
              <input
                type="password"
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:outline-blue-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">New Password</label>
              <input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:outline-blue-400"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:outline-blue-400"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}