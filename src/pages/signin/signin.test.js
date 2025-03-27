import React from 'react';
import { render } from '@testing-library/react';
import SignIn from './signin';

describe("Signin", () => {
  it("show first page - check text 'Новый пользователь?' on login page", () => {
      const { getByTestId, getByText } = render(<SignIn/>);
      let comp = getByTestId("logo-container");
      expect(comp).toContainElement(getByText("Новый пользователь?"));
    });
});