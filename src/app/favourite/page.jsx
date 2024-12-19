"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../globals.css';
import { getUserIdFromToken } from '@/app/utils/auth';  

export default function FavoritePage() {
  const [favorites, setFavorites] = useState([]);
  const [sortOption, setSortOption] = useState(null);
  const [isSortingMenuOpen, setIsSortingMenuOpen] = useState(false);
  const userID = getUserIdFromToken(); 



  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.post('http://localhost:9500/showfavorite', {
          userID: userID, 
        });
        setFavorites(response.data);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };

    if (userID) {
      fetchFavorites();
    }
  }, [userID]);


  const getSortedCars = () => {
    let sortedCars = [...favorites];

    switch (sortOption) {
      case 'Year Ascending':
        sortedCars.sort((a, b) => a.car_year - b.car_year);
        break;
      case 'Year Descending':
        sortedCars.sort((a, b) => b.car_year - a.car_year);
        break;
      case 'Price Ascending':
        sortedCars.sort((a, b) => parseFloat(a.current_bid) - parseFloat(b.current_bid));
        break;
      case 'Price Descending':
        sortedCars.sort((a, b) => parseFloat(b.current_bid) - parseFloat(a.current_bid));
        break;
      default:
        break;
    }

    return sortedCars;
  };

  const sortedCars = getSortedCars();

  return (
    <div className="min-h-screen bg-gray-50 font-happy">
      <Navbar />
      <div className="max-w-7xl mx-auto py-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Favourite ({favorites.length})</h1>
          <div className="relative">
            <button
              onClick={() => setIsSortingMenuOpen(!isSortingMenuOpen)}
              className="bg-gray-200 px-4 py-2 rounded-lg"
            >
              Sorting
            </button>
            {isSortingMenuOpen && (
              <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg w-48">
                <button
                  onClick={() => { setSortOption('Year Ascending'); setIsSortingMenuOpen(false); }}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  Year Ascending
                </button>
                <button
                  onClick={() => { setSortOption('Year Descending'); setIsSortingMenuOpen(false); }}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  Year Descending
                </button>
                <button
                  onClick={() => { setSortOption('Price Ascending'); setIsSortingMenuOpen(false); }}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  Price Ascending
                </button>
                <button
                  onClick={() => { setSortOption('Price Descending'); setIsSortingMenuOpen(false); }}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  Price Descending
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedCars.map((car, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src={car.image || "/IMG/catcar.jpg"}
                alt={`Car ${car.car_year} ${car.car_model}`}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{`${car.car_year} ${car.car_brand} ${car.car_model}`}</h3>
                <p className="text-sm text-gray-500">Details: {car.car_details}</p>
                <p className="text-sm text-gray-500">Status: {car.car_status}</p>
                <p className="text-lg font-semibold text-gray-900">Current Bid: {car.current_bid} $</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
