import { FaBars } from 'react-icons/fa';
import DropdownMenu from './dropDown'

const Header = () => {
  return (
    <div className="bg-gray-200 h-20 flex items-center justify-between px-4">
      <div className="font-bold text-xl">Rentalo</div>
      <div className="flex items-center justify-center bg-white rounded-full px-4">
        <input type="text" placeholder="Search for rentals" className="w-full bg-transparent focus:outline-none" />
      </div>
      <div>
        <DropdownMenu></DropdownMenu>
      </div>
    </div>
  );
};

export default Header;



