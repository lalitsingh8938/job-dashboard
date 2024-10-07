
import React from 'react';
import { FaTasks } from "react-icons/fa";
import { TbNotes } from "react-icons/tb";
import { FaFolder } from "react-icons/fa";



const Sidebar = () => {
    return (
        <div className=" flex-col bg-white border-s-1 w-15 h-screen items-center fixed right-0 top-[-13px]">
            <div className="flex flex-col items-center h-full space-y-8 opacity-100 mt-6">

            <div className=' items-center mr-1'>
              <img src='OIP.jpeg' className='w-12 h-12 items-center border-2 rounded-3xl cursor-pointer' alt='profile' />
            </div>
                {/* Task Icon */}
                
                <div className="flex flex-col items-center ">
                    
                    <div className="flex flex-col items-center w-10 h-10 bg-blue-200 rounded-full relative">
                        <div className="border shadow-sm cursor-pointer  flex items-center justify-center w-full h-full opacity-50">
                        <FaTasks  className="text-lg" />
                        </div>
                    </div>
                    <span className="text-sm mt-3 font-bold opacity-45 text-center">Task</span>
                </div>


                {/* Notes Icon */}
                <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center w-12 h-12 bg-yellow-300 rounded-full relative">
                        <div className="border shadow-sm cursor-pointer  flex items-center justify-center w-full h-full opacity-50">
                        <TbNotes className="text-lg" />
                        </div>
                    </div>
                    <span className="text-sm mt-3 font-bold opacity-45 text-center">Notes</span>
                </div>

                {/* Folders Icon */}
                <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center w-12 h-12 bg-green-200 rounded-full relative">
                        <div className="border shadow-sm cursor-pointer  flex items-center justify-center w-full h-full opacity-50">
                        <FaFolder className="text-lg text-black" />
                        </div>
                    </div>
                    <span className="text-sm mt-3 font-bold opacity-45 text-center">Folders</span>
                </div>

                <div className=' text-3xl items-center'>

                <button className='w-[30px] h-[30px] rounded-full flex items-center justify-center text-slate-400 font-bold'>+</button>
                </div>

            </div>
        </div>
    );
};

export default Sidebar;
