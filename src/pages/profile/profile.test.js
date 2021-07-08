import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Profile from './profile';

afterEach(cleanup);

describe("Profile", () => {

    it('check input card number', () => {
        const {getByTestId} = render(<Profile/>);
        let number = "01234567890";
        let numberInput = getByTestId('card-number');
        numberInput.value = number;
        expect(numberInput.value).toBe("01234567890");
    });

    it('check input card date', () => {
        const {getByTestId} = render(<Profile/>);
        let date = "12/21";
        let dateInput = getByTestId('card-date');
        dateInput.value = date;
        expect(dateInput.value).toBe("12/21");
    });

    it('check input card owner name', () => {
        const {getByTestId} = render(<Profile/>);
        let name = "OWNER NAME";
        let nameInput = getByTestId('owner-name');
        nameInput.value = name;
        expect(nameInput.value).toBe("OWNER NAME");
    });

    it('check input card cvv', () => {
        const {getByTestId} = render(<Profile/>);
        let cvv= "123";
        let cvvInput = getByTestId('card-cvv');
        cvvInput.value = cvv;
        expect(cvvInput.value).toBe("123");
    });

    it('check button text inside "Сохранить', () => {
        const {getByTestId} = render(<Profile/>);
        let saveButton = getByTestId('save-button');
        expect(saveButton.getElementsByTagName("span")[0].innerHTML).toEqual("Сохранить");
    });
});