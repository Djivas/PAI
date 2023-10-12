import React, { useState  } from 'react';
import { useNavigate } from "react-router-dom";
import { TbArrowBackUp } from "react-icons/tb";
import Visa from "../assets/visa-10.svg";
import MC from "../assets/mastercard-2.svg";
import { useCardStore } from '../store/CardStore';

const AddCard: React.FC = () => {
  const navigate = useNavigate();

  const [cardNumber, setCardNumber] = useState('');
  const { addCard } = useCardStore();

  const handleAddCard = () => {
    if (cardNumber) {
      addCard(cardNumber);
      navigate(-1);
    }
  };

  return (
    <>
      <div className="w-full flex flex-col justify-between items-center p-4 rounded-2xl  bg-white">
        <div className="w-full flex justify-center items-center relative">
          <TbArrowBackUp
            onClick={() => navigate(-1)}
            className="cursor-pointer mr-auto absolute left-0"
          />
          <span className="font-[700] text-[20px] flex items-center">Онлайн оплата</span>
        </div>
        <div className="w-full flex justify-between items-center">
          <span>KG</span>
          <span>RUS</span>
        </div>
      </div>
      <h4 className="font-[400] text-[14px] text-[#a4a4a4] m-4">Заказ №237</h4>
      <div className="h-[270px] rounded-2xl  bg-white mx-4 p-3 ">
        <div className="flex gap-2 p-4 justify-end">
          <img width={25} height={25} src={Visa} alt="Visa" />
          <img width={25} height={25} src={MC} alt="MasterCard" />
        </div>
        <form onSubmit={handleAddCard}>
          <div className="mb-4">
            <input
              className="mt-1 p-2 w-full border-b border-t-0 border-r-0 border-l-0 rounded-none focus:outline-none"
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              id="cardInput"
              placeholder="Номер карты"
              inputMode="numeric"
              minLength={16}
              maxLength={16}
            />
          </div>
          <div className="mb-4 flex justify-between gap-2">
            <div className="w-[60%]">
              <input
                className="mt-1 p-2 border-b border-t-0 border-r-0 border-l-0 rounded-none focus:outline-none"
                type="text"
                placeholder="MM / YY"
                maxLength={4}
                inputMode="numeric"
              />
            </div>
            <div className="w-[40%]">
              <input
                className="w-full mt-1 p-2 border-b border-t-0 border-r-0 border-l-0 rounded-none focus:outline-none"
                type="text"
                placeholder="CVC"
                maxLength={3}
              />
            </div>
          </div>
          <div className="mb-4">
            <input
              className="mt-1 p-2 w-full border-b border-t-0 border-r-0 border-l-0 rounded-none focus:outline-none"
              type="text"
              placeholder="Имя владельца"
            />
          </div>
        </form>
      </div>
      <div className="w-full p-4 bg-transparent">
        <form className="">
          <div className="w-full transform bg-transparent text-lg duration-300 focus-within:border-indigo-500 ">
            <input
              type="text"
              placeholder="Номер телефона"
              className="w-full bg-[#dfdfdf]  mt-1 p-2 border-b border-t-0 border-r-0 border-l-0 rounded-none focus:outline-none"
              inputMode="numeric"
              maxLength={14}
            />
          </div>

          <div className="w-full transform bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              type="text"
              placeholder="Email"
              className="w-full bg-[#dfdfdf] mt-1 p-2 border-b border-t-0 border-r-0 border-l-0 rounded-none focus:outline-none"
            />
          </div>
        </form>
        <p className="font-[500] text-[9px] text-[#a4a4a4] text-center py-3">
          Продолжая оплату, Вы соглашаетесь{" "}
          <span className="text-[#4362e4]">
            на сбор и обработку персональных данных
          </span>
        </p>
        <div className="flex flex-row justify-between items-center font-[400] text-[14px] text-[#8A898E]">
          <div>
            <p>Скидка по карте</p>
            <p>--</p>
          </div>
          <div>
            <p>Доставка</p>
            <p>--</p>
          </div>
          <div>
            <p>Комиссия</p>
            <p className="font-[600] text-[14px] text-[#000]">0,00 KGS</p>
          </div>
        </div>
        <button onClick={handleAddCard} className="bg-[#8A898E] w-full py-[10px] font-[600] text-[16px] px-[10px] text-white my-[24px]">Оплатить 96985,00 KGS</button>
      </div>
    </>
  );
};

export default AddCard;
