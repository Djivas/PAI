import { useState, useEffect, ChangeEvent, useRef  } from "react";
import { useNavigate } from "react-router-dom";

const CodeInput: React.FC = () => {
  const [code, setCode] = useState<string[]>(['', '', '', '']);
  const [seconds, setSeconds] = useState<number>(60);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);
  const navigate = useNavigate();
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (isTimerRunning && seconds > 0) {
      const timerId = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    } else if (seconds === 0) {
      setIsTimerRunning(false);
    }
  }, [seconds, isTimerRunning]);

  useEffect(() => {
    if (code.join('').length === 4) {
      navigate("/restaurants");
    }
  }, [code, navigate]);

  const handleInputChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
    const newCode = [...code];
    newCode[index] = event.target.value;
    setCode(newCode);

    if (event.target.value !== '') {
      if (index < code.length - 1 && inputsRef.current[index + 1] != null) {
        inputsRef.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };

  const handleResendCode = () => {
    setSeconds(60);
    setIsTimerRunning(true);
  };

  return (
    <div className="w-full flex justify-center flex-col items-center rounded-2xl">
      <h2 className="font-bold text-[24px] self-start">Введите код из СМС</h2>
      <div className="flex flex-row  pt-[24px] pb-[40px] gap-[16px]">
      {code.map((digit, index) => (
          <input
            key={index}
            type="text"
            className="w-[58px] h-[64px] text-center rounded-2xl bg-gray-light font-bold text-[20px]"
            value={digit}
            onChange={handleInputChange(index)}
            onKeyPress={handleKeyPress}
            ref={(ref) => (inputsRef.current[index] = ref)}
            maxLength={1}
            inputMode="numeric"
          />
        ))}
      </div>
      <button
        onClick={handleResendCode}
        className={`rounded-xl w-full py-[10px] font-[600] text-[16px] px-3 ${
          isTimerRunning ? "bg-gray-dark text-black" : "bg-purple text-white"
        }`}
        disabled={isTimerRunning}
      >
        Отправить код снова {isTimerRunning && `(${seconds})`}
      </button>
    </div>
  );
};

export default CodeInput;
