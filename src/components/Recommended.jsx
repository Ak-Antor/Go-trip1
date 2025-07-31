import React from 'react'
import { Link } from 'react-router'
import { IoMdArrowDropdown } from "react-icons/io";
import london from '../assets/images/london pic.png'
import rome from '../assets/images/rome pic.png'
import newyork from '../assets/images/new york.png'
import bercelona from '../assets/images/bercelona copy.png'
import RecoProps from './common/RecoProps';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Recommended = () => {

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3
  };







  return (
    <>



    
    <section id='Recommended' className=''>
        <div className="container">
            <div className="recom_row">
                <div className='flex justify-between  items-center'>

                <div>
                    <h2 className='text-[30px] font-semibold font-jost text-[#051036]'>Recommended</h2>
                    <p className='text-[16px] font-normal font-jost text-[#697488]'>Interdum et malesuada fames ac ante ipsum</p>
                </div>
                <div className='w-[140px] py-[10px] px-[20px] border border-[#DDDDDD] rounded-[4px]'>
                    <Link to={'/'} className='text-[16px] flex justify-between items-center font-medium font-jost text-[#051036]'>Hotel
                    <IoMdArrowDropdown />
                    </Link>
                </div>

                </div>
                <div className='flex justify-between items-center'>

                </div>





                     <Slider {...settings}>
        <div>
          <RecoProps recoExtra={'Breakfast included'} recoimg={london} recoh2={'The Montcalm At Brewery London City'} recop={'Westminster Borough, London'} />


        </div>
        <div>
           <RecoProps  recoimg={bercelona} recoh2={'Staycity Aparthotels Deptford Bridge Station'} recop={'Ciutat Vella, Barcelona'} />
        </div>
        <div>
       <RecoProps recoExtra={'Best Seller'}  recoimg={newyork} recoh2={'The Westin New York at Times Square'} recop={'Manhattan, New York'} />
        </div>
        <div>
               <RecoProps recoExtra={'Top Rated'}  recoimg={rome} recoh2={'DoubleTree by Hilton Hotel New York Times Square West'} recop={'Vaticano Prati, Rome'} />
        </div>
        <div>
          <RecoProps recoExtra={'Breakfast included'} recoimg={london} recoh2={'The Montcalm At Brewery London City'} recop={'Westminster Borough, London'} />
        </div>
        <div>
          <RecoProps  recoimg={bercelona} recoh2={'Staycity Aparthotels Deptford Bridge Station'} recop={'Ciutat Vella, Barcelona'} />
        </div>
        <div>
          <RecoProps recoExtra={'Best Seller'}  recoimg={newyork} recoh2={'The Westin New York at Times Square'} recop={'Manhattan, New York'} />
        </div>
        <div>
        <RecoProps recoExtra={'Top Rated'}  recoimg={rome} recoh2={'DoubleTree by Hilton Hotel New York Times Square West'} recop={'Vaticano Prati, Rome'} />

        </div>
     
                     </Slider>











                    {/* <RecoProps recoExtra={'Breakfast included'} recoimg={london} recoh2={'The Montcalm At Brewery London City'} recop={'Westminster Borough, London'} />
                    <RecoProps  recoimg={bercelona} recoh2={'Staycity Aparthotels Deptford Bridge Station'} recop={'Ciutat Vella, Barcelona'} />
                    <RecoProps recoExtra={'Best Seller'}  recoimg={newyork} recoh2={'The Westin New York at Times Square'} recop={'Manhattan, New York'} />
                    <RecoProps recoExtra={'Top Rated'}  recoimg={rome} recoh2={'DoubleTree by Hilton Hotel New York Times Square West'} recop={'Vaticano Prati, Rome'} /> */}











            </div>
        </div>
    </section>
    
    </>
  )
}

export default Recommended