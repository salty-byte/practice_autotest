import React from 'react';
import { render } from '@testing-library/react';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';

describe('Home render', () => {
  it('default', () => {
    const { getByText } = render(<Router><Route><Home/></Route></Router>);
    const elem = getByText(/コース選択/i);
    expect(elem).toBeEnabled();
  })
})
