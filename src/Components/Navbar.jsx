import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth Provider/AuthProvider";


const Navbar = () => {
    
    const { user, logOutUser } = useContext(AuthContext)

    const logOutHendel = () => {
        logOutUser()
            .then(() => {
               
            }).catch((error) => {
                console.log(error);
            });
            
    }


    return (
        <div className="bg-blue-100">
            <div className="navbar  w-11/12 m-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[#757575] font-semibold">
                            <li> <NavLink to={'/stati'} >Statistics </NavLink></li>

                            <li> <NavLink to={'/applied'} > Applied Jobs</NavLink></li>
                            <li> <NavLink to={'/blog'} > Blogs </NavLink></li>

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl">Career Hub</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1  text-[#757575] font-semibold">
                        <li> <NavLink to={'/'} >Home </NavLink></li>
                      {
                        user&&<li> <NavLink to={'/appliedJob'} > Applied Jobs</NavLink></li>
                      }
                        
                        <li> <NavLink to={'/blog'}  > Blogs </NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="mx-5 font-semibold p-3">
                        <p>User:{user?.displayName}</p>
                    </div>
                    {
                        user ? <button onClick={logOutHendel} className=" btn px-6 p-btn" >LogOut</button> :
                            <> <Link to={'/login'}><button className=" btn px-6 p-btn" >LogIn</button></Link>
                                <Link to={'/register'}><button className=" btn px-6 p-btn" >Register</button></Link>

                            </>
                    }



                </div>
            </div>
        </div>
    );
};

export default Navbar;