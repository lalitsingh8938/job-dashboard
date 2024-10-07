
// import React, { useState, useRef } from 'react';
// import { IoMdNotificationsOutline } from "react-icons/io"; 
// import { HiChevronUpDown } from "react-icons/hi2";
// import { CiSearch } from "react-icons/ci";
// import { MdDashboard } from "react-icons/md";
// import { HiInboxArrowDown } from "react-icons/hi2";
// import { FaCalendar } from "react-icons/fa6";
// import { FaGift } from "react-icons/fa";
// import { RiContactsFill } from "react-icons/ri";
// import { FaBoxArchive } from "react-icons/fa6";
// import { FaMessage } from "react-icons/fa6";
// import { IoIosContact } from "react-icons/io";
// import { MdReport } from "react-icons/md";
// import { IoSettings } from "react-icons/io5";
// import { VscLayoutSidebarRight } from "react-icons/vsc";

// function Header() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar open by default
//   const [isActiveJobsClicked, setIsActiveJobsClicked] = useState(true);
//   const [activeItem, setActiveItem] = useState("");  // To track which item is clicked
//   const sidebarRef = useRef(null);

//   // Handle click on sidebar button to toggle the sidebar
//   const handleSidebarButtonClick = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   // Handle item click and update active item state
//   const handleItemClick = (item) => {
//     setActiveItem(item);
//   };

//   return (
//     <div className="flex">
//       {/* Side menu content */}
//       <div
//         ref={sidebarRef}  // Reference to sidebar for outside click detection
//         className={`w-[192px] h-full p-4 z-10 rounded-xl fixed left-0 top-0 duration-500 ${
//           isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
//         } ${isActiveJobsClicked ? 'bg-slate-900' : 'bg-white'} overflow-y-hidden`}
//       >
//         <div>
//           <img src='timy.jpg.png' className='w-[120px] h-[80px] mx-auto bg-slate-800 cursor-pointer' alt='logo' />
//           <div className='text-white opacity-40'>
//             {/* Sidebar Items */}
//             <div 
//               className={`flex items-center cursor-pointer p-4 ${activeItem === 'Dashboard' ? 'bg-yellow-400 rounded-xl text-black' : ''}`}
//               onClick={() => handleItemClick('Dashboard')}
//             >
//               <MdDashboard className="mr-2" />
//               Dashboard
//             </div>

//             <div 
//               className={`flex items-center cursor-pointer p-4 ${activeItem === 'Inbox' ? 'bg-yellow-400 rounded-xl text-black' : ''}`}
//               onClick={() => handleItemClick('Inbox')}
//             >
//               <HiInboxArrowDown className="mr-2" />
//               Inbox
//             </div>

//             <div 
//               className={`flex items-center cursor-pointer p-4 ${activeItem === 'Calendar' ? 'bg-yellow-400 rounded-xl text-black' : ''}`}
//               onClick={() => handleItemClick('Calendar')}
//             >
//               <FaCalendar className="mr-2" />
//               Calendar & Todos
//             </div>

//             <p className='opacity-45 p-4 ml-1 font-semibold'>REQUIREMENT</p>

//             <div 
//               className={`flex items-center cursor-pointer p-4 ${activeItem === 'Jobs' ? 'bg-yellow-400 rounded-xl text-black' : ''}`}
//               onClick={() => handleItemClick('Jobs')}
//             >
//               <FaGift className="mr-2" />
//               Jobs
//             </div>

//             <div 
//               className={`flex items-center cursor-pointer p-4 ${activeItem === 'Candidates' ? 'bg-yellow-400 rounded-xl text-black' : ''}`}
//               onClick={() => handleItemClick('Candidates')}
//             >
//               <RiContactsFill className="mr-2" />
//               Candidates
//             </div>

//             <div 
//               className={`flex items-center cursor-pointer p-4 ${activeItem === 'Referrals' ? 'bg-yellow-400 rounded-xl text-black' : ''}`}
//               onClick={() => handleItemClick('Referrals')}
//             >
//               <FaBoxArchive className="mr-2" />
//               My referrals
//             </div>

//             <div 
//               className={`flex items-center cursor-pointer p-4 ${activeItem === 'CareerSite' ? 'bg-yellow-400 rounded-xl text-black' : ''}`}
//               onClick={() => handleItemClick('CareerSite')}
//             >
//               <FaMessage className="mr-2" />
//               Career Site
//             </div>

//             <p className='opacity-45 p-4 ml-1 font-semibold'>ORGANIZATION</p>

