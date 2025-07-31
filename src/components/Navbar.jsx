import React from 'react'
import bannerimg from '../assets/images/bannerBg.png'
import logo from '../assets/images/brand-logo.png'
import { Link } from 'react-router'
import { FiSearch } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  return (
    <>
    
    <section id='navbar' style={{ background: `URL(${bannerimg})`,backgroundRepeat: `no-repeat`, backgroundSize: `cover`, }} 
    className='py-[20px]'>
        <div className="container">
            <div className="navbar_row flex justify-between items-center">
                <Link to={'/'}><img src={logo} alt="main-logo" /> </Link>
                 <div className='w-[481px]'>
                    <ul className=' flex justify-between items-center'>
                        <li className='text-[15px] font-medium font-jost text-[#fff]'><Link to={'/'}>Home</Link></li>
                        <li className='text-[15px] font-medium font-jost text-[#fff]'><Link to={'/'} className='flex gap-[10px] items-center'>Categories <IoMdArrowDropdown />  </Link></li>
                        <li className='text-[15px] font-medium font-jost text-[#fff]'><Link to={'/'}>Destination</Link></li>
                        <li className='text-[15px] font-medium font-jost text-[#fff]'><Link to={'/'}>Blog</Link></li>
                        <li className='text-[15px] font-medium font-jost text-[#fff]'><Link to={'/'}>Contact</Link></li>
                    </ul>
                </div>
                <div><Link to={'/'} className='text-[14px] flex items-center gap-[10px] font-normal font-jost text-[#fff]'>
                
                
                USD
                <IoMdArrowDropdown />
                
                </Link></div>
                <Link to={'/'} className='w-[180px] py-[15px] hover:bg-[#000] duration-[.4s] px-[30px] border rounded-[4px] border-[#fff] text-[14px] font-normal font-jost text-[#fff] flex justify-center  items-center '>Sign In / Register</Link>
            </div>

            <div className='mt-[244px] text-center'>
                <h1 className='text-[60px] font-semibold font-jost text-[#fff]'>Find Next Place To Visit</h1>
                <p className='mt-[6px] text-[16px] font-normal font-jost text-[#fff]'>Discover amzaing places at exclusive deals</p>
                <div className='w-[566px] text-center ml-[500px] mt-[60px] mb-[26px] flex justify-between items-center'>
                    <Link to={'/'} className='text-[15px] font-medium font-jost text-[#fff]'>Hotel</Link>
                    <Link to={'/'} className='text-[15px] font-medium font-jost text-[#fff]'>Tour</Link>
                    <Link to={'/'} className='text-[15px] font-medium font-jost text-[#fff]'>Activity</Link>
                    <Link to={'/'} className='text-[15px] font-medium font-jost text-[#fff]'>Holiday</Link>
                    <Link to={'/'} className='text-[15px] font-medium font-jost text-[#fff]'>Rentals</Link>
                    <Link to={'/'} className='text-[15px] font-medium font-jost text-[#fff]'>Car</Link>
                    <Link to={'/'} className='text-[15px] font-medium font-jost text-[#fff]'>Flights</Link>
                </div>
                <div className='w-[900px] bg-[#fff] mb-[217px] py-[18px] px-[36px] flex justify-between items-center text-center ml-[320px] rounded-[60px]'>
                   
             
                        <div className='text-center'>
                            <h2 className='text-[15px] font-medium font-jost text-primary'>Location</h2>
                         
                            <input className='text-[15px] font-normal font-jost outline-none text-[#697488]' type=" location" placeholder='Where are you going?' />
                        </div>
                        <span className=' inline-block border border-[#DADFE6] h-[40px]'></span>
                                               <div className='text-center'>
                            <h2 className='text-[15px] font-medium font-jost text-primary'>Check in - Check out</h2>
                          
                               <input className='text-[15px] font-normal font-jost outline-none text-[#697488]' type=" " placeholder='Wed 2 Mar  -  Fri 11 Apr' />
                        </div>
                        <span className=' inline-block border border-[#DADFE6] h-[40px]'></span>

                                               <div>
                            <h2 className='text-[15px] font-medium font-jost text-primary'>Guest</h2>
                   
                                 <input className='text-[15px] font-normal font-jost outline-none text-[#697488]' type="text" placeholder='2 adults - 1 childeren - 1 room' />
                        </div>



                        <Link to={'/'}  className='w-[146px]  py-[19px] px-[35px] text-center rounded-full flex justify-between items-center bg-[#3554D1]' >
                        <FiSearch className='text-[17px] text-[#fff]' />
                        <p className='text[15px] font-medium font-jost text-[#fff]'>Search</p></Link>

                  
                   
                </div>
            </div>






        </div>
    </section>
    
    
    
    
    </>
    )
}

export default Navbar