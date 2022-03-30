const passwordStrengthDetailsReducer = (state = {}, action) => {
    switch(action.type) {
        case 'UPDATE_PASSWORD_STRENGTH_DETAILS': 
            return action.payload
        default:
            return state = {
                score: null,
                guessTimeSeconds: null,
                guessTimeString: '',
                warning: '',
                suggestions: []
            }
    }
}

export default passwordStrengthDetailsReducer;