
import { ADD_COLOR, REMOVE_COLOR, UPDATE_COLOR } from "./type"

export const addColor = (data) => {
    return (dispatch, getState) => {
        const state = getState()
        dispatch({
            type: ADD_COLOR,
            payload: [...state, data]
        })
    }
}

export const updateColor = (data) => {
    return (dispatch, getState) => {
        const state = getState()
        const newState = state.map((item) => {
            if(data.id === item.id) {
                return data
            }
            return item
        })
        dispatch({
            type: UPDATE_COLOR,
            payload: [...newState]
        })
    }
}

export const removeColor = (id) => {
    return (dispatch, getState) => {
        const state = getState()
        const newState = state.filter((item) => item.id !== id)
        dispatch({
            type: REMOVE_COLOR,
            payload: [...newState]
        })
    }
}