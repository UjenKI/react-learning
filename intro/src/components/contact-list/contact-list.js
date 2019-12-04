import React, { Fragment } from "react";
import "./contact-list.css";
import ContactItem from "./contact-item/contact-item";

const ContactList = ({ ContactList }) => {
    const contactItem = ContactList.map((item) => {
        return <ContactItem name={item.name} description={item.description} avatar={item.avatar} />
    })
    // console.log(name);
    return (
        <Fragment>
            <h2>Contact List</h2>
            <ContactItem />
            {contactItem}
        </Fragment>
    );
}

export default ContactList;