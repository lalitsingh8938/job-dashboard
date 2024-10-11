import React, { useState, useRef } from 'react';
import { MdDashboard } from "react-icons/md";
import { HiInboxArrowDown } from "react-icons/hi2";
import { FaCalendar, FaGift, FaBoxArchive, FaMessage } from "react-icons/fa6";
import { RiContactsFill } from "react-icons/ri";
import { IoIosContact } from "react-icons/io";
import { MdReport } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Dashboard() {
    const [activeItem, setActiveItem] = useState('Dashboard');
    const sidebarRef = useRef(null);

    const handleItemClick = (item) => {
        setActiveItem(item);
    };

    return (
        <div className="flex">
          {/* dashboard content */}
          <div
            ref={sidebarRef}  // Reference to sidebar for outside click detection
            className={`w-[236px] h-full p-3 z-10 rounded-xl top-0 fixed bg-slate-900 overflow-y-hidden`}
          >
            <div>
              <img src='Frame 3.png' className='w-[149px] h-[49.54px] top-[27px] left[36px] mx-auto bg-slate-900 cursor-pointer' alt='logo' />
              <div className='text-white mt-[27px] text-sm'>
                {/* Sidebar Items */}

                <p className='opacity-45 ml-8 font-semibold'>MENU</p>
                <div 
                
                  className={`flex items-center cursor-pointer ml-2 mt-2 w-48 p-3  ${activeItem === 'Dashboard' ? 'bg-yellow-400 rounded-xl text-black' : ''}`}
                  onClick={() => handleItemClick('Dashboard')}
                >
                  <Link to="Dashboard" className='flex ml-3 items-center'>
                  <MdDashboard className="mr-3  w-[18px] h-[18px]" />
                  Dashboard
                  </Link>
                </div>
              
    
                <div 
                  className={`flex items-center cursor-pointer ml-2 w-48  p-3 ${activeItem === 'Inbox' ? 'bg-yellow-400 rounded-xl text-black' : ''}`}
                  onClick={() => handleItemClick('Inbox')}
                >
                  <Link to="/cards" className="flex ml-3 ">
                
                  <HiInboxArrowDown className="mr-3 w-[18px] h-[18px]" />  </Link>
                  Inbox
                
                </div>
    
                <div 
                  className={`flex items-center cursor-pointer ml-2 w-48  p-3 ${activeItem === 'Calendar' ? 'bg-yellow-400 rounded-xl text-black' : ''}`}
                  onClick={() => handleItemClick('Calendar')}
                >
                  <FaCalendar className="mr-3 ml-3  w-[18px] h-[18px]" />
                  Calendar & Todos
                </div>
    
                <p className='opacity-45 p-4 ml-1 font-semibold'>REQUIREMENT</p>
    
                <div
                  className={`flex items-center cursor-pointer  ml-2 w-48 p-3 ${activeItem === 'Jobs' ? 'bg-yellow-400 rounded-xl text-black' : ''}`}
                  onClick={() => handleItemClick('Jobs')}
                >
                <Link to="Jobs" className='flex items-center'>
                
                  <FaGift className="mr-3 ml-3  w-[18px] h-[18px]" />
                  Jobs
                </Link>
                </div>
    
                <div 
                  className={`flex items-center cursor-pointer ml-2 w-48  p-3 ${activeItem === 'Candidates' ? 'bg-yellow-400 rounded-xl text-black' : ''}`}
                  onClick={() => handleItemClick('Candidates')}
                >
                  <RiContactsFill className="mr-3 ml-3  w-[18px] h-[18px]" />
                  Candidates
                </div>
    
                <div 
                  className={`flex items-center cursor-pointer ml-2 w-48 p-3 ${activeItem === 'Referrals' ? 'bg-yellow-400 rounded-xl text-black' : ''}`}
                  onClick={() => handleItemClick('Referrals ml-3')}
                >
                  <FaBoxArchive className="mr-3 ml-3  w-[18px] h-[18px]" />
                  My Referrals
                </div>
    
                <div 
                  className={`flex items-center cursor-pointer ml-2 w-48  p-3 ${activeItem === 'CareerSite' ? 'bg-yellow-400 rounded-xl text-black' : ''}`}
                  onClick={() => handleItemClick('CareerSite')}
                >
                  <FaMessage className="mr-3 ml-3 w-[18px] h-[18px]" />
                  Career Site
                </div>
    
                <p className='opacity-45 p-4 ml-1 font-semibold'>ORGANIZATION</p>
    
                <div 
                  className={`flex items-center cursor-pointer ml-2 w-48 p-3 ${activeItem === 'Employee' ? 'bg-yellow-400 rounded-xl text-black' : ''}`}
                  onClick={() => handleItemClick('Employee')}
                >
                  <IoIosContact className="mr-3 ml-3  w-[18px] h-[18px]" />
                  Employee
                </div>
    
                <div 
                  className={`flex items-center cursor-pointer ml-2 w-48  p-3 ${activeItem === 'Structure' ? 'bg-yellow-400 rounded-xl text-black' : ''}`}
                  onClick={() => handleItemClick('Structure')}
                >
                  <FaMessage className="mr-3 ml-3 w-[18px] h-[18px]" />
                  Structure
                </div>
    
                <div 
                  className={`flex items-center cursor-pointer ml-2 w-48 p-3 ${activeItem === 'Report' ? 'bg-yellow-400 rounded-xl text-black' : ''}`}
                  onClick={() => handleItemClick('Report')}
                >
                  <MdReport className="mr-3 ml-3  w-[18px] h-[18px]" />
                  Report
                </div>
    
                <div 
                  className={`flex items-center cursor-pointer ml-2 w-48  p-3 ${activeItem === 'Setting' ? 'bg-yellow-400 rounded-xl text-black' : ''}`}
                  onClick={() => handleItemClick('Setting')}
                >
                  <IoSettings className="mr-3 ml-3 w-[18px] h-[18px]" />
                  Setting
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}

export default Dashboard;
