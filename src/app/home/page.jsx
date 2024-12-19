"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CarCard from "../components/CarCard";
import { CarSearchForm } from "../components/Car_Home/CarSearchForm";
import { SearchButton } from "../components/Car_Home/SearchButton";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // นำเข้า styles ของ Carousel

export const carData = {
  brands: ["Toyota", "Honda", "BMW", "Mercedes", "Tesla"],
  types: ["Sedan", "SUV", "Sports Car", "Truck", "Van"],
  models: ["Model 3", "Camry", "X5", "Civic", "C-Class"],
  colors: ["Black", "White", "Red", "Blue", "Silver"],
};

function Page() {
  const router = useRouter();
  const [cars, setCars] = useState([]);
  const [reviews, setReviews] = useState([]); // State สำหรับเก็บรีวิว
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState({});
  const [searchParams, setSearchParams] = useState({});

  const handleSearch = () => {
    const query = new URLSearchParams(searchParams).toString();
    router.push(`/auction/today?${query}`);
  };

  useEffect(() => {
    // ดึงข้อมูลรถจาก API
    axios
      .post("http://localhost:9500/cars")
      .then((response) => {
        setCars(response.data);
      })
      .catch(() => {
        setError("เกิดข้อผิดพลาดในการดึงข้อมูล");
      });

    // ดึงข้อมูลรีวิวจาก API
    axios
      .get("http://localhost:9500/api/reviews")
      .then((response) => {
        setReviews(response.data);
      })
      .catch(() => {
        setError("เกิดข้อผิดพลาดในการดึงข้อมูลรีวิว");
      });
  }, []);

  const sortedCars = cars.sort((a, b) => b.car_rating - a.car_rating);
  const topCars = sortedCars.slice(0, 4);

  const handleFavoriteToggle = (car_ID, isFavorited) => {
    setFavorites((prev) => ({
      ...prev,
      [car_ID]: isFavorited,
    }));
  };

  return (
    <div className="font-happy">
      <Navbar />
      {/* Search Section */}
      <div className="p-4 md:p-8">
        <div className="max-w-5xl mx-auto text-2xl sm:text-3xl mt-10">
          <h2>Search Your Car!</h2>
        </div>
        <div className="flex flex-col items-center bg-[#76A0FF] rounded-3xl max-w-6xl mx-auto p-6">
          <CarSearchForm />
        </div>
        <div className="mt-6 flex justify-center">
          <SearchButton onClick={handleSearch} />
        </div>
      </div>

      {/* Top Cars Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 mt-12 mb-24">
        {topCars.map((car) => (
          <CarCard
            key={car.car_ID}
            carImage={`/IMG/byd.JPG`}
            carModel={`${car.car_brand} ${car.car_model} ${car.car_rear}`}
            status={`Current Bid : $ ${car.current_bid}`}
            detailsLink={`/auction/detail/${car.car_ID}`}
            car_ID={car.car_ID}
            onFavoriteToggle={handleFavoriteToggle}
          />
        ))}
      </div>

      {/* About and Reviews Section */}
      <div className="flex flex-col lg:flex-row gap-6 justify-center bg-[#2A2F6E] rounded-3xl mt-10 mb-10 p-6 lg:p-10">
        {/* About Section */}
        <div className="bg-white p-6 rounded-3xl flex-1">
          <h2 className="text-3xl font-semibold">What is Turbobids?</h2>
            <p className="mt-4 text-xl leading-relaxed">
            Turbobids is a global leader in 100% online car auctions featuring
            used, wholesale and repairable vehicles. We make it easy for
            Members to find, bid on, and win vehicles like classic cars, boats,
            repo cars, ATVs, exotics, motorcycles and more.
            Turbobids car auctions have something for everyone used car buyers,
            dismantlers, dealers, body shops and individuals.
            We even have “No License Required” vehicles available to individuals in public auto
            auctions. We feature clean & salvage title cars, SUVs 
            heavy equipment & more in live online auto auctions every weekday.
            As a global used car auction company, Turbobids puts
            the power to bid and win into your hands. Sign up for a Basic or
            Premier Membership to start bidding and winning used car auctions.
          </p>
        </div>

        {/* Reviews Section */}
        <div className="bg-white p-6 rounded-3xl flex-1">
          <h2 className="text-3xl font-semibold">ตัวอย่างรีวิวที่เราได้รับจากลูกค้าจริง</h2>
          {reviews.length > 0 ? (
            <Carousel
              autoPlay
              infiniteLoop
              interval={2000}
              showArrows={false}
              showStatus={false}
              dynamicHeight={false}
              swipeable={true}
            >
              {reviews.map((review) => (
                <div
                  key={review.review_ID}
                  className="bg-orange-200 p-3 rounded-3xl mt-6 py-10"
                >
                  <div className="flex items-center text-3xl mt-2 text-left">
                    <h2 className="mr-2">{review.Username}</h2>
                    <div className="flex items-center gap-1">
                      {[...Array(review.review_rating)].map((_, index) => (
                        <img
                          key={index}
                          src="https://cdn-icons-png.flaticon.com/128/9284/9284014.png"
                          alt="star"
                          className="w-6 h-6"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 space-y-4">
                    <h2 className="text-[1.375rem] mt-2 text-left">
                      {review.car_brand} {review.car_model} {review.car_year} -{" "}
                      {new Date(review.review_date).toLocaleDateString()}
                    </h2>
                    <p className="text-[1.375rem] mt-2 text-left">
                      {review.review_comment}
                    </p>
                  </div>
                </div>
              ))}
            </Carousel>
          ) : (
            <h2 className="text-center">ไม่มีรีวิวในขณะนี้</h2>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Page;