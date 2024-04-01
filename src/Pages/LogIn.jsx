import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth Provider/AuthProvider";
import { useContext, useRef, useState } from "react";
import auth from "../firebase/firebase.config";
import { sendPasswordResetEmail } from "firebase/auth";


const LogIn = () => {

    const [logSuccess, setLogSuccess] = useState(null)
    const [logError, setLogError] = useState(null)
    const [showPass,setShowPass]=useState(false);
    const { user, logInUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const forgetRef =useRef(null);

        console.log(user);

    const loginFormHandel = (e) => {
        e.preventDefault();
        setLogError('')
        setLogSuccess('')
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password);

        if (password.length < 6) {
            setLogError('password  Showd be must 6 character or longer ')
            return
        }


        logInUser(email, password)
            .then((userCredential) => {
                const users = userCredential.user;
                setLogSuccess('LogIn Successfully')
                // console.log(users);
                if (users.emailVerified) {
                    setLogSuccess('LogIn Successfully')
                }
                else {
                    alert(`'Please verify email'`)

                }
                navigate('/')
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                setLogError(errorMessage)
            });


    }

    const forgetPassHandel = () => {
        const email= forgetRef.current.value
        console.log(email);
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                // ..
            })
            .catch((error) => {
              
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className=" card  w-full max-w-lg  shadow-2xl bg-gray-100">
                    <form onSubmit={loginFormHandel} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span  className="label-text">Email</span>
                            </label>
                            <input ref={forgetRef} type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className=" absolute flex ">
                            <input type={showPass?'text':'password'} name="password" placeholder="password" className="input input-bordered" required />
                                <p onClick={()=>setShowPass(!showPass)} className="relative top-3 right-12 ">{showPass?'Hide':'Show'}</p>
                            </div>
                            <label className="label mt-4">
                                <a onClick={forgetPassHandel} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                <Link to={'/register'} className="label-text-alt link link-hover">Create New Accoute</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">

                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                        <div>
                            <p className="text-green-500">{logSuccess}</p>
                            <p className=" text-red-500">{logError}</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;