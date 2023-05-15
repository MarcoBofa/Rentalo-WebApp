import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login({ onCloseModal, switchRegModal }) {
  const [formData, setFormData] = useState({ email: '', password: '' });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log('Submitting form:', formData);
    onCloseModal();
  }

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-gray-900 opacity-75"></div>
        <div className="bg-white rounded-lg shadow-lg w-96 relative">
          <div className="text-center text-2xl font-bold py-4">LOGIN</div>
          <form className="p-6" onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Login
              </button>
              <button
                className="text-gray-600 hover:text-gray-800 font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                onClick={onCloseModal}
              >
                Cancel
              </button>
            </div>
            <div className="mt-4 text-center text-blue-500 cursor-pointer">
              <a onClick={() => switchRegModal(0)}>Don't have an Account?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

