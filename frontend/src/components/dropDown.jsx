import React, { useState, useEffect, useRef } from 'react';
import Register from './register'
import Login from './Login'

function DropdownMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref = useRef(null);

  const [ModalState, setModalState] = useState([false, false]);

  const toggleModal = (index) => {
    setModalState([false, false]);
    setModalState(prevState => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });
    setIsMenuOpen(false);
  };

  const closeModal = () => {
    setModalState([false, false]);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleOptionClick(option) {
    console.log(`Clicked on ${option}`);
    setIsMenuOpen(false);
  }

  return (
    <div className="relative" ref={ref}>
      <button
        className="bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={toggleMenu}
      >
        Menu
      </button>
      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-max bg-white rounded-lg shadow-lg z-10">
          <button
            className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 whitespace-nowrap"
            onClick={() => handleOptionClick('Profile')} >
            Profile
          </button>
          <div className="h-px bg-gray-200 my-2" />
          <button
            className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 whitespace-nowrap"
            onClick={() => toggleModal(1)}>
            Login
          </button>
          <div className="h-px bg-gray-200 my-2" />
          <button
            className="block w-full text-left px-4 pr-20 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 whitespace-nowrap"
            onClick={() => toggleModal(0)}
          >
            Register
          </button>
        </div>
      )}
      {ModalState[0] && <Register onCloseModal={closeModal} switchLogModal={toggleModal} />}
      {ModalState[1] && <Login onCloseModal={closeModal} switchRegModal={toggleModal} />}
    </div>
  );
}




export default DropdownMenu;