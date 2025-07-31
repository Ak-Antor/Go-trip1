import React from 'react'
import logo from '../assets/images/newsletter.png'
import { Link } from 'react-router'
import apple from '../assets/images/apple.png'
import play from '../assets/images/playDownloa.png'
import { TbWorld } from "react-icons/tb";
import { LiaDollarSignSolid } from "react-icons/lia";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    
    <section className='bg-[#0D2857]'>

        <div className="container">
            <div className="footer_row flex  justify-between items-center py-[65px]">
                <div className='flex  items-center gap-[37px]'>
                    <img src={logo} alt="footer-logo" />
                    <div>
                    <h2 className='text-[26px] font-semibold font-jost text-[#fff]'>Your Travel Journey Starts Here</h2>
                    <p className='text-[16px] font-normal font-jost text-[#fff]'>Sign up and we'll send the best deals to you</p>

                    </div>
                </div>
                <div className='w-[556px] flex gap-[10px]'>
                    <input className='w-[410px] bg-[#fff] rounded-[4px] pt-[18px] pb-[16px] pl-[20px] text-[15px] font-normal font-jost text-[#051036]' type="text" placeholder='Your Email' />
                    <button className='w-[136px] text-[15px] font-medium font-jost text-[#fff] bg-[#3554D1] py-[19px] px-[35px] rounded-[4px]'>Subscribe</button>

                </div>
            </div>
        </div>
    </section>

    <section>
        <div className="container">
            <div className='flex justify-between py-[60px] '>
                <div>
                    <h2 className='text-[16px] font-medium font-jost text-primary'>Contact Us</h2>
                    <div className='pt-[30px]'>
                        <h2 className='text-[14px] font-normal font-jost text-primary'>Toll Free Customer Care</h2>
                        <p className='text-[18px] font-medium pt-[4px] font-jost text-main'>+(1) 123 456 7890</p>
                    </div>
                    <div className='pt-[36px]'>
                        <h2 className='text-[14px] font-normal font-jost text-primary'>Need live support?</h2>
                        <p className='text-[18px] font-medium pt-[4px] font-jost text-main'>hi@gotrip.com</p>
                    </div>
                </div>
                <div>
                    <h2 className='text-[16px] font-medium font-jost text-primary'>Company</h2>
                    <div className='pt-[30px]'>
                        <ul className='flex flex-col gap-[20px]'>
                            <li className='text-[15px] font-normal font-jost text-primary'><Link>About Us</Link></li>
                            <li className='text-[15px] font-normal font-jost text-primary'><Link>Careers</Link></li>
                            <li className='text-[15px] font-normal font-jost text-primary'><Link>Blog</Link></li>
                            <li className='text-[15px] font-normal font-jost text-primary'><Link>Press</Link></li>
                            <li className='text-[15px] font-normal font-jost text-primary'><Link>Gift Cards</Link></li>
                            <li className='text-[15px] font-normal font-jost text-primary'><Link>Magazine</Link></li>
                        </ul>
      
                    </div>
                </div>
                <div>
                    <h2 className='text-[16px] font-medium font-jost text-primary'>Support</h2>
                    <div className='pt-[30px]'>
                        <ul className='flex flex-col gap-[20px]'>
                            <li className='text-[15px] font-normal font-jost text-primary'><Link>Contact</Link></li>
                            <li className='text-[15px] font-normal font-jost text-primary'><Link>Legal Notice</Link></li>
                            <li className='text-[15px] font-normal font-jost text-primary'><Link>Privacy Policy</Link></li>
                            <li className='text-[15px] font-normal font-jost text-primary'><Link>Terms and Conditions</Link></li>
                            <li className='text-[15px] font-normal font-jost text-primary'><Link>Sitemap</Link></li>
          
                        </ul>
      
                    </div>
                </div>
                 <div>
                    <h2 className='text-[16px] font-medium font-jost text-primary'>Other Services</h2>
                    <div className='pt-[30px]'>
                        <ul className='flex flex-col gap-[20px]'>
                            <li className='text-[15px] font-normal font-jost text-primary'><Link>Car hire</Link></li>
                            <li className='text-[15px] font-normal font-jost text-primary'><Link>Activity Finder</Link></li>
                            <li className='text-[15px] font-normal font-jost text-primary'><Link>Tour List</Link></li>
                            <li className='text-[15px] font-normal font-jost text-primary'><Link>Flight finder</Link></li>
                            <li className='text-[15px] font-normal font-jost text-primary'><Link>Cruise Ticket</Link></li>
                            <li className='text-[15px] font-normal font-jost text-primary'><Link>Holiday Rental</Link></li>
                            <li className='text-[15px] font-normal font-jost text-primary'><Link>Travel Agents</Link></li>
                        </ul>
      
                    </div>
                </div>
                 <div>
                    <h2 className='text-[16px] font-medium font-jost text-primary'>Mobile</h2>
                    <div className='pt-[30px]'>

                    <Link to={'/'} className='pt-[30px]'>
                        <img src={apple} alt="logo" />
                        <img className='pt-[20px]' src={play} alt="logo" />
                    </Link>
         
                    </div>
      
                </div>
            </div>

                <div className='w-full border border-[#DDDDDD]'></div>




        </div>



<div className='flex justify-around items-center py-[20px]'>

        <div className='flex'>
            <div className='pr-[30px]'> <h2 className='text-[14px] font-medium font-jost text-primary'>© 2022 GoTrip LLC All rights reserved.</h2> </div>
            <ul className='flex items-center gap-[15px]'>
                
                
                <li className='text-[14px] font-medium font-jost text-primary'><Link to={'/'}> Privacy</Link></li>
                <li className='text-[14px] font-medium font-jost text-primary'><Link to={'/'}> Terms</Link></li>
                <li className='text-[14px] font-medium font-jost text-primary'><Link to={'/'}>Site Map</Link> </li>
        
            </ul>
        </div>
        <div className='flex'>

            <Link className='flex items-center gap-[4px]'>
                <TbWorld />
                <h2 className='text-[14px] underline font-medium font-jost text-primary'>English (US)</h2>

            </Link>
            <Link className='flex items-center pl-[6px] gap-[4px]'>
                <LiaDollarSignSolid />
                <h2 className='text-[14px] underline font-medium font-jost text-primary'>USD</h2>

            </Link>
            <div className='flex gap-[10px] pl-[30px]'>
                <Link ><FaFacebookF /></Link>
                <Link ><FaTwitter /></Link>
                <Link ><FaInstagram /></Link>
                <Link ><FaLinkedinIn /></Link>
            </div>


        </div>



</div>

    </section>


    

    
    
    </>
  )
}

export default Footer


