import { useLoaderData, useParams } from "react-router-dom";


const AppliedJob = () => {

    const jobs = useLoaderData();
    console.log(jobs);

    const getLocalData = () => {

        const localDatas = localStorage.getItem('appliedID');
      return  localDatas? JSON.parse(localDatas) : [];

    //   
     }

    console.log(getLocalData());
    return (
        <div>
            
        </div>
    );
}

export default AppliedJob;