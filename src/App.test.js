import React from 'react'
import { render, screen, cleanup } from './test-utils'
import App from './App';

beforeEach(() => {
    render(<App/>)
})

afterEach(() => {
    cleanup()
})

describe('App component', () => {
    it ('Renders App component', () => {
        const element = screen.getByTestId('app');

        expect(element).toBeInTheDocument();
    })
    it ('Renders title text', () => {
        const element = screen.getByTestId('appHeaderTitle');
        expect(element.textContent).toEqual('Is your password strong enough?')
    })
    it ('Renders password input field', () => {
        const element = screen.getByTestId('passwordInputField');

        expect(element).toBeInTheDocument();
    })
})
