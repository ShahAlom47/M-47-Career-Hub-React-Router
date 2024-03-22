import { useEffect, useState } from "react";
import JobsCard from "./JobsCard";
import { Link } from "react-router-dom";


const FeaturedJobs = () => {
    const [jobs,setJobs]=useState([]);
    const [datalength,setDataLength]=useState(4);

    useEffect(() => {
        fetch(`jobs.json`)
            .then(res => res.json())
            .then(data => setJobs(data))

    }, [])

    return (
        <div>
            <div className=" listHeading w-11/12 m-auto">
                <h1 className="text-4xl font-bold text-center mb-5">Featured Jobs</h1>
                <p className="font-medium text-gray-400 text-center mb-9">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className=" grid gap-3 grid-cols-1 lg:grid-cols-2 mb-10">
                {
                    jobs.slice(0,datalength).map((job) =>  <JobsCard key={job.id} job={job}> </JobsCard> )
                }

            </div>
            <div className="flex justify-center mb-28 ">
            <button 
            onClick={()=>setDataLength(jobs.length)}
            className={`btn px-6 p-btn ${datalength === jobs.length ? 'hidden' : ''}`}>

                
                View All </button>
            </div>
            
        </div>
    );
};

export default FeaturedJobs;