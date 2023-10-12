import AddCardButton from "../components/AddCardButton";
import Navbar from "../components/Navbar";
import OrderDetails from "../components/OrderDetails";
import Payment from "../components/Payment";
import { useNavigate } from "react-router-dom";
import ArrowLogo from '../assets/arrow-left.svg';

const Order: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar extraElement={<img src={ArrowLogo} alt="back button" onClick={() => navigate(-1)}  className="cursor-pointer absolute left-0 ml-[16px]"/>} />
      <div className="max-w-4xl mx-auto">
        <OrderDetails />
        <Payment />
        <AddCardButton />
      </div>
    </>
  );
};

export default Order;
