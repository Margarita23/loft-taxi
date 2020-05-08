import React from 'react';
import { render } from '@testing-library/react';
import Menu from './menu';

describe("Menu", () => {

    it("check menu__list on header", () => {
        const { getByTestId } = render(<Menu/>);
        const menuList = getByTestId('menu-list');
        expect(menuList.children.length).toBe(3);
    });
});