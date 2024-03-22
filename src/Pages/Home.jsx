import Banner from "../Components/Banner";
import CategoryList from "../Components/CategoryList";
import FeaturedJobs from "../Components/FeaturedJobs";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeaturedJobs></FeaturedJobs>
            
        </div>
    );
};

export default Home;