import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const JobsCard = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
 
    return (
        <div className="border-4 p-10 ">
            <img className="mb-8" src={logo} alt="" />

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
            <Link to={`/JobDetail/${id} `}><button className=" btn px-6 p-btn">View Details</button></Link>
        </div>
    );
};

export default JobsCard;
JobsCard.propTypes = {
    job: PropTypes.object.isRequired,

};