import { useState } from 'react';
import { RxExit } from "react-icons/rx";
import { Link } from 'react-router-dom';
import Modal from './Modal';
import Vector from "../assets/Vector.svg";

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-[#fff] w-full flex flex-col items-center rounded-2xl mt-[8px] px-5 max-w-4xl mx-auto">
      <div className="flex flex-row items-center justify-between w-full pt-[20px] pb-[24px]">
        <h1 className="font-bold text-[24px]">Профиль</h1>
        <RxExit className="w-[24px] h-[24px] cursor-pointer" onClick={handleOpenModal}/>
      </div>
      <div className="w-full">
        <h4 className="font-[600] text-[16px]">Номер телефона</h4>
        <p className="font-[400] text-[14px] pt-[12px]">+996 777 324234</p>
        <Link to='https://api.whatsapp.com/send/?phone=%2B996505205058&text&type=phone_number&app_absent=0'>
        <button className="bg-purple rounded-xl w-full py-[10px] font-[600] text-[16px] px-[10px] text-white my-[24px]">Оставить отзыв</button>
        </Link>
        <p className="font-[400] text-[14px] text-purple">Пользовательское соглашение</p>
        <p className="font-[400] text-[14px] text-purple py-[24px]">Политика конфиденциальности</p>
      </div>
      {isModalOpen && <Modal img={Vector} title="Выход из аккаунта" content='При выходе вам потребуется заново вводить номер телефона и получить СМС' onClose={handleCloseModal} buttonText='Подтвердить выход'/>}
    </div>
  );
};

export default Profile;
