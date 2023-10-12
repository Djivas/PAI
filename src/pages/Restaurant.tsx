import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import PrevOrders from "../components/PrevOrders";
import Menu from '../assets/menu.svg';

const Restaurant = () => {
  return (
    <>
      <Navbar extraElement={<Link to='/account' className="cursor-pointer absolute left-0 ml-[16px]"><img src={Menu} alt="accountLink" /></Link>}/>
      <div className="max-w-4xl mx-auto">
        <PrevOrders />
      </div>
    </>
  );
};

export default Restaurant;
