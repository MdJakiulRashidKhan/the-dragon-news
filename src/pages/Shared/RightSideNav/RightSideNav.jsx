import React from 'react';
import { FaGoogle,FaGithub,FaFacebookF,FaTwitter,FaInstagram } from 'react-icons/fa';
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 border space-y-3 mb-6'>
            <h2 className="text-2xl">Login With</h2>
            <button className="btn btn-outline w-full">
            <FaGoogle></FaGoogle>Login with Google
            </button>
            <button className="btn btn-outline w-full">
            <FaGithub></FaGithub>Login with Github
            </button>
            </div>
            <div className='p-4   mb-6'>
            <h2 className="text-2xl"> Find Us On</h2>
            <a href="" className='p-4 flex font-lg items-center border rounded-t-lg'>
                <FaFacebookF className='mr-3'></FaFacebookF>
                <span>Facebook</span>
            </a>
            <a href="" className='p-4 flex font-lg items-center border-x rounded-t-lg'>
                <FaTwitter className='mr-3'></FaTwitter>
                <span>Twitter</span>
            </a>
            <a href="" className='p-4 flex font-lg items-center border rounded-b-lg'>
                <FaInstagram className='mr-3'></FaInstagram>
                <span>Instagram</span>
            </a>
            </div>
            <div className='p-4 border space-y-3 mb-6'>
            <h2 className="text-2xl">Q Zone</h2>
            <img src={qZone1} alt="" />
            <img src={qZone2} alt="" />
            <img src={qZone3} alt="" />
            </div>
            
        </div>
    );
};

export default RightSideNav;