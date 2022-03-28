const passwordStrengthReducer = (state = '', action) => {
    switch(action.type) {
        case 'UPDATE_PASSWORD_STRENGTH': 
            return action.payload
        default:
            return state = ''
    }
}

export default passwordStrengthReducer;