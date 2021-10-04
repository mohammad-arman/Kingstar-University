import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
    <div>
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 p-4">
                        <h2 className="footer-title text-white text-uppercase">About Us</h2>
                        <p className="text-white mt-4">On my way to where the air is sweet. Can you tell me how to get how to get to Sesame Street! The first mate and his Skipper too will do their very best to make the others comfortable</p>
                    </div>
                    <div className="col-md-4 p-4">
                        <h2 className="footer-title text-white text-uppercase">student help</h2>
                        <ul className="mt-4 student-help p-0">
                            <li><a href="/">My Info</a></li>
                            <li><a href="/">My Question</a></li>
                            <li><a href="/">F.A.Q</a></li>
                            <li><a href="/">Search Courses</a></li>
                            <li><a href="/">Latest Information</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 p-4">
                        <h2 className="footer-title text-white text-uppercase">Contact</h2>
                        <p className="text-white mt-4">PO Box UN152468, 1 Street North, New Towm, California, USA</p>
                        <p className="text-white">Phone: <a className="text-white ms-2" href="/">5 (012) 4565 789</a></p>
                        <p className="text-white">Fax: <a className="text-white ms-2" href="/">5 (012) 4565 789</a></p>
                        <p className="text-white">Email: <a className="text-white ms-2" href="/">Info@info.com</a></p>
                    </div>
                </div>
            </div>
        </div>
        <div className="bottom-footer py-3">
            <p className="text-center text-white mb-0">Copyright &copy; 2021 Mohammad Arman</p>
        </div>
    </div> 
    );
};

export default Footer;