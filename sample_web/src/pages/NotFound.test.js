import React from 'react';
import { render } from '@testing-library/react';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import NotFound from './NotFound';

describe('NotFound render', () => {
  it('default', () => {
    const { getByText } = render(<Router><Route><NotFound/></Route></Router>);
    const elem = getByText(/ページが見つかりません/i);
    expect(elem).toBeEnabled();
  })
})
