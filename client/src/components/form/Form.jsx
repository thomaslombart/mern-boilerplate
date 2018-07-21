import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

import FieldGroup from './FieldGroup';

import { clear } from '../../actions/errors';

class Form extends Component {
    constructor(props) {
        super(props);

        /**
         * [{name: 'username', type: 'text', ...}, {name: 'password', ...}] => {username: '', password: '', errors: []}
         */
        this.state = Object.assign(...this.props.fields.map(field => ({
            [field.name]: ''
        })));

        this.handleChange = this
            .handleChange
            .bind(this);

        this.handleSubmitClick = this
            .handleSubmitClick
            .bind(this);

        this.errorFor = this
            .errorFor
            .bind(this);
    }

    handleChange(e, rule, element) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    componentWillUnmount() {
        this.props.clear();
    }


    handleSubmitClick() {
        this.props.clear();
        this
            .props
            .triggerSubmitFunction(this.state);
    }

    errorFor(field) {
        if (this.props.errors.hasOwnProperty(field)) {
            return this.props.errors[field].msg;
        }
    }

    render() {
        return (
            <form>
                {this
                    .props
                    .fields
                    .map((field, i) => {
                        return (<FieldGroup
                            key={i}
                            type={field.type}
                            text={field.text}
                            name={field.name}
                            placeholder={field.placeholder}
                            error={this.errorFor(field.name)}
                            handleChange={this.handleChange} />)
                    })}
                <button
                    type="button"
                    className="btn btn-primary btn-block"
                    onClick={this.handleSubmitClick}>Submit</button>
            </form>
        )
    }
}

const mapStateToProps = state => ({ errors: state.errors });

const mapDispatchToProps = dispatch => bindActionCreators({
    clear
}, dispatch);

Form = withRouter(connect(mapStateToProps, mapDispatchToProps)(Form));

export default Form;
