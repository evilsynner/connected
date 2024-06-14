import { useState } from 'react';
import { Navigate } from 'react-router-dom';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const [notification, setNotification] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const data = await response.json();

      setNotification("Registration Successful. Redirecting to login page");
      setShowNotification(true);

      <Navigate to="/accounts/login/" />
    } catch (error) {
      console.error('Error:', error);

      setNotification("Registration Unsuccessful");
      setShowNotification(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="max-w-md w-full bg-gray-800 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-white mb-8">Register</h2>
        {showNotification && (
          <div className={`mb-4 px-4 py-2 rounded-lg ${notification.startsWith("Registration Successful") ? "bg-green-500" : "bg-red-500"} text-white`}>
            {notification}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-white text-sm font-semibold mb-2">Username</label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-white text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Register</button>
        </form>
      </div>
    </div>
  );
}
