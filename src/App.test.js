import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const titleText = getByText(/CoVID-19 Tracking/i);
  expect(titleText).toBeInTheDocument();
});
