import React from 'react'
import CommonHead from './common/CommonHead'
import ins1 from '../assets/images/inspiration1.png'
import ins2 from '../assets/images/inspiration_2.png'
import ins3 from '../assets/images/inspiration_3.png'











const Inspiration = () => {
  return (
    <>
    
    
    <section id='inspiration' className='py-[120px]'>
        <div className="container">
            <CommonHead HeadText={'Get inspiration for your next trip'} HeadP={'Interdum et malesuada fames'} />
            <div className="div flex justify-between items-center pt-[40px]">

                <div>
                    <img className='pb-[20px]' src={ins1} alt="ins-img" />
                    <h2 className='w-[410px] text-[18px] pb-[5px] font-medium font-jost text-primary'>10 European ski destinations you should visit this winter</h2>
                    <p className='text-[15px] font-normal font-jost text-[#697488]'>April 06, 2022</p>
                </div>
                       <div>
                    <img className='pb-[20px]' src={ins2} alt="ins-img" />
                    <h2 className='w-[410px] text-[18px] pb-[5px] font-medium font-jost text-primary'>Booking travel during Corona: good advice in an uncertain time</h2>
                    <p className='text-[15px] font-normal font-jost text-[#697488]'>April 06, 2022</p>
                </div>
                       <div>
                    <img className='pb-[20px]' src={ins3} alt="ins-img" />
                    <h2 className='w-[410px] text-[18px] pb-[5px] font-medium font-jost text-primary'>Where can I go? 5 amazing countries that are open right now</h2>
                    <p className='text-[15px] font-normal font-jost text-[#697488]'>April 06, 2022</p>
                </div>

            </div>
        </div>
    </section>
    
    
    
    
    
    </>
  )
}

export default Inspiration