import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = ({ location }) => (
    <div className="main">
        <h3 className="title text-center">
            <h4>Oops... Looks like it's a <code>404</code> !</h4>
            <h4>Please go back to the <Link to="/">homepage</Link></h4>
        </h3>
    </div>
);

export default NotFound;