import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Reg from './reg';

afterEach(cleanup);

describe("Reg", () => {

    it("show first page - check 'Войти' on login page", () => {
        const { getByTestId } = render(<Reg/>);
        expect(getByTestId('auth-button')).not.toBeEmpty();
    });
    
    it('allows input email', () => {
        const {getByTestId} = render(<Reg/>);
        let email = "my email";
        let emailInput = getByTestId('email-input');
        emailInput.value = email;
        expect(emailInput.value).toBe("my email");
    });

    it('allows firstname input', () => {
        const {getByTestId} = render(<Reg/>);
        let pass = "my firsftname";
        let passInput = getByTestId('fname-input');
        passInput.value = pass;
        expect(passInput.value).toBe("my firsftname");
    });

    it('allows lastname input', () => {
        const {getByTestId} = render(<Reg/>);
        let pass = "my lastname";
        let passInput = getByTestId('lname-input');
        passInput.value = pass;
        expect(passInput.value).toBe("my lastname");
    });

    it('allows input password', () => {
        const {getByTestId} = render(<Reg/>);
        let pass = "my pass";
        let passInput = getByTestId('pass-input');
        passInput.value = pass;
        expect(passInput.value).toBe("my pass");
    });
    
    it("show first page - check 'Зарегистрироваться' on reg page", () => {
        const {getByTestId} = render(<Reg/>);
        let buttonReg = getByTestId('auth-button');
        expect(buttonReg.getElementsByTagName("span")[0].innerHTML).toEqual("Зарегистрироваться");
    });
});