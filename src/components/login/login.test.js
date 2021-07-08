import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Login from './login';

afterEach(cleanup);

describe("Login", () => {
    
    it('allows input email', () => {
        const {getByTestId} = render(<Login/>);
        let email = "my email";
        let emailInput = getByTestId('email-input');
        emailInput.value = email;
        expect(emailInput.value).toBe("my email");
    });

    it('allows input password', () => {
        const {getByTestId} = render(<Login/>);
        let pass = "my pass";
        let passInput = getByTestId('password-input');
        passInput.value = pass;
        expect(passInput.value).toBe("my pass");
    });
    
    it("show first page - check 'Войти' on login page", () => {
        const {getByTestId} = render(<Login/>);
        let buttonLogin = getByTestId('button-login');
        expect(buttonLogin).not.toBeEmpty();
    });

    it("show first page - check button 'Войти' on login page", () => {
        const {getByTestId} = render(<Login/>);
        let buttonLogin = getByTestId('button-login');
        expect(buttonLogin.getElementsByTagName("span")[0].innerHTML).toEqual("Войти");
    });
});