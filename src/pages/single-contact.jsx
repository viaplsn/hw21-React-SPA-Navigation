import React, { Component } from 'react';
import '../assets/css/single-contact.css'

export class singleContact extends Component {
    render() {
        return(
            <div className="contact__container">
                <h2 className="contact__name">{this.props.location.state.firstName} {this.props.location.state.lastName}</h2>
                <p className="contact__text">Номер телефону: {this.props.location.state.phone}</p>
                <p className="contact__text">Стать: {this.props.location.state.gender}</p>
                <p className="contact__text">Опис: Привіт, мене звати {this.props.location.state.firstName} {this.props.location.state.lastName}</p>
                <p className="contact__text">Відправити повідомлення:</p>
                <div className="contact__message">
                    <input className="contact__input" type="text"/>
                    <button className="contact__button">Відправити</button>
                </div>
            </div>
        )
    }
}