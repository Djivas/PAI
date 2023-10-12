import Navbar from "../components/Navbar";
import PhoneNumberInput from "../components/PhoneNumberInput";

const Otps = () => {
  return (
    <>
      <Navbar rounded/>
      <div className="min-h-[80vh] flex items-center justify-center">
        <PhoneNumberInput />
      </div>
    </>
  );
};

export default Otps;
