import React from 'react';
import { render } from '@testing-library/react';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Info from './Info';

describe('Info render', () => {
  it('default', () => {
    const { getByText } = render(<Router><Route><Info/></Route></Router>);
    const elem = getByText(/このサイトについて/i);
    expect(elem).toBeEnabled();
  })
})
