import { CiSearch } from "react-icons/ci";
import React from "react";


function Header() {

  return (
    <div className="bg-white items-center rounded-2xl">
      {/* Header Section */}
      <header className='shadow-sm ml-60 grid w-[1273px] items-center'>
      <div className=" flex p-3 ml-[710px] gap-20 items-center">
         
        <input className= "w-[330px] h-[40px] text-sm" type='text' placeholder='       Search by anything'
           /> 
      <div className='items-center ml-[-152px]'>
        <button className='flex w-10 h-10 ml-8 opacity-85 items-center rounded-e-lg justify-center  bg-blue-600'><CiSearch  className="w-6 text-white h-6"/></button>
        
        

      </div>  
     
      <div className="items-center mr-6 flex justify-center  gap-6">
      
      <img src='Need Help.png' className='w-7 h-8 top-7 left-9 cursor-pointer' alt='logo' >
        </img> 

        <img src='notification-bing.png' className='w-7 h-8 top-7 left-9 cursor-pointer' alt='logo' >
        </img> 

        <img src='Group 6.png' className='w-7 h-8 top-7 left-9 cursor-pointer' alt='logo' >
        </img> 

      </div>
 
      </div>
      
      </header>
    </div>
  );
}

export default Header;
