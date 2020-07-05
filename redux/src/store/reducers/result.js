import * as actionTypes from '../actions'

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({ id: Date.now(), value: action.result })
            }
        case actionTypes.DELETE_RESULT:
            const newArray = state.results.filter(res => res.id !== action.eleId)
            return {
                ...state,
                results: newArray
            }
    }

    return state;
};

export default reducer