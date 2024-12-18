"use client"
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import '../globals.css';
import { useRouter } from "next/navigation";

export function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(null); // สำหรับจัดการ dropdown
  const router = useRouter();
  const dropdownRef = useRef(null);


  //ตรวจสอบสถานะการล็อกอิน
  useEffect(() => {
    //Mongo
//     const checkAuth = async () => {
//       try {
//         const res = await fetch('http://localhost:5000/api/protected', {
//           method: 'GET',
//           credentials: 'include',
//         });

//         if (res.ok) {
//           const data = await res.json();
//           console.log('User authenticated:', data.user);
//           setIsAuthenticated(true);
//         } else {
//           console.log('Authentication failed');
//           setIsAuthenticated(false);
//         }
//       } catch (error) {
//         console.error('Error verifying auth:', error);
//         setIsAuthenticated(false);
//       }
//     };
// }, []);

    //Sql
    const checkAuth = async () => {
      try {
        const res = await fetch('http://localhost:9500/api/protected', {
          method: 'GET',
          credentials: 'include',
        });

        if (res.ok) {
          const data = await res.json();
          console.log('User authenticated:', data.user);
          setIsAuthenticated(true);
        } else {
          console.log('Authentication failed');
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Error verifying auth:', error);
        setIsAuthenticated(true);
      }
    };
    checkAuth();
  }, []);

  const handleNavigation = (path) => {
    if (isAuthenticated) {
      router.push(path);
    } else {
      // router.push('/auth/login');
      router.push(path); //Bypass
      
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (menu) => {
    setDropdownVisible((prev) => (prev === menu ? null : menu)); // เปิด/ปิด dropdown
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(null);
    }
  };

  return (
    <nav className="font-happy bg-[#2A2F6E] text-white py-2 border-b-8 border-orange-500 relative">
      <div className="container mx-auto px-4 flex items-center justify-start">
        <button onClick={() => handleNavigation('/home')} className="flex items-center gap-2 text-4xl font-bold mr-8 mt-2 z-20">
          TurboBids
        </button>

        <div className="flex gap-6 text-2xl mt-3 ml-6 relative">
          <button
            onClick={() => handleNavigation('/home')}
            className="hover:text-orange-400"
          >
            Home
          </button>

          <button
            onClick={() => handleNavigation('/favourite')}
            className="hover:text-orange-400"
          >
            Favourite
          </button>

          <div className="relative">
            <button
              onClick={() => toggleDropdown('auction')}
              className="hover:text-orange-400"
            >
              Auction
            </button>
            {dropdownVisible === 'auction' && (
              <div className="absolute top-full left-0 bg-white text-black rounded-md shadow-md p-2 z-20">
                <button
                  onClick={() => handleNavigation('/auction/today')}
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Today's Auctions
                </button>
                <button
                  onClick={() => handleNavigation('/auction/calendar')}
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Auctions Calendar
                </button>
              </div>
            )}
          </div>

          {/* Dropdown Support */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => toggleDropdown("support")}
              className="hover:text-orange-400"
            >
              Support
            </button>
            {dropdownVisible === "support" && (
              <div className="absolute top-full left-0 bg-white text-black rounded-md shadow-md p-2">
                <button
                  onClick={() => handleNavigation("/support/HowTurboBidswork")}
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  How TurboBids Work
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
        
        <div ref={dropdownRef} className="flex items-center ml-auto">
        {isAuthenticated && (
          <div className="flex items-center ml-auto relative">
            <div className="relative">
              <button onClick={() => toggleDropdown('notifications')} className="mr-4 hover:text-orange-400">
                <img src="/IMG/Noti.png" alt="Notifications" className="h-12 w-12" />
              </button>
              {dropdownVisible === 'notifications' && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-gray-100 text-black rounded-md shadow-md p-4 z-20">
                  {/* การแสดงรายการแจ้งเตือนภายใน Dropdown */}
                  <div className="mt-2">
                  <h3 className="text-lg font-bold">Lastest Notifications</h3>
                    {/* การแจ้งเตือนที่ 1 (เปลี่ยนให้เป็นปุ่มที่พาไปหน้าคอนเฟิร์ม) */}
                    <div className="flex items-center justify-center bg-gray-50 mb-2 rounded-lg p-4 shadow-sm">
                      <button
                        onClick={() => handleNavigation('/confirm')}  // เปลี่ยนเส้นทางไปที่หน้าคอนเฟิร์ม
                        className="text-1xl text-gray-800 font-bold hover:text-blue-500 w-full text-center"
                      >
                        The auction has ended.<br /> 
                        You are the winner.<br />
                        Please click this message <br />
                        to confirm your bid.
                      </button>
                    </div>

                    {/* การแจ้งเตือนที่ 2 */}
                    <div className="flex items-center justify-center bg-gray-50 mb-2 rounded-lg p-4 shadow-sm">
                    <p className="text-1xl text-gray-800 w-full text-center">
                      Auction is nearing its end.<br />
                      45 minutes remaining
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
              <button onClick={() => toggleDropdown('profile')} className="hover:text-orange-400">
                <img src="/IMG/Profile.png" alt="Profile" className="h-12 w-12" />
              </button>
              {dropdownVisible === 'profile' && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-gray-100 text-black rounded-md shadow-md p-4 z-20">
                  <h3 className="text-lg font-bold">Profile</h3>
                  <button onClick={() => handleNavigation('/account')} className="text-1xl block px-4 py-2 hover:bg-gray-200">Account Setting</button>
                  <button onClick={() => { router.push('/auth/signout'); }} className="block mt-2 px-4 py-2 bg-red-500 text-white rounded-md">Sign Out</button>
                </div>
              )}
            </div>
          </div>
        )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
