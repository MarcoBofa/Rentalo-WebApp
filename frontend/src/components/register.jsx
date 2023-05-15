import React, { useState } from 'react';

function Register({ onCloseModal, switchLogModal }) {
  const [formData, setFormData] = useState({ name: '', surname: '', companyName: '', email: '', password: '', confirmPassword: '' });
  const [userType, setUserType] = useState('concessionaria');

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log('Submitting form:', formData);
    onCloseModal();
  }

  const handleUserTypeClick = (type) => {
    setUserType(type);
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-gray-900 opacity-75"></div>
        <div className="bg-white rounded-lg shadow-lg w-full max-w-[600px] relative">
          <div className="text-center text-2xl font-bold py-4">CREA AN ACCOUNT</div>
          <div className="flex justify-center my-4">
            <button
              className={`border rounded-full h-5 w-5 mt-0.5 mr-2 ${userType === 'concessionaria' ? 'bg-blue-500' : 'bg-white'} border-blue-500`}
              onClick={() => handleUserTypeClick('concessionaria')}
            ></button>
            <span className="mr-40">Concessionaria</span>
            <button
              className={`border rounded-full h-5 w-5 mt-0.5 mr-2 ${userType === 'noleggiatore' ? 'bg-blue-500' : 'bg-white'} border-blue-500`}
              onClick={() => handleUserTypeClick('noleggiatore')}
            ></button>
            <span >Noleggiatore</span>
          </div>
          <form className="p-6" onSubmit={handleFormSubmit}>
            <div className="flex mb-4">
              <div className="w-1/2 mr-2">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                  Nome
                </label>
                <input
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-1/2 ml-2">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="surname">
                  Cognome
                </label>
                <input
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="surname"
                  name="surname"
                  type="text"
                  placeholder="Surname"
                  value={formData.surname}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            {userType === 'concessionaria' && (
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="companyName">
                  Nome dell'Azienda
                </label>
                <input
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="companyName"
                  name="companyName"
                  type="text"
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={handleInputChange}
                />
              </div>
            )}
            {userType === 'concessionaria' && (
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="companyName">
                  Partita IVA
                </label>
                <input
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="PartitaIva"
                  name="PartitaIva"
                  type="text"
                  placeholder="P.IVA"
                  value={formData.companyName}
                  onChange={handleInputChange}
                />
              </div>
            )}
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
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="confirmPassword">
                Conferma Password
              </label>
              <input
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit" >
                Register
              </button>
              <button
                className="text-gray-600 hover:text-gray-800 font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                onClick={onCloseModal} >
                Cancel
              </button>
            </div>
            <div className="mt-4 text-center text-blue-500 cursor-pointer">
              <a onClick={() => switchLogModal(1)}>Already Registered?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;




