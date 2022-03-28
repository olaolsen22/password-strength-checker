export const updatePassword = (value) => {
    return {
        type: 'UPDATE_PASSWORD',
        payload: value
    }
}

export const updatePasswordStrength = (value) => {
    return {
        type: 'UPDATE_PASSWORD_STRENGTH',
        payload: value
    }
}