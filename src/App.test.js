import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe("App", () => {
  it("show first page - login", () => {
      const { getByTestId, getByText } = render(<App/>);
      // let comp = getByTestId("my-container");
      // expect(null).toContainElement(getByText("Hello"));
    });
});