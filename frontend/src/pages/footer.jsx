import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-800 py-8 px-4 sm:px-6 lg:px-8 text-gray-300">
            <div className="flex flex-wrap justify-between items-center">
                <div className="w-full sm:w-1/3 text-center sm:text-left">
                    <h3 className="text-3xl font-bold mb-2">Rentalo</h3>
                </div>
                <div className="w-full sm:w-1/3 text-center mb-4 sm:mb-0">
                    <div className="flex justify-center mb-2">
                        <button className="bg-gray-700 w-8 h-8 rounded-full flex items-center justify-center mr-2">
                            <span className="text-2xl font-bold">S</span>
                        </button>
                        <button className="bg-gray-700 w-8 h-8 rounded-full flex items-center justify-center">
                            <span className="text-2xl font-bold">S</span>
                        </button>
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-gray-700 w-8 h-8 rounded-full flex items-center justify-center mr-2">
                            <span className="text-2xl font-bold">S</span>
                        </button>
                        <button className="bg-gray-700 w-8 h-8 rounded-full flex items-center justify-center">
                            <span className="text-2xl font-bold">S</span>
                        </button>
                    </div>
                </div>
                <div className="w-full sm:w-1/3 text-center sm:text-right">
                    <p className="mb-2">NASA Headquarters</p>
                    <p className="mb-2">300 E Street SW, Suite 5R30</p>
                    <p className="mb-2">Washington, DC 20546</p>
                    <p className="mb-2">Stati Uniti d'America</p>
                </div>
            </div>
            <div className="w-full text-gray-500 text-center mt-4 mb-0">
                <p>
                    © 2023 Tutti i diritti riservati -{' '}
                    <a href="#" className="text-gray-500 hover:text-gray-100">
                        Note legali
                    </a>{' '}
                    -{' '}
                    <a href="#" className="text-gray-500 hover:text-gray-100">
                        Informativa sulla privacy
                    </a>{' '}
                    -{' '}
                    <a href="#" className="text-gray-500 hover:text-gray-100">
                        Condizioni generali di utilizzo
                    </a>{' '}
                    -{' '}
                    <a href="#" className="text-gray-500 hover:text-gray-100">
                        Gestione dei cookie
                    </a>{' '}
                    -{' '}
                    <a href="#" className="text-gray-500 hover:text-gray-100">
                        Elenco dei rivenditori
                    </a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
