import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
//import axios from './lib/axios.js';
import axios from 'axios';
const MockAdapter = require('axios-mock-adapter');
import AdminLogin from './Components/AdminLogin';

describe('AdminLogin Component', () => {
  let mock;
  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  it('should render the login form', () => {
    const { getByLabelText, getByText } = render(<AdminLogin />);
    
    // Assert that form elements are present
    expect(getByLabelText('Email')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
    expect(getByText('Login')).toBeInTheDocument();
  });

  it('should handle successful login', async () => {
    const { getByLabelText, getByText } = render(<AdminLogin />);
    const emailInput = getByLabelText('Email');
    const passwordInput = getByLabelText('Password');
    const loginButton = getByText('Login');

    // Mock the axios.post request
    mock.onPost('http://localhost:7302/admin/verify-by-phone').reply(200, {
      data: 'mocked admin data',
    });

    // Fill in the form and submit it
    fireEvent.change(emailInput, { target: { value: 'abhi@gmail.com' } });
    fireEvent.change(passwordInput, { target: { value: 'abhi09' } });
    fireEvent.click(loginButton);

    // Wait for the axios request to resolve
    await waitFor(() => {
      expect(localStorage.getItem('admin')).toEqual(JSON.stringify('mocked admin data'));
      expect(screen.getByText('Admin verified')).toBeInTheDocument();
    });
  });

  it('should handle login failure', async () => {
    const { getByLabelText, getByText } = render(<AdminLogin />);
    const emailInput = getByLabelText('Email');
    const passwordInput = getByLabelText('Password');
    const loginButton = getByText('Login');

    // Mock the axios.post request to simulate an error
    mock.onPost('http://localhost:7302/admin/verify-by-phone').reply(400, {
      error: 'Invalid credentials',
    });

    // Fill in the form and submit it
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(loginButton);

    // Wait for the axios request to resolve
    await waitFor(() => {
      expect(localStorage.getItem('admin')).toBeNull(); // Ensure nothing is stored in localStorage
      expect(screen.getByText('invalid admin details')).toBeInTheDocument();
    });
  });
});
