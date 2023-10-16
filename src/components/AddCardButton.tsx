import { useState } from 'react';
// import Modal from './Modal';
// import Check from '../assets/cheked.png'
import ShowCaseModal from './ShowCaseModal';

const AddCardButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  // };

  const [stage, setStage] = useState(0);

  const nextStage = () => {
    setStage(prevStage => prevStage + 1);
  };


  return (
    <div className="rounded-t-2xl bg-[#fff] pt-[16px] pb-[32px] px-[16px]  bottom-0 w-full mt-[8px]">
      <button
        className="bg-purple rounded-xl w-full py-[12px] font-[600] text-[16px] px-3 text-white"
        type="button"
        onClick={handleOpenModal}
      >
      Оплатить
      </button>
      {/* {isModalOpen && <Modal img={Check} title="Оплачено" content='При выходе вам потребуется заново вводить номер телефона и получить СМС' onClose={handleCloseModal} />} */}
      {isModalOpen && <ShowCaseModal stage={stage} nextStage={nextStage} />}
    </div>
  );
};

export default AddCardButton;
