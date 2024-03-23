import { AiOutlineDollarCircle } from "react-icons/ai";
import { CiCalendar } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const JobDetail = () => {
    const {id} =useParams()
    const IntId =parseInt(id)
    const JobDatas= useLoaderData();
   
    const getData = JobDatas.find(data => data.id === IntId);
    const [data,setData]=useState(getData)

    const {job_title,job_description,job_responsibility,educational_requirements,experiences, contact_information }=data;
  

    return (
        <div>
            <div className=" bg-blue-100  bg-[url(src/assets/images/bg1.png)] bg-no-repeat bg-contain pt-8 " >
                {/* <img src="/src/assets/images/bg1.png" alt="" /> */}
                <h1 className="font-bold text-2xl py-8 text-center">Job Details</h1>
            </div>

            <div className="my-10 w-11/12 mx-auto flex gap-6 flex-col lg:flex-row">
                <div className="flex-1 ">
                    <p className="font-bold mb-8"> Job Description : <span className="font-normal text-gray-500"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique libero, tempore repellat deleniti omnis aut cumque voluptate aliquid modi nihil laboriosam labore reprehenderit ratione laudantium. Cupiditate necessitatibus nulla cum quae!</span> </p>
                    <p className="font-bold mb-8"> Job Responsibility: <span className="font-normal text-gray-500"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique libero, tempore repellat deleniti omnis aut cumque voluptate aliquid modi nihil laboriosam labore reprehenderit ratione laudantium. Cupiditate necessitatibus nulla cum quae!</span> </p>
                    <h3 className="font-bold mb-2">Educational Requirement :</h3>
                    <p className="font-normal text-gray-500 mb-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita!</p>
                    <h3 className="font-bold mb-2">Educational Requirement :</h3>
                    <p className="font-normal text-gray-500 mb-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita!</p>
                </div>
               
               <div className="lg:w-4/12">
                <div className=" bg-[#d7d8dd] rounded-sm p-7 mb-4">

                    <h1 className="my-4 text-xl font-bold">Job Details</h1>
                    <hr />
                    <p className="font-normal text-gray-600 mt-6 mb-3 flex gap-2 items-center "> <AiOutlineDollarCircle /> <span className="font-bold text-gray-900"> Salary :  </span> 100K - 150K (Per Month)</p>
                    <p className="font-normal text-gray-600 mb-6 flex gap-2 items-center"> <CiCalendar /> <span className="font-bold text-gray-900"> Job Title :  </span> Product Designer</p>
                    <h1  className="my-4 text-xl font-bold">Contact Information</h1>
                    <hr />
                    <p className="font-normal text-gray-600 mt-6 mb-3 flex gap-2 items-center "> <FaPhoneAlt /> <span className="font-bold text-gray-900"> Phone :  </span> 100K - 150K (Per Month)</p>
                    <p className="font-normal text-gray-600 mt-6 mb-3 flex gap-2 items-center "> <MdOutlineMailOutline /> <span className="font-bold text-gray-900"> Email :  </span> 100K - 150K (Per Month)</p>
                    <p className="font-normal text-gray-600 mt-6 mb-3 flex gap-2 items-center "> <CiLocationOn/> <span className="font-bold text-gray-900"> Address :  </span> 100K - 150K (Per Month)</p>
              
                    
                </div>
                <div>
                  <Link > <button className="btn px-6 p-btn w-full font-bold">Apply Now</button> </Link>
                </div>
                </div>

            </div>
        </div>
    );
};

export default JobDetail;