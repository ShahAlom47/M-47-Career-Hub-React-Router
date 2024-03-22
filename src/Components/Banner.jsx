

const Banner = () => {
    return (
        <div className="hero  bg-blue-100 mb-20">
            <div className="hero-content flex-col lg:flex-row-reverse w-11/12 mx-auto pb-0">
                <img src="/src/assets/images/user.png" className="max-w-sm rounded-lg " />
                <div className=" w-5/12">
                    <h1 className="text-5xl font-bold">One Step Closer To Your <span className="text-[#7E90FE]"> Dream Job </span></h1>
                    <p className="py-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className="btn px-6 p-btn">Get Started</button>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;