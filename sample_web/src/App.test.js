import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('App render', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/トップ/i);
  expect(linkElement).toBeEnabled();
});
