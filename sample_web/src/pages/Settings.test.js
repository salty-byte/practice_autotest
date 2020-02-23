import React from 'react';
import { render } from '@testing-library/react';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Settings from './Settings';

describe('Settings render', () => {
  it('default', () => {
    const { getByText } = render(<Router><Route><Settings/></Route></Router>);
    const elem = getByText(/設定/i);
    expect(elem).toBeEnabled();
  })
})
