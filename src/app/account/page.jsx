"use client";

import React, { useState } from "react";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import "../globals.css";

export default function AccountSetting() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    displayName: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saved Data:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-happy text-lg">
      {/* Navbar */}
      <Navbar />
      <div className="flex justify-center items-center py-10">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">
          {/* Profile Image */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 focus:outline-blue-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 focus:outline-blue-400"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Display Name</label>
              <input
                type="text"
                name="displayName"
                value={formData.displayName}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:outline-blue-400"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:outline-blue-400"
              />
            </div>

            {/* Password Change Section */}
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

            {/* Save Button */}
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

      {/* Footer */}
      <Footer />
    </div>
  );
}