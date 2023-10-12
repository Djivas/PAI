import { Link } from "react-router-dom";
import { GoQuestion } from "react-icons/go";
import Logo from "../assets/Logo.svg";

interface props {
  rounded?: boolean;
  extraElement?: React.ReactNode;
}

const Navbar = ({rounded, extraElement} : props) => {
  return (
    <div className={`w-full flex h-[64px] items-center justify-center ${rounded ? 'rounded-b-2xl' : ''} bg-[#FFFFFF] px-[16px] relative`}>
        {extraElement}
      <div className="flex items-center">
        <Link to="/" className="self-center">
          <img src={Logo} alt="Pai" />
        </Link>
        <Link to="https://api.whatsapp.com/send/?phone=%2B996505205058&text&type=phone_number&app_absent=0" className="cursor-pointer absolute right-0 mr-[16px]">
          <GoQuestion className="ml-auto w-[24px] h-[24px]" />
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
