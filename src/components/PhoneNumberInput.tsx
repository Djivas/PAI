import { useState } from "react";
// import Modal from "./Modal";
import CodeInput from "./CodeInput";

const PhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState("+996 ");
  // const [isNumberNotFound, setIsNumberNotFound] = useState(false);
  const [isCodeInputVisible, setIsCodeInputVisible] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length < 5) {
      setPhoneNumber("+996 ");
    } else if (event.target.value.length > 14) {
      setPhoneNumber(phoneNumber);
    } else {
      setPhoneNumber(event.target.value);
    }
  };

  const handleClick = () => {
    if (phoneNumber.length === 14) {
      setIsCodeInputVisible(true);
      // Здесь будет логика отправки СМС
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };

  return (
    <div className="bg-[#FFFFFF] px-[16px] w-full h-[270px] flex justify-center flex-col items-center rounded-2xl max-w-4xl mx-auto">
      {!isCodeInputVisible ? (
        <>
          <h2 className="font-bold text-[24px] self-start">Введите номер телефона</h2>
          <input
            type="text"
            value={phoneNumber}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            className="rounded-xl w-full bg-gray-light p-[10px] font-bold text-[20px] px-3 mt-[24px] mb-[40px]"
            inputMode="numeric"
          />
          {phoneNumber.length === 14 ? (
            <button onClick={handleClick} className="bg-purple rounded-xl w-full py-[10px] font-[600] text-[16px] px-3 text-white">Получить СМС код</button>
          ) : (
            <button className="bg-gray-dark rounded-xl w-full py-[10px] font-[600] text-[16px] px-3">Получить СМС код</button>
          )}
          {/* {isNumberNotFound && <Modal />} */}
        </>
      ) : (
        <CodeInput />
      )}
    </div>
  );
};

export default PhoneNumberInput;
