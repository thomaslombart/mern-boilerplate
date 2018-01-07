export const ADD_FLASH_MESSAGE = 'ADD_FLASH_MESSAGE';
export const REMOVE_FLASH_MESSAGE = 'REMOVE_FLASH_MESSAGE';

let nextFlashId = 0;

export const addFlashMessage = (content, alertClassName) => ({
    type: ADD_FLASH_MESSAGE,
    id: nextFlashId++,
    content,
    alertClassName
});

export const removeFlashMessage = (id) => ({type: REMOVE_FLASH_MESSAGE, id});