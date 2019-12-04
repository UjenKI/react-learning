import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Search from "./components/search/search";
import ContactList from "./components/contact-list/contact-list";

const App = () => {

    const List = [
        { name: "Jack Sparrow", description: "Captain", avatar: "https://bootdey.com/img/Content/user_1.jpg" }
    ]
    return (
        <div class="container bootstrap snippet">
            <h1>Hello app</h1>
            <Search />
            <ContactList ContactList={List} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
