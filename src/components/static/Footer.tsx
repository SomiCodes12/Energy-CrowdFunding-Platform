import { FiPhoneCall } from "react-icons/fi"
import { MdOutlineMailLock , MdLocationOn } from "react-icons/md"
import {AiOutlineCopyrightCircle , AiOutlineTwitter , AiOutlineInstagram , AiFillLinkedin } from "react-icons/ai"
import { BsFacebook} from "react-icons/bs"

const Footer = () => {
  return (
    <div>
      <div className="w-full h-auto flex justify-center  items-center text bg-gray-600 flex-col ">
        <div className="w-[85%] h-full grid grid-cols-4 gap-10 justify-between items-center text-white meduim:flex-wrap meduim:w-full meduim:flex small:flex small:flex-wrap">
          <div className="border-white meduim:w-[300px]  meduim:pl-[25px] w-[300px]  h-[350px] flex justify-center flex-col">
            <div className="text-[30px] font-bold text-white">ecoFund</div>
            <div className="my-5 w-[100%] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, itaque.</div>
            <div>
                <div className="text-white text-[20px] font-bold">Join Newsletters</div>
                <div className="relative">
                <input className="w-[240px] h-[60px] rounded-[30px] border pl-4 mt-5 " placeholder="Email Address" type="text">
                </input>
                    <div className="w-[35px] h-[35px] rounded-[50%] bg-green-500 absolute right-12 bottom-4"></div>
                </div>
            </div>
          </div>
           <div className="border-white meduim:w-[300px]  meduim:pl-[25px]  w-[250px] h-[350px] ml-[60px] flex justify-center flex-col  ">
            
            <div className="text-white text-[25px] font-bold">Our Projects</div>
            <div className="my-2 hover:cursor-pointer hover:text-green-500 mt-5">Medical & Health</div>
            <div className="my-2 hover:cursor-pointer hover:text-green-500">Education</div>
            <div className="my-2 hover:cursor-pointer hover:text-green-500">Technology</div>
            <div className="my-2 hover:cursor-pointer hover:text-green-500">Film & Video</div>
            <div className="my-2 hover:cursor-pointer hover:text-green-500">Design</div>
          </div>
          <div className="border-white meduim:w-[300px]  meduim:pl-[15px]  w-[250px] h-[350px] ml-[75px] flex justify-center flex-col ">
            <div className="text-white text-[25px] font-bold">Company</div>
            <div className="my-2 hover:cursor-pointer hover:text-green-500 mt-5">Testimonials</div>
            <div className="my-2 hover:cursor-pointer hover:text-green-500">About Us</div>
            <div className="my-2 hover:cursor-pointer hover:text-green-500">Latest Events</div>
            <div className="my-2 hover:cursor-pointer hover:text-green-500">How it works</div>
            <div className="my-2 hover:cursor-pointer hover:text-green-500">Contact Us</div>
          </div>
          <div className="border-white meduim:w-[300px]   w-[250px] h-[350px] ml-[30px] flex justify-center flex-col items-center">
            <div className="text-white text-[25px] font-bold">Contact</div>
           <div className="flex items-center my-3 hover:cursor-pointer hover:text-green-500">
            <div className="mr-5 text-[25px]"><FiPhoneCall/></div>
            <div>
                <div>Phone Number</div>
                <div>+2348025831298</div>
            </div>
           </div>
           <div className="flex items-center my-3 hover:cursor-pointer hover:text-green-500">
            <div className="mr-5 text-[25px]"><MdOutlineMailLock/></div>
            <div>
                <div>Email Us</div>
                <div>example@test.com</div>
            </div>
           </div>
           <div className="flex items-center my-3 hover:cursor-pointer hover:text-green-500">
            <div className="mr-5 text-[25px]"><MdLocationOn/></div>
            <div>
                <div>Location</div>
                <div>31, Haruna Estate.</div>
            </div>
           </div>
           <div></div>
           <div></div>
          </div> 
          
         
        </div>
        <div className="w-[85%] h-[80px] bg-black mb-6 px-5 flex justify-between meduim:flex-col">
            <div className="flex text-white items-center"><AiOutlineCopyrightCircle/><div className="ml-2">Gavias. All Rights Reserved</div></div>
            <div className="w-[150px] flex justify-between items-center text-[25px] text-white">
    <AiOutlineTwitter/>
    <BsFacebook/>
    <AiOutlineInstagram/>
    <AiFillLinkedin/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;