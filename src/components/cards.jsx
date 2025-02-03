import React from "react"

function Cards() {
 
  return (
    <div>
      {/* Jobs and completed jobs section */}
   
      <div className=' ml-60 bg-slate-100 opacity-85 border-b-2 w-[1273px] shadow-sm flex items-center'>
      <span className='ml-9 flex text-justify mt-3 text-xl font-bold'>Jobs
        
        <div className="mt-16 ml-[-48px] gap-6">
      
        <img src='active.png' className='w-[109px] h-[27px] top-[164px] left-[290px] gap-6 cursor-pointer' alt='logo' >
        </img> 
    
          </div>

          <div className='mt-16 ml-12'>

          <img src='Frame 357.png' className='w-[109px] h-[27px] top-[164px] left-[290px] gap-6 cursor-pointer' alt='logo' >
          </img>
          </div>

          <div className='mt-16 ml-12'>

          <img src='Frame 358.png' className='w-[112px] h-[27px] top-[164px] left-[587px] gap-6 cursor-pointer' alt='logo' >
          </img>
          </div>


        </span>
        <div className='ml-[385px] mb-10'>
        <img src='Frame (2).png' className='w-[191px] h-[29px] top-[102px] left-[1050px] gap-6 cursor-pointer' alt='logo' >
        </img>
        </div>


        <div className='ml-[40px] mb-10'>
        <img src='status.png' className='w-[191px] h-[29px] top-[102px] left-[1263px] gap-6 cursor-pointer' alt='logo' >
        </img>
        </div>
      </div>

  

        {/* Card item container */}
        <div className=" ml-60 bg-slate-100 opacity-85 gap-4 flex flex-wrap w-[1273px]">
          {/* Card item 1 */}
        <div className='ml-[30px] mb-10 mt-7'>
        <img src='Frame 363 (1).png' className='w-[256px] h-[270px] top-[230px] left-[290px] border-spacing-1 cursor-pointer' alt='logo' >
        </img>
        </div>

         {/* Card item 2 */}

        <div className='ml-[30px] mb-10 mt-7'>
        <img src='Frame 364.png' className='w-[256px] h-[270px] top-[230px] left-[290px] border-spacing-1 cursor-pointer' alt='logo' >
        </img>
        </div>

         {/* Card item 3 */}

        <div className='ml-[30px] mb-10 mt-7'>
        <img src='Frame 365.png' className='w-[256px] h-[270px] top-[230px] left-[290px] border-spacing-1 cursor-pointer' alt='logo' >
        </img>
        </div>

         {/* Card item 4 */}

        <div className='ml-[30px] mb-10 mt-7'>
        <img src='Frame 366.png' className='w-[256px] h-[270px] top-[230px] left-[290px] border-spacing-1 cursor-pointer' alt='logo' >
        </img>
        </div>

         {/* Card item 5 */}

        <div className='ml-[30px] mb-10 '>
        <img src='Frame 367.png' className='w-[256px] h-[270px] top-[230px] left-[290px]border-spacing-1 cursor-pointer' alt='logo' >
        </img>
        </div>

         {/* Card item 6 */}

        <div className='ml-[30px] mb-10'>
        <img src='Frame 368.png' className='w-[256px] h-[270px] top-[230px] left-[290px] border-spacing-1 cursor-pointer' alt='logo' >
        </img>
        </div>

        
         {/* Card item 7 */}

         <div className='ml-[30px] mb-10'>
        <img src='Frame 369.png' className='w-[256px] h-[270px] top-[230px] left-[290px] border-spacing-1 cursor-pointer' alt='logo' >
        </img>
        </div>


         {/* Card item 8 */}

        <div className='ml-[30px] mb-10 '>
        <img src='Frame 370.png' className='w-[256px] h-[270px] top-[230px] left-[290px] border-spacing-1 cursor-pointer' alt='logo' >
        </img>
        </div>
         </div>
       </div>
  )
}

export default Cards