//             <div 
//               className={`flex items-center cursor-pointer p-4 ${activeItem === 'Employee' ? 'bg-yellow-400 rounded-xl text-black' : ''}`}
//               onClick={() => handleItemClick('Employee')}
//             >
//               <IoIosContact className="mr-2" />
//               Employee
//             </div>

//             <div 
//               className={`flex items-center cursor-pointer p-4 ${activeItem === 'Structure' ? 'bg-yellow-400 rounded-xl text-black' : ''}`}
//               onClick={() => handleItemClick('Structure')}
//             >
//               <FaMessage className="mr-2" />
//               Structure
//             </div>

//             <div 
//               className={`flex items-center cursor-pointer p-4 ${activeItem === 'Report' ? 'bg-yellow-400 rounded-xl text-black' : ''}`}
//               onClick={() => handleItemClick('Report')}
//             >
//               <MdReport className="mr-2" />
//               Report
//             </div>

//             <div 
//               className={`flex items-center cursor-pointer p-4 ${activeItem === 'Setting' ? 'bg-yellow-400 rounded-xl text-black' : ''}`}
//               onClick={() => handleItemClick('Setting')}
//             >
//               <IoSettings className="mr-2" />
//               Setting
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main content */}
//       <div className={`transition-all duration-500 w-full ${isSidebarOpen ? 'ml-[185px]' : 'ml-0'} bg-white`}>
//         {/* Header Section */}
//         <header className='border-l-2 shadow-sm grid grid-cols-7 items-center'>
//           <div className="items-center cursor-pointer p-4">
//             <div className='ml-5 items-center opacity-30'>
//               <VscLayoutSidebarRight onClick={handleSidebarButtonClick} className="text-[30px]" />
//             </div>
//           </div>

//           {/* Organization Section */}
//           <div className='col-span-3 ml-5 flex items-center'>
//             <div className='ml-[-90px]'>
//               <span className='block text-sm opacity-35'>Your Organization</span> 
//               <div className='flex items-center'>
//                 <img src='logo.png' className='w-[40px] h-[30px] cursor-pointer' alt='logo' /> 
//                 <span className='text-base opacity-70 font-semibold'>Fikri Studio</span> 
//                 <div className='flex items-center ml-10'>
//                   <span className='cursor-pointer opacity-40'>
//                     <HiChevronUpDown />
//                   </span>
//                   <span className='cursor-pointer opacity-40 ml-10'>
//                     <CiSearch /> 
//                   </span>                
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Notification and Profile Section */}
//           <div className='col-span-2 ml-[370px] w-full flex items-center space-x-[45px]'>
//             {/* Add Button */}
//             <button className='bg-yellow-400 w-[30px] h-[30px] rounded-full flex items-center justify-center text-white font-bold'>+</button>
            
//             <span className='cursor-pointer items-center'>
//               <IoMdNotificationsOutline size={30} className='text-black' />
//             </span>
//             {/* <div className=''>
//               <img src='OIP.jpeg' className='w-[40px] h-[40px] border-x-2 rounded-3xl cursor-pointer' alt='profile' />
//             </div> */}
//           </div>            
//         </header>
//       </div>
//     </div>
//   );
// }

// export default Header;









import React, { useRef, useState } from 'react';
import { IoMdNotificationsOutline } from "react-icons/io"; 
import { HiChevronUpDown } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { MdDashboard } from "react-icons/md";
import { HiInboxArrowDown } from "react-icons/hi2";
import { FaCalendar } from "react-icons/fa6";
import { FaGift } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { FaBoxArchive } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
import { MdReport } from "react-icons/md";
import { IoSettings } from "react-icons/io5";

