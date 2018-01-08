import React, {Component} from 'react';
import PropTypes from 'prop-types';

const FieldGroup = ({text, type, name, placeholder, handleChange}) => (
    <div className="form-group">
        <label>{text}</label>
        <input
            type={type}
            name={name}
            className="form-control"
            placeholder={placeholder}
            onChange={handleChange}/>
    </div>
);

FieldGroup.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    handleChange: PropTypes.func
};

export default FieldGroup;