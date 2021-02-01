import React from 'react';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';

test('renders without crasing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('renders expected text', () => {
  render(<App />);
  const navbarTitle = screen.getByText("RecipeBooks");
  expect(navbarTitle).toBeInTheDocument();
  const bannerTitle = screen.getByText("Temukan Resep Manca Negara Terbaik Disini!");
  expect(bannerTitle).toBeInTheDocument();
  const searchResult = screen.getByText("Hasil Pencarian Resep");
  expect(searchResult).toBeInTheDocument();
  const footerText = screen.getByText("Developed by Aynun Nissa");
  expect(footerText).toBeInTheDocument();
});
