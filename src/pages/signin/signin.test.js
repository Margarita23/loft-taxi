import React from 'react';
import { render } from '@testing-library/react';
import SignIn from './signin';

describe("Signin", () => {
  it("show first page - check logo on login page", () => {
      const { getByTestId, getByText } = render(<SignIn/>);
      let comp = getByTestId("logo-container");
    //   expect(comp("hell")).toContainElement(getByText("Hello"));
    });
});