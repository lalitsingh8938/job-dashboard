// import React, { useState } from 'react';
// import { IoMdNotificationsOutline } from "react-icons/io"; 
// import { HiChevronUpDown } from "react-icons/hi2";
// import { CiSearch } from "react-icons/ci";

// function Header() {
//   const [isActiveJobsClicked, setIsActiveJobsClicked] = useState(true);
//   const [activeItem, setActiveItem] = useState("");  // To track which item is clicked

//   // Handle item click and update active item state
//   const handleItemClick = (item) => {
//     setActiveItem(item);
//   };

//   return (
//     <div className="bg-white">
//       {/* Header Section */}
//       <header className='shadow-md border-l-2 col-span-3 ml-[194px] grid grid-cols-7 w-full items-center'>
//         <div className="col-span-3 ml-5 flex items-center">
//           <div className='ml-6'>
//             <span className='block text-sm opacity-45'>Your Organization</span> 
//             <div className='flex items-center'>
//               <img src='logo.png' className='w-[40px] h-[30px] cursor-pointer' alt='logo' /> 
//               <span className='text-base opacity-70 font-semibold'>Fikri Studio</span> 
//               <div className='flex items-center ml-10'>
//                 <span className='cursor-pointer opacity-40'>
//                   <HiChevronUpDown />
//                 </span>
//                 <span className='cursor-pointer opacity-40 ml-10'>
//                   <CiSearch /> 
//                 </span>                
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Notification and Profile Section */}
//         <div className='col-span-2 w-full flex ml-[400px] items-center space-x-[45px]'>
//           {/* Add Button */}
//           <button className='bg-yellow-400 w-[30px] ml-20 h-[30px] rounded-full flex items-center justify-center text-white font-bold'>+</button>
          
//           <span className='cursor-pointer items-center'>
//             <IoMdNotificationsOutline size={30} className='text-black' />
//           </span>
//         </div>            
//       </header>
//     </div>
//   );
// }

// export default Header;
