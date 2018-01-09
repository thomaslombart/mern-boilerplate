import React from 'react';
import PropTypes from 'prop-types';

const FieldGroup = ({
    text,
    type,
    name,
    placeholder,
    error,
    handleChange
}) => (
    <div className="form-group">
        <label>{text}</label>
        <input
            type={type}
            name={name}
            className={`form-control ${error ? 'is-invalid' : ''}`}
            placeholder={placeholder}
            onChange={handleChange}/>
        <small>{error}</small>
    </div>
);

FieldGroup.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    handleChange: PropTypes.func
};

export default FieldGroup;