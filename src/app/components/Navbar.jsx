// "use client"
// import React, { useState, useEffect, useRef } from 'react';
// import Link from 'next/link';
// import '../globals.css';
// import { useRouter } from "next/navigation";
// import { decodeToken } from '@/app/utils/auth';

// export function Navbar() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [dropdownVisible, setDropdownVisible] = useState(null); // สำหรับจัดการ dropdown
//   const router = useRouter();
//   const dropdownRef = useRef(null);

//   // ตรวจสอบ token ทุกครั้งที่คอมโพเนนต์โหลด
//   useEffect(() => {
//     const checkToken = () => {
//       const decoded = decodeToken();  // ใช้ decodeToken เพื่อดึงข้อมูล token
//       if (decoded) {
//         console.log('Token decoded:', decoded);
//         setIsAuthenticated(true);  // ถ้ามี token หรือ token ยังไม่หมดอายุ
//       } else {
//         console.log('No valid token');
//         setIsAuthenticated(true);  // ไม่มี token หรือ token หมดอายุ
//       }
//     };

//     checkToken();
//   }, []);  // ใช้ [] เพื่อให้ useEffect ทำงานแค่ครั้งเดียวเมื่อคอมโพเนนต์โหลด

//   // ฟังก์ชันที่ใช้ในการนำทาง
//   const handleNavigation = (path) => {
//     if (isAuthenticated) {
//       router.push(path); // ถ้า user authentication ผ่าน, ไปที่ path ที่กำหนด
//     } else {
//       router.push('/auth/login'); // ถ้า user ยังไม่เข้าสู่ระบบ, ไปหน้า login
//     }
//   };

//   // ฟังก์ชันจัดการ dropdown visibility
//   const toggleDropdown = (menu) => {
//     setDropdownVisible((prev) => (prev === menu ? null : menu)); // เปิด/ปิด dropdown
//   };

//   // ฟังก์ชันจัดการการออกจากระบบ (Sign Out)
//   const handleSignOut = () => {
//     localStorage.removeItem('token'); // ลบ token
//     setIsAuthenticated(false); // อัปเดตสถานะการล็อกอิน
//     router.push('/auth/login'); // ไปหน้า login
//   };

//   return (
//     <nav className="font-happy bg-[#2A2F6E] text-white py-2 border-b-8 border-orange-500 relative">
//       <div className="container mx-auto px-4 flex items-center justify-start">
//         <button onClick={() => handleNavigation('/home')} className="flex items-center gap-2 text-4xl font-bold mr-8 mt-2 z-20">
//         <img
//             src="/IMG/logo.png"
//             alt="Logo"
//             width={77}
//             height={87}
//             style={{ transform: 'scaleX(-1)' }}
//         />

//           TurboBids
//         </button>

//         <div className="flex gap-6 text-2xl mt-3 ml-6 relative">
//           <button
//             onClick={() => handleNavigation('/home')}
//             className="hover:text-orange-400"
//           >
//             Home
//           </button>

//           <button
//             onClick={() => handleNavigation('/favourite')}
//             className="hover:text-orange-400"
//           >
//             Favourite
//           </button>

//           <div className="relative">
//             <button
//               onClick={() => toggleDropdown('auction')}
//               className="hover:text-orange-400"
//             >
//               Auction
//             </button>
//             {dropdownVisible === 'auction' && (
//               <div className="absolute top-full left-0 bg-white text-black rounded-md shadow-md p-2 z-20">
//                 <button
//                   onClick={() => handleNavigation('/auction/today')}
//                   className="block px-4 py-2 hover:bg-gray-200"
//                 >
//                   Today's Auctions
//                 </button>
//                 <button
//                   onClick={() => handleNavigation('/auction/calendar')}
//                   className="block px-4 py-2 hover:bg-gray-200"
//                 >
//                   Auctions Calendar
//                 </button>
//               </div>
//             )}
//           </div>

//           <div className="relative">
//             <button
//               onClick={() => toggleDropdown('support')}
//               className="hover:text-orange-400"
//             >
//               Support
//             </button>
//             {dropdownVisible === 'support' && (
//               <div className="absolute top-full left-0 bg-white text-black rounded-md shadow-md p-2 z-20">
//                 <button
//                   onClick={() => handleNavigation('/support/how-it-works')}
//                   className="block px-4 py-2 hover:bg-gray-200"
//                 >
//                   How TurboBids work
//                 </button>
//                 <button
//                   onClick={() => handleNavigation('/support/faq')}
//                   className="block px-4 py-2 hover:bg-gray-200"
//                 >
//                   Common Questions
//                 </button>
//                 <button
//                   onClick={() => handleNavigation('/support/terms')}
//                   className="block px-4 py-2 hover:bg-gray-200"
//                 >
//                   Terms of Service
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//         <div ref={dropdownRef} className="flex items-center ml-auto">
//           {isAuthenticated && (
//             <div className="flex items-center ml-auto relative">
//               <div className="relative">
//                 <button onClick={() => toggleDropdown('notifications')} className="mr-4 hover:text-orange-400">
//                   <img src="/IMG/Noti.png" alt="Notifications" className="h-12 w-12" />
//                 </button>
//                 {dropdownVisible === 'notifications' && (
//                   <div className="absolute top-full right-0 mt-2 w-64 bg-gray-100 text-black rounded-md shadow-md p-4 z-20">
//                     <h3 className="font-bold">Latest notification</h3>
//                     {/* รายการ Notification */}
//                     <div>Your notifications here...</div>
//                   </div>
//                 )}
//               </div>
//               <div className="relative">
//                 <button onClick={() => toggleDropdown('profile')} className="hover:text-orange-400">
//                   <img src="/IMG/Profile.png" alt="Profile" className="h-12 w-12" />
//                 </button>
//                 {dropdownVisible === 'profile' && (
//                   <div className="absolute top-full right-0 mt-2 w-64 bg-gray-100 text-black rounded-md shadow-md p-4 z-20">
//                     <h3 className="font-bold">Profile</h3>
//                     <button onClick={() => handleNavigation('/account')} className="block px-4 py-2 hover:bg-gray-200">Account</button>
//                     <button onClick={() => handleNavigation('/settings')} className="block px-4 py-2 hover:bg-gray-200">Setting</button>
//                     <button onClick={handleSignOut} className="block mt-2 px-4 py-2 bg-red-500 text-white rounded-md">Sign Out</button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import "../globals.css";
import { useRouter } from "next/navigation";
import { decodeToken } from "@/app/utils/auth";

