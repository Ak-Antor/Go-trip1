import React from 'react'
import { Link } from 'react-router'
import CommonHead from './common/CommonHead'
import { MdArrowOutward } from "react-icons/md";
import london from '../assets/images/london.png'
import newwork from '../assets/images/new york.png'
import rome from '../assets/images/rome.png'
import bercelona from '../assets/images/bercelona.png'
import popic from '../assets/images/popular pic1.png'
import popic2 from '../assets/images/popular pic 2.png'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Popular = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows:true,
  };



  return (
    <>
    


    <section id='popular' className='py-[120px]'>
        <div className="container">
            <div className="popular_row">
                <div className='flex justify-between items-center'>
                   <CommonHead HeadText={'Popular Destinations'} HeadP={'These popular destinations have a lot to offer'}/>
                    <Link className='w-[231px] bg-[#3554d10f] rounded-[4px] flex justify-around items-center py-[14px] px-[29px]' ><p className='text-[15px]  font-medium font-jost text-[#3554D1]'>View All Destinations</p>
                    <MdArrowOutward className='text-[20px] text-[#3554D1]' />
                    </Link>
                    
    </div>
                 <div className='py-[40px] flex justify-between items-center'>

                </div>


    <Slider {...settings}>

      <div>
        
                    <div className=' relative'>
                    <img src={newwork} alt="img"  />
                    <p className=' absolute top-[332px] left-[80px] text-[26px]  font-semibold font-jost text-[#fff] z-10'>New York</p>
                    </div>

      
      </div>
      <div>
           <div className=' relative'>
                    <img src={london} alt="img"  />
                    <p className=' absolute top-[332px] left-[80px] text-[26px]  font-semibold font-jost text-[#fff] z-10'>London</p>
                    </div>

     
      </div>
      <div>
              <div className=' relative'>
                    <img src={bercelona} alt="img"  />
                    <p className=' absolute top-[332px] left-[80px] text-[26px]  font-semibold font-jost text-[#fff] z-10'>Batcelona</p>
                    </div>

      </div>
      <div>
        
                 <div className=' relative'>
                    <img src={rome} alt="img"  />
                    <p className=' absolute top-[332px] left-[80px] text-[26px]  font-semibold font-jost text-[#fff] z-10'>Rome</p>
                    </div> 
      </div>


            <div>
        
                    <div className=' relative'>
                    <img src={newwork} alt="img"  />
                    <p className=' absolute top-[332px] left-[80px] text-[26px]  font-semibold font-jost text-[#fff] z-10'>New York</p>
                    </div>

      
      </div>
      <div>
           <div className=' relative'>
                    <img src={london} alt="img"  />
                    <p className=' absolute top-[332px] left-[80px] text-[26px]  font-semibold font-jost text-[#fff] z-10'>London</p>
                    </div>

     
      </div>
      <div>
              <div className=' relative'>
                    <img src={bercelona} alt="img"  />
                    <p className=' absolute top-[332px] left-[80px] text-[26px]  font-semibold font-jost text-[#fff] z-10'>Batcelona</p>
                    </div>

      </div>
      <div>
        
                 <div className=' relative'>
                    <img src={rome} alt="img"  />
                    <p className=' absolute top-[332px] left-[80px] text-[26px]  font-semibold font-jost text-[#fff] z-10'>Rome</p>
                    </div> 
      </div>


            <div>
        
                    <div className=' relative'>
                    <img src={newwork} alt="img"  />
                    <p className=' absolute top-[332px] left-[80px] text-[26px]  font-semibold font-jost text-[#fff] z-10'>New York</p>
                    </div>

      
      </div>
      <div>
           <div className=' relative'>
                    <img src={london} alt="img"  />
                    <p className=' absolute top-[332px] left-[80px] text-[26px]  font-semibold font-jost text-[#fff] z-10'>London</p>
                    </div>

     
      </div>
      <div>
              <div className=' relative'>
                    <img src={bercelona} alt="img"  />
                    <p className=' absolute top-[332px] left-[80px] text-[26px]  font-semibold font-jost text-[#fff] z-10'>Batcelona</p>
                    </div>

      </div>
      <div>
        
                 <div className=' relative'>
                    <img src={rome} alt="img"  />
                    <p className=' absolute top-[332px] left-[80px] text-[26px]  font-semibold font-jost text-[#fff] z-10'>Rome</p>
                    </div> 
      </div>
  










    </Slider>
















                    
{/* 
                    <div className=' relative'>
                    <img src={newwork} alt="img"  />
                    <p className=' absolute top-[332px] left-[80px] text-[26px]  font-semibold font-jost text-[#fff] z-10'>New York</p>
                    </div>


                    <div className=' relative'>
                    <img src={london} alt="img"  />
                    <p className=' absolute top-[332px] left-[80px] text-[26px]  font-semibold font-jost text-[#fff] z-10'>London</p>
                    </div>


                    <div className=' relative'>
                    <img src={bercelona} alt="img"  />
                    <p className=' absolute top-[332px] left-[80px] text-[26px]  font-semibold font-jost text-[#fff] z-10'>Batcelona</p>
                    </div>


                     <div className=' relative'>
                    <img src={rome} alt="img"  />
                    <p className=' absolute top-[332px] left-[80px] text-[26px]  font-semibold font-jost text-[#fff] z-10'>Rome</p>
                    </div> */}

                <div className='py-[120px] flex justify-between items-center'>

                    <div className=' relative'>

                    <img src={popic} alt="popular-pic" />
                    <h2 className='w-[300px] text-[40px] font-semibold font-jost text-[#fff] absolute top-[60px] left-[60px]'>Things to do on 
your trip</h2>
<Link className='w-[154px] py-[19px] px-[54px] bg-[#fff] text-[15px] font-medium font-jost text-main absolute top-[217px] left-[67px] flex justify-center  rounded-[4px]'>Experinces</Link>
                    </div>
                    <div className='relative'>
                        <p className='text-[15px] font-medium font-jost text-[#fff] absolute top-[77px] left-[64px]'>Enjoy Summer Deals</p>
                        <h2 className='text-[40px] font-semibold font-jost text-[#fff] absolute top-[108px] left-[62px]'>Up to 70% Discount!</h2>
<Link className='w-[200px] py-[19px] px-[54px] bg-[#fff] text-[15px] font-medium font-jost text-main absolute top-[217px] left-[67px] flex justify-center  rounded-[4px]'>Learn More</Link>

                    <img src={popic2} alt="popular-pic" />
                    </div>

                </div>


            </div>

        </div>
    </section>
    
    </>
  )
}

export default Popular