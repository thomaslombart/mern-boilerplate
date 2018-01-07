import React, {Component} from 'react'
import {connect} from 'react-redux';

import Flash from './FlashMessage';

class FlashMessagesList extends Component {
    render() {
        return (
            <div className="flash-list">
                {this
                    .props
                    .flash
                    .map(message => <Flash
                        content={message.content}
                        alertClassName={message.alertClassName}
                        id={message.id}
                        key={message.id}/>)}
            </div>
        );
    }
}

const mapStateToProps = state => ({flash: state.flash});

FlashMessagesList = connect(mapStateToProps, null)(FlashMessagesList);

export default FlashMessagesList;