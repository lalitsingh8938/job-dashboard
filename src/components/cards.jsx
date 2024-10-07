
import React, { useState, useRef, useEffect } from 'react';
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { BsBasket3Fill } from "react-icons/bs";

function Cards() {
  const [highlightedCards, setHighlightedCards] = useState([]); // No cards highlighted by default
  const [activeTab, setActiveTab] = useState('inactive');
  const cardContainerRef = useRef(null); // Ref for the card container

  // Handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === 'active') {
      // Highlight cards 1 and 4 (0-indexed)
      setHighlightedCards([0, 3]); // 0-indexed: Cards 1, 4
    } else {
      // Highlight cards 2, 3, 5, 6, and 7 (0-indexed)
      setHighlightedCards([1, 2, 4, 5, 6]); // 0-indexed: Cards 2, 3, 5, 6, 7
    }
  };

  // Handle clicks outside the card container
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardContainerRef.current && !cardContainerRef.current.contains(event.target)) {
        setHighlightedCards([]); // Remove highlights when clicking outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Tabs Section */}
      <div className='col-span-3 p-3 ml-[194px] bg-slate-100 border-b-2 border-x-2 border-t-2 w-[1260px] flex shadow-sm grid-rows-12 items-center' style={{ overflow: 'hidden' }}>
        <div className={`col-span-2 ml-[40px] cursor-pointer ${activeTab === 'active' ? 'font-bold text-slate-600' : ''}`} onClick={() => handleTabClick('active')}>
          <span className='text-sm ml-[-20px] font-semibold'>ACTIVE JOBS</span>
        </div>
        <div className={`col-span-2 flex cursor-pointer ${activeTab === 'inactive' ? 'font-bold text-slate-600' : ''}`} onClick={() => handleTabClick('inactive')}>
          <span className='block text-sm ml-14 font-semibold'>INACTIVE JOBS</span>
        </div>
      </div>

      <div ref={cardContainerRef} className="relative w-full max-w-[1260px] ml-[194px] border-x-2 shadow-lg bg-slate-100 mx-auto p-3" style={{ overflow: 'hidden' }}>
        <div className="flex items-center mt-5">
          <span className="block text-xl ml-2 opacity-85 font-semibold">7 Active Jobs</span>
          <div className="flex items-center font-semibold opacity-40 ml-[90px]">
            <span className="mr-5">Sort by:</span>
          </div>
          <div className="flex items-center opacity-75 font-semibold">
            <span>Creation date</span>
            <span className='cursor-pointer ml-1'>
              <FaAngleDown size={24} className='text-black' />
            </span>
          </div>
          <div className="flex items-center font-semibold opacity-40 ml-[90px]">
            <span className="mr-5">Status:</span>
          </div>
          <div className="flex items-center opacity-75 font-semibold">
            <span>All Status</span>
            <span className='cursor-pointer ml-2'>
              <FaAngleDown size={24} className='text-black' />
            </span>
          </div>
        </div>

        {/* Card item container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 mt-8">
          {/* Card item 1 */}
          <div className={`border shadow-lg p-4 ml-2 rounded-lg bg-white h-full flex flex-col ${highlightedCards.includes(0) ? 'border-t-4 border-green-500' : ''}`}>
            <div className="text-[15px] font-bold opacity-60 flex-grow">
              Design
              <span className="block text-[18px] font-bold">Senior Product Designer</span>
              <span className='opacity-40 mt-3 block'>Candidates:</span>
              <div className="border shadow-sm bg-gray-200 mt-3 items-center">
                <img src='application.jpg' className='w-[100px] h-[100px] mx-auto mt-2 cursor-pointer' alt='logo' />
              </div>
            </div>
            <div className='opacity-35 mb-3 text-[16px] flex items-center'>
              <span className='text-justify'>Purworkerto</span>
              <span className='text-justify ml-6'> Full time</span>
            </div>
            <div className="border shadow-sm p-3 cursor-pointer bg-white font-bold flex items-center opacity-45">
              <BsBasket3Fill className="mr-2" />
              <span>Draft</span>
              <span className='ml-auto cursor-pointer'>See Details</span>
              <FaAngleRight />
            </div>
          </div>

          {/* Card item 2 */}
          <div className={`border shadow-lg rounded-lg p-4 bg-white h-full flex flex-col ${highlightedCards.includes(1) ? 'border-t-4 border-green-500' : ''}`}>
            <div className="text-[15px] font-bold opacity-60 flex-grow">
              Design
              <span className="block text-[18px] font-bold">UI/UX Designer</span>
              <span className='opacity-40 mt-3 block'>Candidates:</span>
              <div className="border shadow-sm bg-white mt-3 items-center">
                <div className="border-rounded shadow-lg bg-slate-200 h-[100px] flex justify-between items-center px-4">
                  <div className="border-l-2 p-3 border-gray-800 h-[60px] mx-2 flex flex-col justify-center ">
                    <span className="text-[12px] opacity-40">TOTAL</span>
                    <span className="text-[30px] font-bold">57</span>
                  </div>
                  <div className="border-l-2 border-green-600 h-[60px] mx-4"></div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[12px] mr-9 opacity-40">NEW</span>
                    <span className="text-[30px] mr-9 font-bold">3</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='opacity-35 mb-3 text-[16px] flex items-center'>
              <span className='text-justify'>Purworkerto</span>
              <span className='text-justify ml-6'> Freelancer</span>
            </div>
            <div className="border shadow-sm p-3 cursor-pointer bg-white font-bold flex items-center opacity-45">
              <BsBasket3Fill className="mr-2" />
              <span>Draft</span>
              <span className='ml-auto cursor-pointer'>See Details</span>
              <FaAngleRight />
            </div>
          </div>

          {/* Card item 3 */}
          <div className={`border shadow-lg rounded-lg p-4 bg-white h-full flex flex-col ${highlightedCards.includes(2) ? 'border-t-4 border-green-500' : ''}`}>
            <div className="text-[15px] font-bold opacity-60 flex-grow">
              Design
              <span className="block text-[18px] font-bold">Head of UX</span>
              <span className='opacity-40 mt-3 block'>Candidates:</span>
              <div className="border shadow-sm bg-white mt-3 items-center">
                <div className="border-rounded shadow-lg bg-slate-200 h-[100px] flex justify-between items-center px-4">
                  <div className="border-l-2 p-3 border-gray-800 h-[60px] mx-2 flex flex-col justify-center ">
                    <span className="text-[12px] opacity-40">TOTAL</span>
                    <span className="text-[30px] font-bold">10</span>
                  </div>
                  <div className="border-l-2 border-green-600 h-[60px] mx-4"></div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[12px] mr-9 opacity-40">NEW</span>
                    <span className="text-[30px] mr-9 font-bold">0</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='opacity-35 mb-3 text-[16px] flex items-center'>
              <span className='text-justify'>Purworkerto</span>
              <span className='text-justify ml-6'> Full time</span>
            </div>
            <div className="border shadow-sm p-3 cursor-pointer bg-white font-bold flex items-center opacity-45">
              <BsBasket3Fill className="mr-2" />
              <span>Draft</span>
              <span className='ml-auto cursor-pointer'>See Details</span>
              <FaAngleRight />
            </div>
          </div>

            {/* Card item 4 */}
            <div className={`border shadow-lg p-4 rounded-lg bg-white h-full flex flex-col ${highlightedCards.includes(0) ? 'border-t-4 border-green-500' : ''}`}>
            <div className="text-[15px] font-bold opacity-60 flex-grow">
              Design
              <span className="block text-[18px] font-bold">Senior Product Designer</span>
              <span className='opacity-40 mt-3 block'>Candidates:</span>
              <div className="border shadow-sm bg-gray-200 mt-3 items-center">
                <img src='application.jpg' className='w-[100px] h-[100px] mx-auto mt-2 cursor-pointer' alt='logo' />
              </div>
            </div>
            <div className='opacity-35 mb-3 text-[16px] flex items-center'>
              <span className='text-justify'>Purworkerto</span>
              <span className='text-justify ml-6'> Full time</span>
            </div>
            <div className="border shadow-sm p-3 cursor-pointer bg-white font-bold flex items-center opacity-45">
              <BsBasket3Fill className="mr-2" />
              <span>Draft</span>
              <span className='ml-auto cursor-pointer'>See Details</span>
              <FaAngleRight />
            </div>
          </div>

          {/* Card item 5 */}
          <div className={`border shadow-lg rounded-lg p-4 bg-white h-full flex flex-col ${highlightedCards.includes(4) ? 'border-t-4 border-green-500' : ''}`}>
            <div className="text-[15px] font-bold opacity-60 flex-grow">
              Design
              <span className="block text-[18px] font-bold">UI Designer</span>
              <span className='opacity-40 mt-3 block'>Candidates:</span>
              <div className="border shadow-sm bg-white mt-3 items-center">
                <div className="border-rounded shadow-lg bg-slate-200 h-[100px] flex justify-between items-center px-4">
                  <div className="border-l-2 p-3 border-gray-800 h-[60px] mx-2 flex flex-col justify-center ">
                    <span className="text-[12px] opacity-40">TOTAL</span>
                    <span className="text-[30px] font-bold">25</span>
                  </div>
                  <div className="border-l-2 border-green-600 h-[60px] mx-4"></div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[12px] mr-9 opacity-40">NEW</span>
                    <span className="text-[30px] mr-9 font-bold">5</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='opacity-35 mb-3 text-[16px] flex items-center'>
              <span className='text-justify'>Purworkerto</span>
              <span className='text-justify ml-6'> Freelancer</span>
            </div>
            <div className="border shadow-sm p-3 cursor-pointer bg-white font-bold flex items-center opacity-45">
              <BsBasket3Fill className="mr-2" />
              <span>Draft</span>
              <span className='ml-auto cursor-pointer'>See Details</span>
              <FaAngleRight />
            </div>
          </div>

          {/* Card item 6 */}
          <div className={`border shadow-lg rounded-lg p-4 ml-2 bg-white h-full flex flex-col ${highlightedCards.includes(5) ? 'border-t-4 border-green-500' : ''}`}>
            <div className="text-[15px] font-bold opacity-60 flex-grow">
              Design
              <span className="block text-[18px] font-bold">Visual Designer</span>
              <span className='opacity-40 mt-3 block'>Candidates:</span>
              <div className="border shadow-sm bg-white mt-3 items-center">
                <div className="border-rounded shadow-lg bg-slate-200 h-[100px] flex justify-between items-center px-4">
                  <div className="border-l-2 p-3 border-gray-800 h-[60px] mx-2 flex flex-col justify-center ">
                    <span className="text-[12px] opacity-40">TOTAL</span>
                    <span className="text-[30px] font-bold">30</span>
                  </div>
                  <div className="border-l-2 border-green-600 h-[60px] mx-4"></div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[12px] mr-9 opacity-40">NEW</span>
                    <span className="text-[30px] mr-9 font-bold">10</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='opacity-35 mb-3 text-[16px] flex items-center'>
              <span className='text-justify'>Purworkerto</span>
              <span className='text-justify ml-6'> Full time</span>
            </div>
            <div className="border shadow-sm p-3 cursor-pointer bg-white font-bold flex items-center opacity-45">
              <BsBasket3Fill className="mr-2" />
              <span>Draft</span>
              <span className='ml-auto cursor-pointer'>See Details</span>
              <FaAngleRight />
            </div>
          </div>

          {/* Card item 7 */}
          <div className={`border shadow-lg rounded-lg p-4 bg-white h-full flex flex-col ${highlightedCards.includes(6) ? 'border-t-4 border-green-500' : ''}`}>
            <div className="text-[15px] font-bold opacity-60 flex-grow">
              Design
              <span className="block text-[18px] font-bold">Art Director</span>
              <span className='opacity-40 mt-3 block'>Candidates:</span>
              <div className="border shadow-sm bg-white mt-3 items-center">
                <div className="border-rounded shadow-lg bg-slate-200 h-[100px] flex justify-between items-center px-4">
                  <div className="border-l-2 p-3 border-gray-800 h-[60px] mx-2 flex flex-col justify-center ">
                    <span className="text-[12px] opacity-40">TOTAL</span>
                    <span className="text-[30px] font-bold">40</span>
                  </div>
                  <div className="border-l-2 border-green-600 h-[60px] mx-4"></div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[12px] mr-9 opacity-40">NEW</span>
                    <span className="text-[30px] mr-9 font-bold">15</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='opacity-35 mb-3 text-[16px] flex items-center'>
              <span className='text-justify'>Purworkerto</span>
              <span className='text-justify ml-6'> Full time</span>
            </div>
            <div className="border shadow-sm p-3 cursor-pointer bg-white font-bold flex items-center opacity-45">
              <BsBasket3Fill className="mr-2" />
              <span>Draft</span>
              <span className='ml-auto cursor-pointer'>See Details</span>
              <FaAngleRight />
            </div>
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default Cards





