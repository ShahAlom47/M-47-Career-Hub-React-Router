import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const CategoryList = () => {

    const [categorys ,setCategorys]=useState();

    useEffect(()=>{
            fetch(`categories.json`)
            .then(res=>res.json())
            .then(data=>setCategorys(data))

    },[])

// console.log(categorys);

    return (
        <div>
            <div className=" listHeading w-11/12 m-auto">
                <h1 className="text-4xl font-bold text-center mb-5">Featured Jobs</h1>
                <p className="font-medium text-gray-400 text-center mb-9">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div>
                {
                   categorys.map((category) => <CategoryCard category={category} key={category.id}> </CategoryCard>)
                }

            </div>

        </div>
    );
};

export default CategoryList