import React, { useContext } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext);

    const handleRegister=e=>{
        e.preventDefault();
        // const email = e.target.email.value;
        // const password = e.target.password.value;

        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password =form.get('password');
        console.log(name,photo,email,password);

        createUser(email,password)
        .then(res =>{
            console.log(res.user);
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div>
        <Navbar></Navbar>
        <h2 className="text-3xl text-center my-3"> Please Register</h2>
        <form onSubmit={handleRegister} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
            <div className="form-control">
            <label className="label">
                <span className="label-text">Name</span>
            </label>
            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Photo URL</span>
            </label>
            <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
            </div>
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
        <p className='text-center'>Already have an account <Link to='/login' className='text-blue-600 font-bold'>Login</Link></p>
    </div>
    );
};

export default Register;