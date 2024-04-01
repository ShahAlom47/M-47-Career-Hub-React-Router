import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase/firebase.config";
import { useContext, useState } from "react";
import { AuthContext } from "../Auth Provider/AuthProvider";




const Register = () => {
    const [logSuccess, setLogSuccess] = useState(null)
    const [logError, setLogError] = useState(null)
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate()

    const { user, registerUser } = useContext(AuthContext);

    const regFormHandel = (e) => {
        e.preventDefault();
        setLogError('')
        setLogSuccess('')

        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        const trams = e.target.trams.checked
        // console.log(email, password, trams);

        if (password.length < 6) {

            setLogError('password  Showd be must 6 character or longer ')
            return
        }
        else if (!/[A-Z]/.test(password)) {
            setLogError('Must be provide A uppercase character in password ')
            return
        }
        else if (!trams) {

            setLogError('Please Check Tarams')
            return
        }


        registerUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setLogSuccess('Create User Successfully')
                console.log(user);
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: "https://example.com/jane-q-user/profile.jpg"
                }).then(() => {

                }).catch((error) => {

                });

                // email verification 
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        alert('Please check your email and verify your email ')
                    });

                navigate('/')

            })
            .catch((error) => {

                const errorMessage = error.message;
                setLogError(errorMessage)
                console.log(errorMessage);

            });

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className=" card  w-full max-w-lg  shadow-2xl bg-gray-100">
                    <form onSubmit={regFormHandel} className="card-body">
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control  ">
                        <label className="label" htmlFor="password">
                            <span className="label-text">Password</span>
                            </label>
                            <div className=" absolute   flex ">
                                <input type={showPass ? 'text' : 'password'} id="password" name="password" placeholder="password" className="input input-bordered" required />
                                <p onClick={() => setShowPass(!showPass)} className="relative top-3 right-12 ">{showPass ? 'Hide' : 'Show'}</p>
                            </div>

                            <div className=" flex items-center gap-3 pt-3 mt-4">
                                <input type="checkbox" name="trams" id="" />
                                <label htmlFor="trams" className="label-text-alt"> Check Our Trams And Conditions </label>
                            </div>
                            <label className="label ">
                                {/* <a href="#" className="label-text-alt link link-hover"></a> */}
                                <Link to={'/login'} className="label-text-alt link link-hover">Already have an Account</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">

                            <input className="btn btn-secondary" type="submit" value="Register" />

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

export default Register;