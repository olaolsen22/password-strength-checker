export const updatePassword = (value) => {
    return {
        type: 'UPDATE_PASSWORD',
        payload: value
    }
}

export const updatePasswordStrengthDetails = (value) => {
    return {
        type: 'UPDATE_PASSWORD_STRENGTH_DETAILS',
        payload: value
    }
}