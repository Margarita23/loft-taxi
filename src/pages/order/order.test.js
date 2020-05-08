import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Order from './order';

afterEach(cleanup);

describe("Order", () => {
    
    it('order form - from input', () => {
        const {getByTestId} = render(<Order/>);
        let from = "street";
        let fromInput = getByTestId('from-input');
        fromInput.value = from;
        expect(fromInput.value).toBe("street");
    });

    it('order to - from input', () => {
        const {getByTestId} = render(<Order/>);
        let to = "to street";
        let toInput = getByTestId('to-input');
        toInput.value = to;
        expect(toInput.value).toBe("to street");
    });

    it('check button text', () => {
        const {getByTestId} = render(<Order/>);
        let button = getByTestId('order-taxi');
        expect(button.getElementsByTagName("span")[0].innerHTML).toEqual("Вызвать такси");
    });
});