import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div className="main">
        <h4>Oops... Looks like it's a <code>404</code> !</h4>
        <h4>Please go back to the <Link to="/">homepage</Link></h4>
    </div>
);

export default NotFound;