function Header() {
  const [isActiveJobsClicked, setIsActiveJobsClicked] = useState(true);
  const [activeItem, setActiveItem] = useState("");  // To track which item is clicked
  const sidebarRef = useRef(null);

  // Handle item click and update active item state
  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="flex">
      {/* Side menu content */}
      <div
        ref={sidebarRef}  // Reference to sidebar for outside click detection
        className={`w-[204px] h-full p-4 z-10 rounded-xl fixed left-0 top-0 bg-slate-900 overflow-y-hidden`}
      >
        <div>
          <img src='timy.jpg.png' className='w-[130px] h-[80px] mx-auto bg-slate-800 cursor-pointer' alt='logo' />
          <div className='text-white opacity-40 text-sm'>
            {/* Sidebar Items */}
            <div 
              className={`flex items-center cursor-pointer p-3 ${activeItem === 'Dashboard' ? 'bg-yellow-400 rounded-xl text-black' : ''}`}
              onClick={() => handleItemClick('Dashboard')}
            >
              <MdDashboard className="mr-3" />
              Dashboard
            </div>

            <div 
              className={`flex items-center cursor-pointer p-3 ${activeItem === 'Inbox' ? 'bg-yellow-400 rounded-xl text-black' : ''}`}
              onClick={() => handleItemClick('Inbox')}
            >
              <HiInboxArrowDown className="mr-3" />
              Inbox
            </div>

            <div 
              className={`flex items-center cursor-pointer p-3 ${activeItem === 'Calendar' ? 'bg-yellow-400 rounded-xl text-black' : ''}`}
              onClick={() => handleItemClick('Calendar')}
            >
              <FaCalendar className="mr-3" />
              Calendar & Todos
            </div>

            <p className='opacity-45 p-4 ml-1 font-semibold'>REQUIREMENT</p>

            <div 
              className={`flex items-center cursor-pointer p-3 ${activeItem === 'Jobs' ? 'bg-yellow-400 rounded-xl text-black' : ''}`}
              onClick={() => handleItemClick('Jobs')}
            >
              <FaGift className="mr-3" />
              Jobs
            </div>

            <div 
              className={`flex items-center cursor-pointer p-3 ${activeItem === 'Candidates' ? 'bg-yellow-400 rounded-xl text-black' : ''}`}
              onClick={() => handleItemClick('Candidates')}
            >
              <RiContactsFill className="mr-3" />
              Candidates
            </div>

            <div 
              className={`flex items-center cursor-pointer p-3 ${activeItem === 'Referrals' ? 'bg-yellow-400 rounded-xl text-black' : ''}`}
              onClick={() => handleItemClick('Referrals')}
            >
              <FaBoxArchive className="mr-3" />
              My referrals
            </div>

            <div 
              className={`flex items-center cursor-pointer p-3 ${activeItem === 'CareerSite' ? 'bg-yellow-400 rounded-xl text-black' : ''}`}
              onClick={() => handleItemClick('CareerSite')}
            >
              <FaMessage className="mr-3" />
              Career Site
            </div>

            <p className='opacity-45 p-4 ml-1 font-semibold'>ORGANIZATION</p>

            <div 
              className={`flex items-center cursor-pointer p-3 ${activeItem === 'Employee' ? 'bg-yellow-400 rounded-xl text-black' : ''}`}
              onClick={() => handleItemClick('Employee')}
            >
              <IoIosContact className="mr-3" />
              Employee
            </div>

            <div 
              className={`flex items-center cursor-pointer p-3 ${activeItem === 'Structure' ? 'bg-yellow-400 rounded-xl text-black' : ''}`}
              onClick={() => handleItemClick('Structure')}
            >
              <FaMessage className="mr-3" />
              Structure
            </div>

            <div 
              className={`flex items-center cursor-pointer p-3 ${activeItem === 'Report' ? 'bg-yellow-400 rounded-xl text-black' : ''}`}
              onClick={() => handleItemClick('Report')}
            >
              <MdReport className="mr-3" />
              Report
            </div>

            <div 
              className={`flex items-center cursor-pointer p-3 ${activeItem === 'Setting' ? 'bg-yellow-400 rounded-xl text-black' : ''}`}
              onClick={() => handleItemClick('Setting')}
            >
              <IoSettings className="mr-3" />
              Setting
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="ml-80 bg-white">
        {/* Header Section */}
        <header className=' shadow-sm grid grid-cols-7 ml-10 w-[1000px] items-center'>
          <div className="col-span-3 ml-5 flex items-center">
            <div className='ml-[-90px]'>
              <span className='block text-sm opacity-45'>Your Organization</span> 
              <div className='flex items-center'>
                <img src='logo.png' className='w-[40px] h-[30px] cursor-pointer' alt='logo' /> 
                <span className='text-base opacity-70 font-semibold'>Fikri Studio</span> 
                <div className='flex items-center ml-10'>
                  <span className='cursor-pointer opacity-40'>
                    <HiChevronUpDown />
                  </span>
                  <span className='cursor-pointer opacity-40 ml-10'>
                    <CiSearch /> 
                  </span>                
                </div>
              </div>
            </div>
          </div>

          {/* Notification and Profile Section */}
          <div className='col-span-2 w-full flex ml-[435px] items-center space-x-[45px]'>
            {/* Add Button */}
            <button className='bg-yellow-400 w-[30px] ml-20 h-[30px] rounded-full flex items-center justify-center text-white font-bold'>+</button>
            
            <span className='cursor-pointer  items-center'>
              <IoMdNotificationsOutline size={30} className='text-black' />
            </span>
          </div>            
        </header>
      </div>
    </div>
  );
}

export default Header;
