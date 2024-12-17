// "use client"

// import React, { useRef } from 'react';
// import Link from 'next/link';
// import Navbar from '../app/components/Navbar'
// import Footer from '../app/components/Footer'
// import CarCard  from '../app/components/CarCard';
// import '../app/globals.css';
// import { Star } from 'lucide-react';

// function page() {
  
//   const scrollRef = useRef(null);

//   const scroll = (direction) => {
//     const container = scrollRef.current;
//     if (direction === 'left') {
//       container.scrollBy({ left: -300, behavior: 'smooth' });
//     } else {
//       container.scrollBy({ left: 300, behavior: 'smooth' });
//     }
//   };

//   return (
    
//     <div className='font-happy'>
//       <div>
//         <Navbar />
//       </div>


//         <div className='flex justify-center'>
//           <div className='text-4xl mt-10'>
//             <h1>Discover Your Next Car at Auction Today!</h1>
//               <div className='mt-16 mb-16 border-b-4 border-black rounded-full'></div>
//                 <div className='flex justify-center gap-20 mt-8 mb-8'>
//                   <Link href="/auth/register">
//                   <button type="submit" className="bg-orange-500 text-white py-3 px-12 text-lg rounded-full hover:bg-blue-600 ">Register</button>
//                   </Link>
//                   <Link href="/auth/login">
//                   <button type="submit" className="bg-[#2A2F6E] text-white py-3 px-12 text-lg rounded-full hover:bg-blue-600 ">Sign in</button>
//                   </Link>
//                 </div>
//               </div>
//           </div>

//         <div className="flex justify-center gap-20 mt-12 mb-24">
//         <CarCard
//           carImage="https://via.placeholder.com/400x300?text=Car+Image"
//           carModel="Toyota Camry 2020"
//           status="Bidding"
//           countdownTime={3600}
//           detailsLink="/car-details/1"
//         />
//         <CarCard
//           carImage="https://via.placeholder.com/400x300?text=Car+Image"
//           carModel="Honda Accord 2021"
//           status="Closed"
//           countdownTime={1800}
//           detailsLink="/car-details/2"
//         />
//         <CarCard
//           carImage="https://via.placeholder.com/400x300?text=Car+Image"
//           carModel="BMW 3 Series 2022"
//           status="Bidding"
//           countdownTime={5400}
//           detailsLink="/car-details/3"
//         />
//         <CarCard
//           carImage="https://via.placeholder.com/400x300?text=Car+Image"
//           carModel="Audi A4 2021"
//           status="Bidding"
//           countdownTime={7200}
//           detailsLink="/car-details/4"
//         />
//       </div>


//           <div className='flex justify-center bg-[#2A2F6E] rounded-3xl mt-10 mb-10 ml-40 mr-40'>
//             <div className='bg-white mt-8 mb-8 ml-6 px-6 py-4 rounded-3xl flex-col flex-1'>
//                 <h2>What is Turbobids? </h2>
//                 <h2>Copart is a global leader in 100% online car auctions featuring used, wholesale and repairable vehicles. 
//                 We make it easy for Members to find, bid on, and win vehicles like classic car, boats, repo cars, ATVs, exotics, motorcycles and more. 
//                 Copart car auctions have something for everyone — used car buyers, dismantlers, dealers, body shops and individuals. We even have “No License Required” 
//                 vehicles available to individuals in public_auto auctions. We feature clean & salvage title cars, trucks, SUVs, motorcycles, heavy equipment & more in live 
//                 online auto auctions every weekday. As a global used car auction company, Copart puts the power to bid and win into your hands. Sign up for a Basic or Premier 
//                 Membership to start bidding and winning used car auctions.
//                 </h2>
//             </div>

//             <div className='bg-white mt-10 mb-10 ml-20 mr-20 px-6 py-4 rounded-3xl flex-col flex-1'>
//                 <h2>ตัวอย่างรีวิวที่เราได้รับจากลูกค้าจริง</h2>
//                 <div className='bg-orange-200 rounded-3xl mt-2 mb-10 px-6 py-2 '>
//                   <div className='flex'>
//                     <h2>เสนอส สุดหล่อท่อดัง</h2>
//                       <div className='flex ml-10'>                    
//                         <Star size={20} color="#f27f21" strokeWidth={3} absoluteStrokeWidth />
//                         <Star size={20} color="#f27f21" strokeWidth={3} absoluteStrokeWidth />
//                         <Star size={20} color="#f27f21" strokeWidth={3} absoluteStrokeWidth />
//                         <Star size={20} color="#f27f21" strokeWidth={3} absoluteStrokeWidth />
//                         <Star size={20} color="#f27f21" strokeWidth={3} absoluteStrokeWidth />
//                       </div>
//                   </div>
//                     <div className='mt-4 space-y-4'>                   
//                         <h2>Honda Accord 2021</h2>
//                         <h2>13 OCT 2024</h2>
//                         <h2>บริการดีมากครับ รถสวยถูกใจ เงินในเป๋าแห้งเหือด ผมซื้อรถคันนี้แล้วชอบมากเลยครับ</h2>
//                     </div>

