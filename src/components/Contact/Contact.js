import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faSearchLocation} from '@fortawesome/free-solid-svg-icons';
import { faPhone} from '@fortawesome/free-solid-svg-icons'
const Contact = () => {
    const envelope = <FontAwesomeIcon icon={faEnvelope} />;
    const location = <FontAwesomeIcon icon={faSearchLocation} />;
    const phone = <FontAwesomeIcon icon={faPhone} />;
    return (
        <div className="container">
            <div className="contact-heading text-center my-5">
                <h2 className="heading fw-bold">Get In Touch</h2>
            </div>
            <div className="row">
                <div className="col-md-7">
                    <div className="mb-3">
                        <label className="form-label">Your Name</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Your Email</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Your Subject</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Subject Name"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                   <div className="mb-3">
                        <button type="button" className="btn btn-primary btn-lg">Send Message</button>
                   </div>
                </div>
                <div className="col-md-5 p-5">
                    <p className="fs-5">{location} PO Box UN152468, 1 Street North, New Towm, California, USA</p>
                    <p className="fs-4">{phone} 5 (012) 4565 789</p>
                    <p className="fs-4">{envelope} Info@info.com</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;