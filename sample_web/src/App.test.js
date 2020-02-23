import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App render', () => {
  it('default', () => {
    const { getByText } = render(<App />);
    const elem = getByText(/トップ/i);
    expect(elem).toBeEnabled();
  })
})
