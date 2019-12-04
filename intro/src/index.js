import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Search from "./components/search/search";
import ContactList from "./components/contact-list/contact-list";

const App = () => {
    return (
        <Fragment>
            <h1>Hello app</h1>
            <Search />
            <ContactList />
        </Fragment>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
