import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import axios from 'axios';

test('renders form', () => {
  const { getByText } = render(<App />);
  const form_text = getByText(/Search by/i);
  expect(form_text).toBeInTheDocument();
});


test('renders without crashing', () => {
  const div = document.createElement('div');
  render(<App />, div);
});

test('can successfully send get request to the api',  () => {
  axios.get(`http://localhost:3000/patients/event_code/D234.json`).then(
    res => res.code
  )
  
})