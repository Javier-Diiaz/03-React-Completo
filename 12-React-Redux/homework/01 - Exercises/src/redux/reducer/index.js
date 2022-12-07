import { ADD_PRODUCT, DELETE_PRODUCT, GET_STORE_NAME } from '../actions/types'

const initialState = {
    list: [],
    storeName: ''
};

function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_PRODUCT:
            return {
                ...state,
                list: [...state.list, payload]
            }
        case DELETE_PRODUCT:
            const filtrado = state.list.filter(ele => ele.id !== payload)
            return {
                ...state,
                list: filtrado
            }
        case GET_STORE_NAME:
            return {
                ...state,
                storeName: payload

            }
        default:
            return { ...state }
    }
}

export default rootReducer;
