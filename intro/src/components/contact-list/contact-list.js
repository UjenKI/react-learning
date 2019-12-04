import React, { Fragment } from "react";
import "./contact-list.css";
import ContactItem from "./contact-item/contact-item";

const ContactList = () => {
    return (
        <Fragment>
            <h2>Contact List</h2>
            <ContactItem />
        </Fragment>
    );
}

export default ContactList;