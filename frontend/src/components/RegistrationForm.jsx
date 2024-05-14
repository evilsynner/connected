import React from 'react';

const RegistrationForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="max-w-md w-full bg-gray-800 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-white mb-8">Register</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white text-sm font-semibold mb-2">Email</label>
            <input type="email" id="email" className="w-full px-3 py-2 rounded-lg bg-gray-700 text-white focus:outline-none" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-white text-sm font-semibold mb-2">Password</label>
            <input type="password" id="password" className="w-full px-3 py-2 rounded-lg bg-gray-700 text-white focus:outline-none" />
          </div>
          {/* <div className="mb-6">
            <label htmlFor="confirm-password" className="block text-white text-sm font-semibold mb-2">Confirm Password</label>
            <input type="password" id="confirm-password" className="w-full px-3 py-2 rounded-lg bg-gray-700 text-white focus:outline-none" />
          </div> */}
          <button type="submit" className="w-full bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;