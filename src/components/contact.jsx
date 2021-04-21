import React from 'react';
import {ReactComponent as Male} from '../assets/images/man-icon.svg';
import {ReactComponent as Female} from '../assets/images/woman-icon.svg';

const Contact = ({firstName, lastName, phone, gender}) => {
    if(gender === "male") {
        return(
            <div className="contact-container">
                <div className="firstName">
                    <p>{firstName}</p>
                </div>
                <div className="lastName">
                    <p>{lastName}</p>
                </div>
                <div className="phone">
                    <p>{phone}</p>
                </div>
                <div className="gender">
                    <p>{gender}</p>
                    <Male/>
                </div>
            </div>
        )
    } else if(gender === "female") {
        return(
            <div className="contact-container">
                <div className="firstName">
                    <p>{firstName}</p>
                </div>
                <div className="lastName">
                    <p>{lastName}</p>
                </div>
                <div className="phone">
                    <p>{phone}</p>
                </div>
                <div className="gender">
                    <p>{gender}</p>
                    <Female/>
                </div>
            </div>
        )
    } else {
        return(
            <div className="contact-container">
                <div className="firstName">
                    <p>{firstName}</p>
                </div>
                <div className="lastName">
                    <p>{lastName}</p>
                </div>
                <div className="phone">
                    <p>{phone}</p>
                </div>
                <div className="gender">
                    <p>{gender}</p>
                </div>
            </div>
        )
    }
}

export default Contact;