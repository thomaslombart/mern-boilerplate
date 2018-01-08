import React, {Component} from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {removeFlashMessage} from '../../actions/flash';

class FlashMessage extends Component {
    componentDidMount() {
        setInterval(() => {
            this
                .props
                .removeFlashMessage(this.props.id);
        }, 3000);
    }

    render() {
        const items = ['hello', 'world']
        return (
            <div className={`alert alert-${this.props.alertClassName}`}>
                {this.props.content}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    removeFlashMessage
}, dispatch);

FlashMessage = connect(null, mapDispatchToProps)(FlashMessage);

export default FlashMessage;