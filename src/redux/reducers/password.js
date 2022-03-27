const passwordReducer = (state = '', action) => {
    switch(action.type) {
        case 'UPDATE_PASSWORD': 
            return action.payload
        default:
            return state = ''
    }
}

export default passwordReducer;