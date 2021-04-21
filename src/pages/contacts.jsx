import React, { Component } from 'react';
import Contact from '../components/contact.jsx'

import '../assets/css/contacts.css'
import { Link } from 'react-router-dom';

export const contacts = [{
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male"
}, {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female"
}, {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666"
}, {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
}, {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
}, {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male"
}];

export class Contacts extends Component {
    state = {
        contacts: contacts,
        search: '',
        isCheckedMale: true,
        isCheckedFemale: true,
        isCheckedUnknown: true
    }
    handleSearchChange = (event) => {
        this.setState({search: event.target.value}, () => {
            const searchResult = contacts.filter((obj) => {
                const contactFirstName = obj.firstName.toLowerCase().includes(this.state.search.toLowerCase());
                const contactLastName = obj.lastName.toLowerCase().includes(this.state.search.toLowerCase());
                const contactPhone = obj.phone.toLowerCase().includes(this.state.search.toLowerCase());
                if(contactFirstName || contactLastName || contactPhone) {
                    return true
                } else {
                    return false
                }
            })
            if(this.state.search.length < 1) {
                this.setState({contacts: contacts})
            } else {
                if(searchResult.length > 0) {
                    this.setState({contacts: searchResult})
                } else {
                    this.setState({contacts: []})
                }
            }
        })
    }

    toggleChange = (e) => {
        const {name, checked} = e.target
        this.setState({
            [name]: checked
        }, () => {
            if(this.state.isCheckedMale === true && this.state.isCheckedFemale === true && this.state.isCheckedUnknown === true) {
                this.setState({contacts: contacts.filter((obj) => {
                    if(obj.gender === "male" || obj.gender === "female" || !obj.gender) {
                        return true
                    }else {
                        return false
                    }
                })})
            } else if(this.state.isCheckedMale !== true && this.state.isCheckedFemale === true && this.state.isCheckedUnknown === true) {
                this.setState({contacts: contacts.filter((obj) => {
                    if(obj.gender === "female" || !obj.gender) {
                        return true
                    }else {
                        return false
                    }
                })})
            } else if(this.state.isCheckedMale !== true && this.state.isCheckedFemale !== true && this.state.isCheckedUnknown === true) {
                this.setState({contacts: contacts.filter((obj) => {
                    if(!obj.gender) {
                        return true
                    }else {
                        return false
                    }
                })})
            } else if(this.state.isCheckedMale !== true && this.state.isCheckedFemale !== true && this.state.isCheckedUnknown !== true) {
                this.setState({contacts: []})
            } else if(this.state.isCheckedMale === true && this.state.isCheckedFemale !== true && this.state.isCheckedUnknown !== true) {
                this.setState({contacts: contacts.filter((obj) => {
                    if(obj.gender === "male") {
                        return true
                    }else {
                        return false
                    }
                })})
            } else if(this.state.isCheckedMale === true && this.state.isCheckedFemale === true && this.state.isCheckedUnknown !== true) {
                this.setState({contacts: contacts.filter((obj) => {
                    if(obj.gender === "male" || obj.gender === "female") {
                        return true
                    }else {
                        return false
                    }
                })})
            } else if(this.state.isCheckedMale !== true && this.state.isCheckedFemale === true && this.state.isCheckedUnknown !== true) {
                this.setState({contacts: contacts.filter((obj) => {
                    if(obj.gender === "female") {
                        return true
                    }else {
                        return false
                    }
                })})
            } else if(this.state.isCheckedMale === true && this.state.isCheckedFemale !== true && this.state.isCheckedUnknown === true) {
                this.setState({contacts: contacts.filter((obj) => {
                    if(obj.gender === "male" || !obj.gender) {
                        return true
                    }else {
                        return false
                    }
                })})
            } else {
                this.setState({contacts: contacts})
            }
        })
    }

    render() {
        return(
            <div className="contacts-container">
                <div className="contact-header">
                    <h2>Контакти</h2>
                    <input id="search-input" type='text' value={this.state.search} onChange={this.handleSearchChange} placeholder="Пошук"/>
                    <input name="isCheckedMale" type='checkbox' id="male-checkbox" defaultChecked={this.state.isCheckedMale} onChange={this.toggleChange}/>
                    <label htmlFor="male-checkbox">Male</label>
                    <input name="isCheckedFemale" type='checkbox' id="female-checkbox" defaultChecked={this.state.isCheckedFemale} onChange={this.toggleChange}/>
                    <label htmlFor="female-checkbox">Female</label>
                    <input name="isCheckedUnknown" type='checkbox' id="undefied-checkbox" defaultChecked={this.state.isCheckedUnknown} onChange={this.toggleChange}/>
                    <label htmlFor="undefied-checkbox">Unknown</label>
                </div>
                {this.state.contacts.map(item => (
                    <Link to={{
                        pathname: item.lastName, 
                        state: {
                            firstName: item.firstName,
                            lastName: item.lastName,
                            phone: item.phone,
                            gender: item.gender
                            }}} key={item.lastName} className="contact__link">
                        <Contact firstName={item.firstName} lastName={item.lastName} phone={item.phone} gender={item.gender} key={item.lastName}/>
                    </Link>
                ))}
            </div>
        )
    }
}