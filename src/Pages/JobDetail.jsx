import { AiOutlineDollarCircle } from "react-icons/ai";
import { CiCalendar } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

import { useLoaderData, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";



const JobDetail = () => {
    const { jobId } = useParams()
    const IntId = parseInt(jobId)
    const jobs = useLoaderData();

    const data = jobs.find(job => job.id == IntId)
    const { id, job_title, job_description, job_responsibility, educational_requirements, experiences, contact_information, salary } = data;
    const navigate = useNavigate();


    // const localDatas = localStorage.getItem('appliedID');
    // console.log(localDatas);

    const getLocalData = () => {

        const localDatas = localStorage.getItem('appliedID');

        if (localDatas) {
            if (localDatas) {
                return JSON.parse(localDatas);
            }

        }
        return [];
    }



    const applyHandel = (id) => {
        const localSdata = getLocalData();
        const isExists = localSdata.find(jobId=>jobId===id);
      
        if (!isExists) {
           
            localSdata.push(id);
            localStorage.setItem('appliedID',JSON.stringify(localSdata) )
            
        }

    }



    return (
        <div>
            <div className=" bg-blue-100  bg-[url(src/assets/images/bg1.png)] bg-no-repeat bg-contain pt-8 " >
                {/* <img src="/src/assets/images/bg1.png" alt="" /> */}
                <h1 className="font-bold text-2xl py-8 text-center">Job Details</h1>
            </div>

            <div className="my-10 w-11/12 mx-auto flex gap-6 flex-col lg:flex-row">
                <div className="flex-1 ">
                    <p className="font-bold mb-8"> Job Description : <span className="font-normal text-gray-500">{job_description}</span> </p>
                    <p className="font-bold mb-8"> Job Responsibility: <span className="font-normal text-gray-500">{job_responsibility}</span> </p>
                    <h3 className="font-bold mb-2">Educational Requirement : </h3>
                    <p className="font-normal text-gray-500 mb-8">{educational_requirements}</p>
                    <h3 className="font-bold mb-2">Experiences :</h3>
                    <p className="font-normal text-gray-500 mb-8">{experiences}</p>
                </div>

                <div className="lg:w-4/12">
                    <div className=" bg-[#d7d8dd] rounded-sm p-7 mb-4">

                        <h1 className="my-4 text-xl font-bold">Job Details</h1>
                        <hr />
                        <p className="font-normal text-gray-600 mt-6 mb-3 flex gap-2 items-center "> <AiOutlineDollarCircle /> <span className="font-bold text-gray-900"> Salary :  </span> {salary}</p>
                        <p className="font-normal text-gray-600 mb-6 flex gap-2 items-center"> <CiCalendar /> <span className="font-bold text-gray-900"> Job Title :  </span> {job_title} </p>
                        <h1 className="my-4 text-xl font-bold">Contact Information</h1>
                        <hr />
                        <p className="font-normal text-gray-600 mt-6 mb-3 flex gap-2 items-center "> <FaPhoneAlt /> <span className="font-bold text-gray-900"> Phone :  </span> {contact_information.phone} </p>
                        <p className="font-normal text-gray-600 mt-6 mb-3 flex gap-2 items-center "> <MdOutlineMailOutline /> <span className="font-bold text-gray-900"> Email :  </span> {contact_information.email}</p>
                        <p className="font-normal text-gray-600 mt-6 mb-3 flex gap-2 items-center "> <CiLocationOn /> <span className="font-bold text-gray-900"> Address :  </span> {contact_information.address}</p>


                    </div>
                    <div>
                        <button onClick={() => applyHandel(id)} className="btn px-6 p-btn w-full font-bold">  Apply Now</button>
                    </div>
                </div>

            </div>

            <div className=" flex justify-center mb-10">
                <Link  > <button onClick={() => navigate(-1)} className="btn px-6 p-btn  font-bold">Go Back</button> </Link>

            </div>

        </div>
        //    <></>
    );
};

export default JobDetail;