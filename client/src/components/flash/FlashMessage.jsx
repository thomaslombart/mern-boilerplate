import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { removeFlashMessage } from '../../actions/flash';

class FlashMessage extends Component {
    componentDidMount() {
        setTimeout(() => {
            this
                .props
                .removeFlashMessage(this.props.id);
        }, 3000);
    }

    render() {
        return (
            <div className={`alert alert-${this.props.alertClassName}`}>
                {this.props.content}
            </div>
        );
    }
}

FlashMessage.propTypes = {
    content: PropTypes.string,
    alertClassName: PropTypes.string,
    id: PropTypes.number,
    key: PropTypes.number
};

const mapDispatchToProps = dispatch => bindActionCreators({
    removeFlashMessage
}, dispatch);

FlashMessage = connect(null, mapDispatchToProps)(FlashMessage);

export default FlashMessage;