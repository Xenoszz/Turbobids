"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CarCard from '../components/CarCard';
import { CarSearchForm } from "../components/Car_Home/CarSearchForm";
import { SearchButton } from "../components/Car_Home/SearchButton";
import { Star } from 'lucide-react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // นำเข้า styles ของ Carousel

export const carData = {
  brands: ["Toyota", "Honda", "BMW", "Mercedes", "Tesla"],
  types: ["Sedan", "SUV", "Sports Car", "Truck", "Van"],
  models: ["Model 3", "Camry", "X5", "Civic", "C-Class"],
  colors: ["Black", "White", "Red", "Blue", "Silver"]
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
      .post('http://localhost:9500/cars')
      .then((response) => {
        setCars(response.data);
      })
      .catch((err) => {
        setError('เกิดข้อผิดพลาดในการดึงข้อมูล');
      });

    // ดึงข้อมูลรีวิวจาก API
    axios
      .get('http://localhost:9500/api/reviews')
      .then((response) => {
        setReviews(response.data);
      })
      .catch((err) => {
        setError('เกิดข้อผิดพลาดในการดึงข้อมูลรีวิว');
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
    <div className='font-happy'>
      <Navbar />
      <div className='p-4 md:p-8'>
        <div className='max-w-5xl mx-auto text-3xl mt-10'>
          <h2>Search Your Car!</h2>
        </div>
        <div className='flex justify-center rounded-3xl max-w-6xl mx-auto bg-[#76A0FF]'>
          <div className='text-4xl mt-8 mb-8'>
            <CarSearchForm />
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <SearchButton onClick={handleSearch} />
        </div>
      </div>

      <div className="flex justify-center gap-20 mt-12 mb-24">
        {topCars.map((car) => (
          <CarCard
            key={car.car_ID}
            carImage={`/IMG/byd.JPG`}
            carModel={`${car.car_brand} ${car.car_model} ${car.car_rear}`}
            status={`Current Bid : $ ${car.current_bid} `}
            detailsLink={`/auction/detail/${car.car_ID}`}
            car_ID={car.car_ID}
            onFavoriteToggle={handleFavoriteToggle}
          />
        ))}
      </div>

      <div className='flex justify-center bg-[#2A2F6E] rounded-3xl mt-10 mb-10 ml-40 mr-40'>
        <div className='bg-white mt-8 mb-8 ml-6 px-6 py-8 rounded-3xl flex-col flex-1'>
          <h2 className="text-2xl font-bold">What is Turbobids?</h2>
          <h2 className="text-lg">
            Copart is a global leader in 100% online car auctions featuring used, wholesale and repairable vehicles. 
            We make it easy for Members to find, bid on, and win vehicles like classic cars, boats, repo cars, ATVs, exotics, motorcycles, and more.
          </h2>
        </div>

        <div className='bg-white mt-10 mb-10 ml-20 mr-20 px-6 py-4 rounded-3xl flex-col flex-1'> 
          <h2>ตัวอย่างรีวิวที่เราได้รับจากลูกค้าจริง</h2>
          {reviews.length > 0 ? (
            <Carousel 
              autoPlay 
              infiniteLoop 
              interval={3000} 
              showArrows={false}  // เอาลูกศรออก
              showStatus={false}  // เอา 3 of 3 ออก
              dynamicHeight={false} // เลี่ยงการเปลี่ยนแปลงขนาดแบบ dynamic
              swipeable={true}     // เปิดการเลื่อนแบบ swipe
            >
              {reviews.map((review) => (
                <div key={review.review_ID} className='bg-orange-200 rounded-3xl mt-2 mb-10 px-4 py-2'>
                  <div className='flex'>
                    <h2>{review.Username}</h2>
                    <div className='flex ml-10'>
                      {/* แสดงดาวตามคะแนน */}
                      {[...Array(review.review_rating)].map((_, index) => (
                        <Star key={index} size={20} color="#f27f21" strokeWidth={3} />
                      ))}
                    </div>
                  </div>
                  <div className='mt-4 space-y-4'>
                    <h2 className="text-lg font-medium">{review.car_brand} {review.car_model} {review.car_year}</h2>
                    <h2 className="text-sm" >{new Date(review.review_date).toLocaleDateString()}</h2>
                    <p className="text-md">{review.review_comment}</p> {/* แสดงคอมเมนต์จากฐานข้อมูล */}
                  </div>
                </div>
              ))}
            </Carousel>
          ) : (
            <h2>ไม่มีรีวิวในขณะนี้</h2>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Page;
