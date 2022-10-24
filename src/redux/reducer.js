import { ADD_COLOR, REMOVE_COLOR, UPDATE_COLOR } from "./type"

const init = []

const rootReducer = (state = init, action) => {
    switch (action.type) {
        case ADD_COLOR:
            return [...action.payload];
        case UPDATE_COLOR: 
            return [...action.payload];
        case REMOVE_COLOR:
            return [...action.payload];
        default:
            return state            
    }
}

export default rootReducer