export function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // จัดการเมนูสำหรับหน้าจอเล็ก
  const router = useRouter();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const checkToken = () => {
      const decoded = decodeToken();
      if (decoded) {
        console.log("Token decoded:", decoded);
        setIsAuthenticated(true);
      } else {
        console.log("No valid token");
        setIsAuthenticated(true);
      }
    };

    checkToken();
  }, []);

  const handleNavigation = (path) => {
    if (isAuthenticated) {
      router.push(path);
    } else {
      router.push("/auth/login");
    }
  };

  const toggleDropdown = (menu) => {
    setDropdownVisible((prev) => (prev === menu ? null : menu));
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    router.push("/auth/login");
  };

  return (
    <nav className="font-happy bg-[#2A2F6E] text-white py-2 border-b-8 border-orange-500 relative">
      <div className="container mx-auto px-4 flex">
        {/* Logo */}
        <button
          onClick={() => handleNavigation("/home")}
          className="flex items-center gap-2 text-4xl font-bold pr-4"
        >
          <img
            src="/IMG/logo.png"
            alt="Logo"
            width={77}
            height={87}
            style={{ transform: "scaleX(-1)" }}
          />
          TurboBids
        </button>

        {/* Hamburger menu สำหรับ mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl focus:outline-none"
        >
          ☰
        </button>

        {/* Menu Items */}
        <div
          className={`${menuOpen ? "flex" : "hidden"} 
            md:flex gap-6 text-2xl items-center mt-3 md:mt-0 w-full 
            ${menuOpen? 
              "absolute flex flex-column mt-5 top-20 bg-blue-200 h-72 w-full text-black z-10 left-0 pt-3"
              : "relative"
            }`}
        >
          <div className=" pl-8 flex  w-11/12 p">
            <button
              onClick={() => handleNavigation("/home")}
              className="hover:text-orange-400 m-2"
            >
              Home
            </button>

            <button
              onClick={() => handleNavigation("/favourite")}
              className="hover:text-orange- m-2"
            >
              Favourite
            </button>

            {/* Auction Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("auction")}
                className="hover:text-orange-400 m-2"
              >
                Auction
              </button>
              {dropdownVisible === "auction" && (
                <div className="absolute top-full left-0 bg-white text-black rounded-md shadow-md p-2 z-20">
                  <button
                    onClick={() => handleNavigation("/auction/today")}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Today's Auctions
                  </button>
                  <button
                    onClick={() => handleNavigation("/auction/calendar")}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Auctions Calendar
                  </button>
                </div>
              )}
            </div>

            {/* Support Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("support")}
                className="hover:text-orange-400 m-2"
              >
                Support
              </button>
              {dropdownVisible === "support" && (
                <div className="absolute top-full left-0 bg-white text-black rounded-md shadow-md p-2 z-20">
                  <button
                    onClick={() => handleNavigation("/support/how-it-works")}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    How TurboBids work
                  </button>
                  <button
                    onClick={() => handleNavigation("/support/faq")}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Common Questions
                  </button>
                  <button
                    onClick={() => handleNavigation("/support/terms")}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Terms of Service
                  </button>
                </div>
              )}
            </div>
          </div>
          {/* Auth and Profile */}
          <div className="flex items-center">
            {isAuthenticated && (
              <div
                className={`${
                  menuOpen
                    ? "absolute flex justify-center mt-5 top-48 h-56 w-full text-black z-10 left-0 pt-3"
                    : "flex items-center ml-auto relative"
                }`}
              >
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown("notifications")}
                    className="mr-4 hover:text-orange-400"
                  >
                    <img
                      src="/IMG/Noti.png"
                      alt="Notifications"
                      className="h-12 w-12"
                    />
                  </button>
                  {dropdownVisible === "notifications" && (
                    <div className="absolute top-full right-0 mt-2 w-64 bg-gray-100 text-black rounded-md shadow-md p-4 z-20">
                      <h3 className="font-bold">Latest notification</h3>
                      <div>Your notifications here...</div>
                    </div>
                  )}
                </div>
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown("profile")}
                    className="hover:text-orange-400"
                  >
                    <img
                      src="/IMG/Profile.png"
                      alt="Profile"
                      className="h-12 w-12"
                    />
                  </button>
                  {dropdownVisible === "profile" && (
                    <div className="absolute top-full right-0 mt-2 w-64 bg-gray-100 text-black rounded-md shadow-md p-4 z-20">
                      <h3 className="font-bold">Profile</h3>
                      <button
                        onClick={() => handleNavigation("/account")}
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        Account
                      </button>
                      <button
                        onClick={() => handleNavigation("/settings")}
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        Setting
                      </button>
                      <button
                        onClick={handleSignOut}
                        className="block mt-2 px-4 py-2 bg-red-500 text-white rounded-md"
                      >
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
