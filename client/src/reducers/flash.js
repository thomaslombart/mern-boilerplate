import {ADD_FLASH_MESSAGE, REMOVE_FLASH_MESSAGE} from '../actions/flash';

const flash = (state = [], action) => {
    switch (action.type) {
        case ADD_FLASH_MESSAGE:
            return [
                ...state, {
                    content: action.content,
                    alertClassName: action.alertClassName,
                    id: action.id
                }
            ];
        case REMOVE_FLASH_MESSAGE:
            return state.filter(message => message.id !== action.id);
        default:
            return state;
    }
}

export default flash;