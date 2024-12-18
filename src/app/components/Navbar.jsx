// "use client"
// import React, { useState, useEffect, useRef } from 'react';
// import Link from 'next/link';
// import '../globals.css';
// import { useRouter } from "next/navigation";
// import { decodeToken } from '@/app/utils/auth';

// export function Navbar() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
<<<<<<< Updated upstream
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
=======
//   const [dropdownVisible, setDropdownVisible] = useState(null);
//   const router = useRouter();
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const checkToken = () => {
//       const decoded = decodeToken();
//       if (decoded) {
//         // console.log('Token decoded:', decoded);
//         setIsAuthenticated(true);
//       } else {
//         // console.log('No valid token');
//         setIsAuthenticated(false);
>>>>>>> Stashed changes
//       }
//     };

//     checkToken();
<<<<<<< Updated upstream
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
=======
//   }, []);

//   const handleNavigation = (path) => {
//     if (isAuthenticated) {
//       router.push(path);
//     } else {
//       router.push('/auth/login');
//     }
//   };

//   const toggleDropdown = (menu) => {
//     setDropdownVisible((prev) => (prev === menu ? null : menu));
//   };

//   const handleSignOut = () => {
//     localStorage.removeItem('token');
//     setIsAuthenticated(false);
//     router.push('/auth/login');
>>>>>>> Stashed changes
//   };

//   return (
//     <nav className="font-happy bg-[#2A2F6E] text-white py-2 border-b-8 border-orange-500 relative">
//       <div className="container mx-auto px-4 flex items-center justify-start">
//         <button onClick={() => handleNavigation('/home')} className="flex items-center gap-2 text-4xl font-bold mr-8 mt-2 z-20">
<<<<<<< Updated upstream
//         <img
=======

//           <img
>>>>>>> Stashed changes
//             src="/IMG/logo.png"
//             alt="Logo"
//             width={77}
//             height={87}
<<<<<<< Updated upstream
//             style={{ transform: 'scaleX(-1)' }}
//         />
=======
//             style={{ transform: "scaleX(-1)" }}
//           />
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
//                   onClick={() => handleNavigation('/support/how-it-works')}
=======
//                   onClick={() => handleNavigation('/support/HowTurboBidswork')}
>>>>>>> Stashed changes
//                   className="block px-4 py-2 hover:bg-gray-200"
//                 >
//                   How TurboBids work
//                 </button>
//                 <button
<<<<<<< Updated upstream
//                   onClick={() => handleNavigation('/support/faq')}
=======
//                   onClick={() => handleNavigation('/support/CommonQuession')}
>>>>>>> Stashed changes
//                   className="block px-4 py-2 hover:bg-gray-200"
//                 >
//                   Common Questions
//                 </button>
//                 <button
<<<<<<< Updated upstream
//                   onClick={() => handleNavigation('/support/terms')}
=======
//                   onClick={() => handleNavigation('/support/TermsofService')}
>>>>>>> Stashed changes
//                   className="block px-4 py-2 hover:bg-gray-200"
//                 >
//                   Terms of Service
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
<<<<<<< Updated upstream
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
=======

//         <div ref={dropdownRef} className="flex items-center ml-auto">
//         {isAuthenticated && (
//           <div className="flex items-center ml-auto relative">
//             <div className="relative">
//               <button onClick={() => toggleDropdown('notifications')} className="mr-4 hover:text-orange-400">
//                 <img src="/IMG/Noti.png" alt="Notifications" className="h-12 w-12" />
//               </button>
//               {dropdownVisible === 'notifications' && (
//                 <div className="absolute top-full right-0 mt-2 w-64 bg-gray-100 text-black rounded-md shadow-md p-4 z-20">
//                   {/* การแสดงรายการแจ้งเตือนภายใน Dropdown */}
//                   <div className="mt-2">
//                   <h3 className="text-lg font-bold">Lastest Notifications</h3>
//                     {/* การแจ้งเตือนที่ 1 (เปลี่ยนให้เป็นปุ่มที่พาไปหน้าคอนเฟิร์ม) */}
//                     <div className="flex items-center justify-center bg-gray-50 mb-2 rounded-lg p-4 shadow-sm">
//                       <button
//                         onClick={() => handleNavigation('/confirm')}  // เปลี่ยนเส้นทางไปที่หน้าคอนเฟิร์ม
//                         className="text-1xl text-gray-800 font-bold hover:text-blue-500 w-full text-center"
//                       >
//                         The auction has ended.<br />
//                         You are the winner!<br />
//                         Please click this message <br />
//                         to confirm your bid.
//                       </button>
//                     </div>

//                     {/* การแจ้งเตือนที่ 2 */}
//                     <div className="flex items-center justify-center bg-gray-50 mb-2 rounded-lg p-4 shadow-sm">
//                     <p className="text-1xl text-gray-800 w-full text-center">
//                       Auction is nearing its end.<br />
//                       45 minutes remaining!
//                     </p>
//                     </div>

//                     {/* การแจ้งเตือนที่ 3 */}
//                     <div className="flex items-center justify-center bg-gray-50 mb-2 rounded-lg p-4 shadow-sm">
//                       <p className="text-1xl text-gray-800 w-full text-center">
//                         An appraiser offers a higher price than you.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//              <div className="relative">
//                <button onClick={() => toggleDropdown('profile')} className="hover:text-orange-400">
//                  <img src="/IMG/Profile.png" alt="Profile" className="h-12 w-12" />
//                </button>
//                {dropdownVisible === 'profile' && (
//                 <div className="absolute top-full right-0 mt-2 w-64 bg-gray-100 text-black rounded-md shadow-md p-4 z-20">
//                   <h3 className="text-lg font-bold">Profile</h3>
//                   <button onClick={() => handleNavigation('/account')} className="text-1xl block px-4 py-2 hover:bg-gray-200">Account Setting</button>
//                   <button onClick={() => { router.push('/auth/signout'); }} className="block mt-2 px-4 py-2 bg-red-500 text-white rounded-md">Sign Out</button>
//                 </div>
//               )}
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
  const [menuOpen, setMenuOpen] = useState(false); // จัดการเมนูสำหรับหน้าจอเล็ก
=======
  const [menuOpen, setMenuOpen] = useState(false); // State สำหรับ Hamburger Menu
>>>>>>> Stashed changes
  const router = useRouter();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const checkToken = () => {
      const decoded = decodeToken();
<<<<<<< Updated upstream
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
=======
      setIsAuthenticated(!!decoded);
    };
    checkToken();
  }, []);

  const handleNavigation = (path) => {
    router.push(isAuthenticated ? path : "/auth/login");
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
      <div className="container mx-auto px-4 flex">
        {/* Logo */}
        <button
          onClick={() => handleNavigation("/home")}
          className="flex items-center gap-2 text-4xl font-bold pr-4"
=======
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavigation("/home")}
          className="flex items-center gap-2 text-4xl font-bold"
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
        {/* Hamburger menu สำหรับ mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl focus:outline-none"
=======
        <div className="flex items-center ml-auto md:hidden pr-2">
          <div ref={dropdownRef} className="flex items-center ml-auto">
            {isAuthenticated && (
              <div className="flex items-center ml-auto relative">
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown("notifications")}
                    className="mr-2 hover:text-orange-400"
                  >
                    <img
                      src="/IMG/Noti.png"
                      alt="Notifications"
                      className="h-9 w-9"
                    />
                  </button>
                  {dropdownVisible === "notifications" && (
                    <div className="absolute top-full right-0 mt-2 w-64 bg-gray-100 text-black rounded-md shadow-md p-4 z-20">
                      {/* การแสดงรายการแจ้งเตือนภายใน Dropdown */}
                      <div className="mt-2">
                        <h3 className="text-lg font-bold">
                          Lastest Notifications
                        </h3>
                        {/* การแจ้งเตือนที่ 1 (เปลี่ยนให้เป็นปุ่มที่พาไปหน้าคอนเฟิร์ม) */}
                        <div className="flex items-center justify-center bg-gray-50 mb-2 rounded-lg p-4 shadow-sm">
                          <button
                            onClick={() => handleNavigation("/confirm")} // เปลี่ยนเส้นทางไปที่หน้าคอนเฟิร์ม
                            className="text-1xl text-gray-800 font-bold hover:text-blue-500 w-full text-center"
                          >
                            The auction has ended.
                            <br />
                            You are the winner!
                            <br />
                            Please click this message <br />
                            to confirm your bid.
                          </button>
                        </div>

                        {/* การแจ้งเตือนที่ 2 */}
                        <div className="flex items-center justify-center bg-gray-50 mb-2 rounded-lg p-4 shadow-sm">
                          <p className="text-1xl text-gray-800 w-full text-center">
                            Auction is nearing its end.
                            <br />
                            45 minutes remaining!
                          </p>
                        </div>

                        {/* การแจ้งเตือนที่ 3 */}
                        <div className="flex items-center justify-center bg-gray-50 mb-2 rounded-lg p-4 shadow-sm">
                          <p className="text-1xl text-gray-800 w-full text-center">
                            An appraiser offers a higher price than you.
                          </p>
                        </div>
                      </div>
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
                      className="h-9 w-9"
                    />
                  </button>
                  {dropdownVisible === "profile" && (
                    <div className="absolute top-full right-0 mt-2 w-64 bg-gray-100 text-black rounded-md shadow-md p-4 z-20">
                      <h3 className="text-lg font-bold">Profile</h3>
                      <button
                        onClick={() => handleNavigation("/account")}
                        className="text-1xl block px-4 py-2 hover:bg-gray-200"
                      >
                        Account Setting
                      </button>
                      <button
                        onClick={() => {
                          router.push("/auth/signout");
                        }}
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

        {/* Hamburger Menu */}
        <button
          className="text-3xl md:hidden z-20"
          onClick={() => setMenuOpen((prev) => !prev)}
>>>>>>> Stashed changes
        >
          ☰
        </button>

<<<<<<< Updated upstream
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
=======
        {/* Links for larger screens */}
        <div
          className={`hidden md:flex gap-6 text-2xl mt-3 ml-6 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <button
            onClick={() => handleNavigation("/home")}
            className="hover:text-orange-400"
          >
            Home
          </button>
          <button
            onClick={() => handleNavigation("/favourite")}
            className="hover:text-orange-400"
          >
            Favourite
          </button>
          {/* Dropdown Menus */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("auction")}
              className="hover:text-orange-400"
>>>>>>> Stashed changes
            >
              Home
            </button>
<<<<<<< Updated upstream
=======
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
>>>>>>> Stashed changes

            <button
<<<<<<< Updated upstream
              onClick={() => handleNavigation("/favourite")}
              className="hover:text-orange- m-2"
=======
              onClick={() => toggleDropdown("support")}
              className="hover:text-orange-400"
>>>>>>> Stashed changes
            >
              Favourite
            </button>
<<<<<<< Updated upstream

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
=======
            {dropdownVisible === "support" && (
              <div className="absolute top-full left-0 bg-white text-black rounded-md shadow-md p-2 z-20">
                <button
                  onClick={() => handleNavigation("/support/HowTurboBidswork")}
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  How TurboBids work
                </button>
                <button
                  onClick={() => handleNavigation("/support/CommonQuession")}
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Common Questions
                </button>
                <button
                  onClick={() => handleNavigation("/support/TermsofService")}
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Terms of Service
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Profile & Notifications */}
        <div className="hidden md:flex items-center ml-auto">
          <div ref={dropdownRef} className="flex items-center ml-auto">
            {isAuthenticated && (
              <div className="flex items-center ml-auto relative">
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
                      {/* การแสดงรายการแจ้งเตือนภายใน Dropdown */}
                      <div className="mt-2">
                        <h3 className="text-lg font-bold">
                          Lastest Notifications
                        </h3>
                        {/* การแจ้งเตือนที่ 1 (เปลี่ยนให้เป็นปุ่มที่พาไปหน้าคอนเฟิร์ม) */}
                        <div className="flex items-center justify-center bg-gray-50 mb-2 rounded-lg p-4 shadow-sm">
                          <button
                            onClick={() => handleNavigation("/confirm")} // เปลี่ยนเส้นทางไปที่หน้าคอนเฟิร์ม
                            className="text-1xl text-gray-800 font-bold hover:text-blue-500 w-full text-center"
                          >
                            The auction has ended.
                            <br />
                            You are the winner!
                            <br />
                            Please click this message <br />
                            to confirm your bid.
                          </button>
                        </div>

                        {/* การแจ้งเตือนที่ 2 */}
                        <div className="flex items-center justify-center bg-gray-50 mb-2 rounded-lg p-4 shadow-sm">
                          <p className="text-1xl text-gray-800 w-full text-center">
                            Auction is nearing its end.
                            <br />
                            45 minutes remaining!
                          </p>
                        </div>

                        {/* การแจ้งเตือนที่ 3 */}
                        <div className="flex items-center justify-center bg-gray-50 mb-2 rounded-lg p-4 shadow-sm">
                          <p className="text-1xl text-gray-800 w-full text-center">
                            An appraiser offers a higher price than you.
                          </p>
                        </div>
                      </div>
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
                      <h3 className="text-lg font-bold">Profile</h3>
                      <button
                        onClick={() => handleNavigation("/account")}
                        className="text-1xl block px-4 py-2 hover:bg-gray-200"
                      >
                        Account Setting
                      </button>
                      <button
                        onClick={() => {
                          router.push("/auth/signout");
                        }}
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#2A2F6E] p-4">
          <button
            onClick={() => handleNavigation("/home")}
            className="block w-full text-left px-4 py-2 hover:bg-gray-700"
          >
            Home
          </button>
          <button
            onClick={() => handleNavigation("/favourite")}
            className="block w-full text-left px-4 py-2 hover:bg-gray-700"
          >
            Favourite
          </button>

          {/* Auction Dropdown */}
          <button
            onClick={() => toggleDropdown("auction")}
            className="block w-full text-left px-4 py-2 hover:bg-gray-700"
          >
            Auction
          </button>
          {dropdownVisible === "auction" && (
            <div className="pl-4">
              <button
                onClick={() => handleNavigation("/auction/today")}
                className="block px-4 py-2 hover:bg-gray-600"
              >
                Today's Auctions
              </button>
              <button
                onClick={() => handleNavigation("/auction/calendar")}
                className="block px-4 py-2 hover:bg-gray-600"
              >
                Auctions Calendar
              </button>
            </div>
          )}

          <button
            onClick={() => toggleDropdown("support")}
            className="block w-full text-left px-4 py-2 hover:bg-gray-700"
          >
            Support
          </button>
          {dropdownVisible === "support" && (
            <div className="pl-4">
              <button
                onClick={() => handleNavigation("/support/HowTurboBidswork")}
                className="block px-4 py-2 hover:bg-gray-600"
              >
                How TurboBids work
              </button>
              <button
                onClick={() => handleNavigation("/support/CommonQuession")}
                className="block px-4 py-2 hover:bg-gray-600"
              >
                Common Questions
              </button>
              <button
                onClick={() => handleNavigation("/support/TermsofService")}
                className="block px-4 py-2 hover:bg-gray-600"
              >
                Terms of Service
              </button>
>>>>>>> Stashed changes
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
      )}
    </nav>
  );
}

export default Navbar;
