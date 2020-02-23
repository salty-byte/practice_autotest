import React from 'react';
import { render } from '@testing-library/react';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import RedListSearch from './RedListSearch';

describe('RedListSearch render', () => {
  it('default', () => {
    const { getByText } = render(<Router><Route><RedListSearch/></Route></Router>);
    const elem = getByText(/レッドリスト検索/i);
    expect(elem).toBeEnabled();
  })
})
