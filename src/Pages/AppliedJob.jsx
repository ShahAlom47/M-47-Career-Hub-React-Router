import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AppliedJobCard from "./AppliedJobCard";


const AppliedJob = () => {

    const jobs = useLoaderData();

    const getLocalData = () => {
        const localDatas = localStorage.getItem('appliedID');
        return localDatas ? JSON.parse(localDatas) : [];
    }

    const [appliedJobList, setAppliedJobList] = useState([]);
    const [filterData, setFilterData] = useState([]);
  
    useEffect(() => {

        const appliedJobs = getLocalData();
        if (appliedJobs.length > 0) {

            const appliedjobss = jobs.filter(job => appliedJobs.includes(job.id));
            setAppliedJobList(appliedjobss);
            setFilterData(appliedjobss)
        }
        
    }, [])

   

   

    const felterHandel =(category)=>{
       
            if(category==='All'){

            setFilterData(appliedJobList)
            }
            else if(category==='remote'){
                const data= appliedJobList.filter((x)=>x.remote_or_onsite==='Remote')
                setFilterData(data)
            }
            else if(category==='onsite'){
                const data= appliedJobList.filter((x)=>x.remote_or_onsite==='Onsite')
                setFilterData(data)
            }
    }

console.log(filterData);

    return (
        <div>
            <div className=" bg-blue-100  bg-[url(src/assets/images/bg1.png)] bg-no-repeat bg-contain pt-8 " >
                {/* <img src="/src/assets/images/bg1.png" alt="" /> */}
                <h1 className="font-bold text-2xl py-8 text-center">Applied Jobs </h1>
            </div>
            <div className="my-16 w-11/12 mx-auto">
                <div className=" flex justify-end items-end">
                    <div className="dropdown dropdown-hover   ">
                        <div tabIndex={0} role="button" className="btn bg-gray-300 m-1">Filter</div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li onClick={()=>felterHandel('All')} ><a>All</a></li>
                            <li onClick={()=>felterHandel('remote')} ><a>Remote</a></li>
                            <li onClick={()=>felterHandel('onsite')} ><a>On Site</a></li>
                           
                        </ul>
                    </div>

                </div>
                <div>


                </div>

            </div>
            <div className="w-11/12 m-auto mb-14 ">

                {
                    filterData.map(data=><AppliedJobCard key={data.id} data={data}></AppliedJobCard>)
                }
            </div>

        </div>
    );
}

export default AppliedJob;