import React from 'react'
import { render, screen, cleanup, store } from '../../../test-utils'

import PasswordStrengthMeter from '../passwordStrengthMeter';

describe('Renders PasswordStrengthMeter component', () => {
    it ('Renders', () => {
        render(<PasswordStrengthMeter/>)
        const element = screen.getByTestId('passwordStrengthMeter');
        expect(element).toBeInTheDocument();
        cleanup()
    })
    it ('Renders strength meter bar', () => {
        render(<PasswordStrengthMeter/>)
        const element = screen.getByTestId('passwordStrengthMeterBar');
        expect(element).toBeInTheDocument();
        cleanup()
    })
})