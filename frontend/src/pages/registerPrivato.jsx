import React from 'react';
import InputField from '../components/inputField';
import styles from '../stylings/custom.css';
import { Link } from 'react-router-dom';

const RegisterPrivato = () => {
    return (
        <div className="flex h-screen">
            <div className="w-1/2 bg-white p-10 flex items-center justify-center">
                <div className="w-2/3">
                    <h1 className="text-4xl font-bold absolute top-[70px]">----------</h1>
                    <h2 className="text-3xl font-bold mb-6">Crea il tuo account - Privato</h2>
                    <form>
                        <div className="mb-4 flex space-x-4">
                            <div className="w-1/2">
                                <InputField label="Name" type="text" />
                            </div>
                            <div className="w-1/2">
                                <InputField label="Surname" type="text" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <InputField label="Date of Birth" datePicker />
                        </div>
                        <div className="mb-4">
                            <InputField label="Email" type="email" />
                        </div>
                        <div className="mb-4">
                            <InputField label="Password" type="password" />
                        </div>
                        <div className="mb-4">
                            <InputField label="Confirm Password" type="password" />
                        </div>
                        <div className="mb-4 pt-7 pb-7 flex items-center">
                            <input
                                type="checkbox"
                                id="termsCheckbox"
                                className="mr-4 text-orange-300 w-6 h-6"
                            />
                            <label htmlFor="termsCheckbox" className="text-sm flex-wrap">
                                Ho letto e accetto i{" "}
                                <a
                                    href="/terms"
                                    className="text-orange-400 hover:text-orange-600"
                                >
                                    Termini di Servizio
                                </a>{" "}
                                e la{" "}
                                <a
                                    href="/privacy"
                                    className="text-orange-400 hover:text-orange-600"
                                >
                                    Privacy Policy
                                </a>{" "}
                                di Rentalo.
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-orange-600 text-white p-3 rounded-full font-bold hover:bg-orange-500"
                        >
                            Crea account
                        </button>
                    </form>
                    <div className="mt-12 text-center">
                        <Link to="/ScegliUtente" className="text-blue-800 hover:underline cursor-pointer">
                            Utente Sbagliato? Scegli il tipo di Utente
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-1/2 p-10 flex flex-col items-center justify-center relative bg-black">
                <div className="absolute inset-0">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="greyGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                                <stop offset="0%" style={{ stopColor: 'rgba(130, 62, 5, 1)' }} />
                                <stop offset="60%" style={{ stopColor: 'rgba(0, 0, 0, 1)' }} />
                            </linearGradient>
                            <clipPath id="triangleClip">
                                <polygon points="0,100 100,0 100,100" />
                            </clipPath>
                        </defs>
                        <rect x="0" y="0" width="100" height="100" fill="url(#greyGradient)" clipPath="url(#triangleClip)" />
                    </svg>
                </div>

                <div className="text-center z-10 mt-20 flex flex-col justify-center">
                    <div className="mb-40 flex items-start justify-center">
                        <span className="text-orange-500 border border-orange-500 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                            <i className="fas fa-check"></i>
                        </span>
                        <div className="text-center">
                            <h2 className="text-3xl text-orange-500 font-bold mb-3">Crea un account in pochi minuti</h2>
                            <p className="text-md text-white">Registrazione pratica e veloce</p>
                        </div>
                    </div>
                    <div className="mb-40 flex items-start justify-center">
                        <span className="text-orange-500 border border-orange-500 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                            <i className="fas fa-check"></i>
                        </span>
                        <div className="text-center">
                            <h2 className="text-3xl text-orange-500 font-bold mb-3">Noleggia quello che ti serve</h2>
                            <p className="text-md text-white">Trova tutti i macchinari e le attrezzature di cui hai bisogno</p>
                        </div>
                    </div>
                    <div className="mb-40 flex items-start justify-center">
                        <span className="text-orange-500 border border-orange-500 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                            <i className="fas fa-check"></i>
                        </span>
                        <div className="text-center">
                            <h2 className="text-3xl text-orange-500 font-bold mb-3">Gestione facile e pratica</h2>
                            <p className="text-md text-white">Gestisci comodamente i tuoi noleggi dalla piattaforma</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RegisterPrivato;