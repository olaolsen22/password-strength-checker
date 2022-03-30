import React from 'react'
import { fireEvent } from '@testing-library/react';
import { render, screen, cleanup, store } from '../../../test-utils'

import PasswordInputField from '../passwordInputField';

beforeEach(() => {
    render(<PasswordInputField/>)
})

afterEach(() => {
    cleanup()
})


describe('Renders PasswordInputField component', () => {
    it ('Renders', () => {
        const element = screen.getByTestId('passwordInputField');
        expect(element).toBeInTheDocument();
    })
    it ('Renders passwordInputFieldInput element', () => {
        const element = screen.getByTestId('passwordInputFieldInput');
        expect(element).toBeInTheDocument();
    })
    it ('Renders toggle password visibility element', () => {
        const element = screen.getByTestId('passwordInputFieldEyeIcon');
        expect(element).toBeInTheDocument();
    })
})

describe('PasswordInputField component functionality', () => {
    it ('Updates password input', () => {
        const element = screen.getByTestId('passwordInputFieldInput');
        fireEvent.change(element, {target: {value: 'password'}})

        expect(element.value).toBe('password')
    })
    it ('Password hidden toggle should be hidden on empty', () => {
        const element = screen.getByTestId('passwordInputFieldEyeIcon');

        expect(element.className).not.toContain('is-visible')
    })
    it ('Password hidden toggle should be shown when password is typed in', () => {
        const inputElement = screen.getByTestId('passwordInputFieldInput');
        fireEvent.change(inputElement, {target: {value: 'password'}})

        const toggleVisibilityElement = screen.getByTestId('passwordInputFieldEyeIcon');

        expect(toggleVisibilityElement.className).toContain('is-visible')
    })
    it ('Text input should appear when hide toggle has been clicked', () => {
        let inputElement = screen.getByTestId('passwordInputFieldInput');
        fireEvent.change(inputElement, {target: {value: 'password'}})

        const toggleVisibilityElement = screen.getByTestId('passwordInputFieldEyeIcon');
        fireEvent.click(toggleVisibilityElement)

        expect(inputElement.className).not.toContain('hide')
    })
})
