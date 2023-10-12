import { useNavigate } from "react-router-dom";

interface props {
  title: string;
  content: string;
  onClose: () => void;
  img?: string;
  buttonText: string;
  loader?: boolean;
}

const Modal = ({ title, content, onClose, img, loader, buttonText }: props) => {
  const navigate = useNavigate();

  const handleExit = () => {
    onClose();
    navigate("/");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#000] bg-opacity-50 py-[32px] px-[16px]">
      <div className="bg-white px-4 rounded-3xl flex flex-col items-center justify-center">
        {loader && <div>Loader...</div>}
        {img && <img src={img} alt="" className="pt-8"/>}
        <h4 className="font-bold text-[20px] text-center pt-[24px]">{title}</h4>
        {content && <p className="font-[400] text-[14px] text-center text-[#8A898E] pt-[24px]">{content}</p>}
        <button
          className="bg-purple rounded-xl w-full py-[10px] font-[600] text-[16px] px-[10px] text-white my-[24px]"
          onClick={handleExit}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Modal;
