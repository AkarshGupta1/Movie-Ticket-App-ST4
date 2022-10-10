import React from 'react';
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="footer bg-primary mt-5">
            <div className="footer-left">
                <p className=" text-white p-4 mb-0 mx-4"> All Right Reserved @2021 by <span className="text-warning h6">@ Akarsh Gupta</span></p>
            </div>

            <div className="footer-right">
                <p className="px-5"><a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><span className="pp"><FaFacebook /></span></a></p>
            </div>
        </div>
    );
};

export default Footer;