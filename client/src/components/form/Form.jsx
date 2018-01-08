import React, {Component} from 'react';

import FieldGroup from './FieldGroup';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = Object.assign(...this.props.fields.map(field => ({
            [field.name]: ''
        })));

        this.handleChange = this
            .handleChange
            .bind(this);

        this.handleSubmitClick = this
            .handleSubmitClick
            .bind(this);
    }

    handleChange(e) {
        let name = e.target.name;
        this.setState({[name]: e.target.value});
    }

    handleSubmitClick() {
        this
            .props
            .triggerSubmitFunction(this.state);
    }

    render() {
        return (
            <form>
                {this
                    .props
                    .fields
                    .map((field, i) => <FieldGroup
                        key={i}
                        type={field.type}
                        text={field.text}
                        name={field.name}
                        placeholder={field.placeholder}
                        handleChange={this.handleChange}/>)}
                <button
                    type="button"
                    className="btn btn-primary btn-block"
                    onClick={this.handleSubmitClick}>Envoyer</button>
            </form>
        )
    }
}

export default Form;
