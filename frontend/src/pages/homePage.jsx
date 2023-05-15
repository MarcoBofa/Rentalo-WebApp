import { Link } from 'react-router-dom';
import Register from '../components/register';
import Login from '../components/Login';
import Footer from './footer';
import Header from '../components/Header';

function HomePage() {

    return (
        <div className="relative">
            <Header></Header>
            <div className="relative">
                <img src="/images/cantiere-stradale.jpg" alt="Home" className="w-full h-[600px] object-cover" />
                <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-70"></div>
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
                    <h1 className="text-white text-4xl font-bold mb-5">Noleggia macchinari e attrezzature</h1>
                    <div className="flex space-x-4">
                        <button className="text-black-600 text-xl bg-gray-300 opacity-70 py-2 px-4 rounded-full hover:text-blue-800 mt-10 mr-10">Più informazioni</button>
                        <Link to="/ScegliUtente">
                            <button className="text-black-600 text-xl bg-gray-300 opacity-70 py-2 px-4 rounded-full hover:text-blue-800 mt-10">
                                Registrati
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg-white w-full h-[500px]"></div>
            <div className="relative">
                <img src="/images/Cantiere-mezzi-lavoro.jpeg" alt="Home" className="w-full h-[600px] object-cover" />
                <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-70"></div>
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;


