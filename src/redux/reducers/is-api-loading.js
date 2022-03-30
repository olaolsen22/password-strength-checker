const isAPIloadingReducer = (state = false, action) => {
    switch(action.type) {
        case 'UPDATE_IS_API_LOADING': 
            return action.payload
        default:
            return state = false
    }
}

export default isAPIloadingReducer;