import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AppliedJobCard = ({ data }) => {
              
    const { id, logo, job_title,company_name,remote_or_onsite,job_type,location, job_description, job_responsibility, educational_requirements, experiences, contact_information, salary } = data;

    return (
        <div className="grid grid-cols-12 gap-4 border-2 mb-6 p-5">
            <div className="col-span-3  bg-slate-200 flex justify-center items-center rounded-md">
                <img src={logo} alt="" />
            </div>
            <div className="col-span-6  ">
            <h1 className="text-xl font-bold">{job_title}</h1>
            <h5 className="font-semibold text-gray-500 my-2">{company_name}</h5>
            <div className="flex gap-4">
                <p className="px-5 py-2 rounded-md text-blue-600 font-bold border-2 border-blue-800">{remote_or_onsite}</p>
                <p className="px-5 py-2 rounded-md text-blue-600 font-bold border-2 border-blue-800">{job_type}</p>

            </div>
            <div className="flex gap-4 my-3 shrink">
                <p className="font-semibold text-xl text-gray-500 ">{location}</p>
                <p className="font-semibold text-xl text-gray-500 ">Salary : {salary}</p>
            </div>
            </div>
            <div className="col-span-3   flex justify-end items-center">
            <Link to={`/JobDetail/${id} `}><button className=" btn px-6 p-btn">View Details</button></Link>
            </div>
        </div>
    );
};

export default AppliedJobCard;
AppliedJobCard.propTypes = {
    data: PropTypes.object.isRequired, 
};