import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group';

import Flash from './FlashMessage';

class FlashMessagesList extends Component {
    render() {
        return (
            <div className="flash-list">
                <CSSTransitionGroup
                    transitionName="fade"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {this
                        .props
                        .messages
                        .map(message => <Flash
                            content={message.content}
                            alertClassName={message.alertClassName}
                            id={message.id}
                            key={message.id} />)}
                </CSSTransitionGroup>
            </div>
        );
    }
}

FlashMessagesList.propTypes = {
    messages: PropTypes.array
};

const mapStateToProps = state => ({ messages: state.messages });

FlashMessagesList = connect(mapStateToProps, null)(FlashMessagesList);

export default FlashMessagesList;