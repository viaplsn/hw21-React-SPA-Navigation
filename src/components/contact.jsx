import React from 'react';
import {ReactComponent as Male} from '../assets/images/man-icon.svg';
import {ReactComponent as Female} from '../assets/images/woman-icon.svg';

const Contact = ({firstName, lastName, phone, gender}) => {
    const renderIcon = (gender) => {
        if(gender === 'male') {
        return <Male />
        } else if (gender === 'female') {
        return <Female />
        }
        return null
    }
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
                {renderIcon(gender)}
            </div>
        </div>
    )
}

export default Contact;