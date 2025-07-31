import React from 'react'
import { CiHeart } from "react-icons/ci";


const RecoProps = ({recoimg , recoh2 , recop , recoExtra }) => {
  return (
    <>
    
    
    <div className='w-[300px] h-[480px] py-[40px]'>
      <div className=' relative'>
       <div className='w-[152px] h-[30px] text-[12px] font-medium font-jost text-[#fff] flex justify-center items-center rounded-r-[4px] bg-[#051036] absolute top-[18px]'>{recoExtra}</div>

        <div className=' w-full h-[300px] overflow-hidden'><img src={recoimg} alt="img" /> </div>

        <button className=' absolute top-[20px] flex justify-center items-center right-[15px] w-[30px] h-[30px] bg-[#fff] rounded-full'>
          <CiHeart />
        </button>
      </div>

        <div className='mb-[20px] mt-[10px] '>
            <h2 className='text-[18px] font-medium font-jost text-primary'>{recoh2}</h2>
            <p className='text-[14px] font-normal font-jost text-[#697488] pt-[5px]'>{recop}</p>
        </div>
        <div className='flex gap-[12px] items-center'>
            <div className='w-[30px] h-[30px] bg-[#3554D1] rounded-[4px] flex justify-center items-center'><p className='text-[12px] font-semibold font-jost text-[#fff]'>4.8</p></div>
            <h2 className='text-[14px] font-medium font-jost text-primary'>Exceptional</h2>
            <p className='text-[14px] font-normal font-jost text-[#697488]'>3,014 reviews</p>
        </div>
        



        <div className='mt-[5px]'><h2 className='text-[16px] font-medium font-jost text-primary'>Starting from <span className='text-[#3554D1]'>US$72</span></h2></div>

    </div>
    
    
    
    
    
    
    
    
    </>
  )
}

export default RecoProps