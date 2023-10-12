import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import { useNavigate } from "react-router-dom";
import ArrowLogo from '../assets/arrow-left.svg';

const Account = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <Navbar rounded extraElement={<img src={ArrowLogo} alt="back button" onClick={() => navigate(-1)}  className="cursor-pointer absolute left-0 ml-[16px]"/>}/>
      <Profile />
    </>
  );
};

export default Account;
