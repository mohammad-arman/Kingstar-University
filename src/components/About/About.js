import React from 'react';
import aboutImg from "../../images/about-us.jpg";
import "./About.css"

const About = () => {
    return (
        <div className="container py-5">
            <div className="text-center my-5">
            <h2 className="heading fw-bold">About Us</h2>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <img className="img-fluid" src={aboutImg} alt="" />
                </div>
                <div className="col-md-6 pt-3">
                    <h3 className="mb-3">Why choose us</h3>
                    <p>The ship set ground on the shore of this uncharted desert isle with Gilligan the Skipper too the millionaire and his wife. These days are all Happy and Free. These days are all share them with me. It's time to put on makeup. It's time to dress up right. It's time to raise the curtain on the Muppet Show tonight.</p>
                    <div className="row mt-4">
                        <div className="col-md-4 mt-4">
                            <div className="thumb text-center m-auto">
                                <img className="img-fluid" src="https://i.ibb.co/M7HDNxh/icon-why-choose-114.png" alt="" />
                            </div>
                            <p className="pt-3 text-center">Experienced Faculty</p>
                        </div>
                        <div className="col-md-4 mt-4">
                            <div className="thumb text-center m-auto">
                                <img className="img-fluid" src="https://i.ibb.co/wR8nTQt/icon-why-choose-214.png" alt="" />
                            </div>
                            <p className="pt-3 text-center">Experienced Faculty</p>
                        </div>
                        <div className="col-md-4 mt-4">
                            <div className="thumb text-center m-auto">
                                <img className="img-fluid" src="https://i.ibb.co/brd1yCm/icon-why-choose-314.png" alt="" />
                            </div>
                            <p className="pt-3 text-center">Experienced Faculty</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;