import React, { useState } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/api/token/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();

      // Store access token and refresh token in localStorage or state
      localStorage.setItem('accessToken', data.access);
      localStorage.setItem('refreshToken', data.refresh);

      // Redirect or perform other actions after successful login
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="max-w-md w-full bg-gray-800 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-white mb-8">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-white text-sm font-semibold mb-2">Username</label>
            <input type="text" id="username" className="w-full px-3 py-2 rounded-lg bg-gray-700 text-white focus:outline-none" value={formData.username} onChange={handleChange} />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-white text-sm font-semibold mb-2">Password</label>
            <input type="password" id="password" className="w-full px-3 py-2 rounded-lg bg-gray-700 text-white focus:outline-none" value={formData.password} onChange={handleChange} />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;