//                 </div>
//             </div>

//           </div>



  


//       <div>
//         <Footer />
//       </div>
//     </div>
//   )
// }

// export default page



"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";
import CarCard from "../app/components/CarCard";
import "../app/globals.css";
import { Star } from "lucide-react";

function page() {

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (direction === "left") {
      container.scrollBy({ left: -300, behavior: "smooth" });
    } else {
      container.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="font-happy">
      <div>
        <Navbar />
      </div>

      <div className="flex justify-center text-center px-4">
        <div className="text-2xl md:text-4xl mt-10">
          <h1>Discover Your Next Car at Auction Today!</h1>
          <div className="mt-4 md:mt-16 mb-4 md:mb-16 border-b-4 border-black rounded-full w-full mx-auto"></div>
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-20 mt-8 mb-8">
            <Link href="/auth/register">
              <button className="bg-orange-500 text-white py-3 px-6 md:px-12 text-sm md:text-lg rounded-full hover:bg-blue-600">
                Register
              </button>
            </Link>
            <Link href="/auth/login">
              <button className="bg-[#2A2F6E] text-white py-3 px-6 md:px-12 text-sm md:text-lg rounded-full hover:bg-blue-600">
                Sign in
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-12 lg:px-20 mt-12 mb-24">
        <CarCard
          carImage="https://via.placeholder.com/400x300?text=Car+Image"
          carModel="Toyota Camry 2020"
          status="Bidding"
          countdownTime={3600}
          detailsLink="/car-details/1"
        />
        <CarCard
          carImage="https://via.placeholder.com/400x300?text=Car+Image"
          carModel="Honda Accord 2021"
          status="Closed"
          countdownTime={1800}
          detailsLink="/car-details/2"
        />
        <CarCard
          carImage="https://via.placeholder.com/400x300?text=Car+Image"
          carModel="BMW 3 Series 2022"
          status="Bidding"
          countdownTime={5400}
          detailsLink="/car-details/3"
        />
        <CarCard
          carImage="https://via.placeholder.com/400x300?text=Car+Image"
          carModel="Audi A4 2021"
          status="Bidding"
          countdownTime={7200}
          detailsLink="/car-details/4"
        />
      </div>

      <div className="flex flex-col lg:flex-row justify-center gap-8 px-4 lg:px-40 bg-[#2A2F6E] rounded-3xl mt-10 mb-10">
        <div className="bg-white mt-8 mb-8 px-6 py-4 rounded-3xl flex-1">
          <h2 className="text-lg font-bold mb-4">What is Turbobids?</h2>
          <p>
            Copart is a global leader in 100% online car auctions featuring used,
            wholesale and repairable vehicles. We make it easy for Members to find,
            bid on, and win vehicles like classic cars, boats, repo cars, ATVs,
            exotics, motorcycles, and more.
          </p>
        </div>

        <div className="bg-white mt-10 mb-10 px-6 py-4 rounded-3xl flex-1">
          <h2 className="text-lg font-bold">ตัวอย่างรีวิวที่เราได้รับจากลูกค้าจริง</h2>
          <div className="bg-orange-200 rounded-3xl mt-4 px-6 py-4">
            <div className="flex justify-between items-center">
              <h2>เสนอส สุดหล่อท่อดัง</h2>
              <div className="flex gap-1">
                <Star size={20} color="#f27f21" strokeWidth={3} />
                <Star size={20} color="#f27f21" strokeWidth={3} />
                <Star size={20} color="#f27f21" strokeWidth={3} />
                <Star size={20} color="#f27f21" strokeWidth={3} />
                <Star size={20} color="#f27f21" strokeWidth={3} />
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <h2>Honda Accord 2021</h2>
              <h2>13 OCT 2024</h2>
              <p>
                บริการดีมากครับ รถสวยถูกใจ เงินในเป๋าแห้งเหือด ผมซื้อรถคันนี้แล้วชอบมากเลยครับ
              </p>
            </div>
          </div>
        </div>
      </div>
        
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default page;
