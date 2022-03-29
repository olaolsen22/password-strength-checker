export const updateIsAPILoading = (value) => {
    return {
        type: 'UPDATE_IS_API_LOADING',
        payload: value
    }
}

export const updatePasswordStrengthDetails = (value) => {
    return {
        type: 'UPDATE_PASSWORD_STRENGTH_DETAILS',
        payload: value
    }
}