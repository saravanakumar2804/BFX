import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './Routing_app';
import Routing_app from './Routing_app';

test('renders learn react link', () => {
  render(<Routing_app />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
