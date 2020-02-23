import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom"
import MainRouter from './MainRouter';

describe("Rooting", () => {
  it('default', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/"]} >
        <MainRouter />
      </MemoryRouter>
    );
    const elem = getByText(/コース選択/i);
    expect(elem).toBeEnabled();
  })

  it('/info', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/info"]} >
        <MainRouter />
      </MemoryRouter>
    );
    const elem = getByText(/このサイトについて/i);
    expect(elem).toBeEnabled();
  })

  it('/settings', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/settings"]} >
        <MainRouter />
      </MemoryRouter>
    );
    const elem = getByText(/設定/i);
    expect(elem).toBeEnabled();
  })

  it('/red-list-search', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/red-list-search"]} >
        <MainRouter />
      </MemoryRouter>
    );
    const elem = getByText(/レッドリスト検索/i);
    expect(elem).toBeEnabled();
  })

  it('not found', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/aaa"]} >
        <MainRouter />
      </MemoryRouter>
    );
    const elem = getByText(/ページが見つかりません/i);
    expect(elem).toBeEnabled();
  })
})
