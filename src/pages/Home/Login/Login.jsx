import React, { useContext } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Login = () => {
    const {signIn}=useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);
    const handleLogin=e=>{
        e.preventDefault();
        // const email = e.target.email.value;
        // const password = e.target.password.value;

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email,password);
        signIn(email,password)
        .then(res =>{
            console.log(res.user);

            navigate(location?.state ? location.state:'/')
         })
        .catch(error =>{
            console.error(error);
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl text-center my-3"> Please Login</h2>
            <form onSubmit={handleLogin} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <p className='text-center'>Don't have an account <Link to='/register' className='text-blue-600 font-bold'>Register</Link></p>
        </div>
    );
};

export default Login;