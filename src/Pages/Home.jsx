import { useContext } from "react";
import Banner from "../Components/Banner";
import CategoryList from "../Components/CategoryList";
import FeaturedJobs from "../Components/FeaturedJobs";
import { AuthContext } from "../Auth Provider/AuthProvider";


const Home = () => {
    const {user}=useContext(AuthContext);
    console.log(user);
    return (
        <div>
            <Banner></Banner>
            <CategoryList></CategoryList>
            {
                user&& <FeaturedJobs></FeaturedJobs>
            
            }
           
            
            
        </div>
    );
};

export default Home;