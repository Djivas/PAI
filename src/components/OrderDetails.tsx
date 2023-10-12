import { useEffect } from "react";
import FlaskLogo from "../assets/flaskCoffee.jpg";
import Receipt from "../assets/Receipt.svg";
import { useReceiptStore } from "../store/receiptStore";

const OrderDetails = () => {
  const { data, fetchReceipt } = useReceiptStore();

  useEffect(() => {
    fetchReceipt("1");
  }, [fetchReceipt]);

  console.log(data);

  return (
    <>
      {/* <div className="bg-[#fff] w-full flex flex-row justify-between items-center rounded-b-2xl p-4">
        <div className="">
          <h2 className="font-[700] text-[28px]">Flask Coffee</h2>
          <p className="font-[400] text-[14px] text-[#8A898E]">
            ул. Исанова 37/1
          </p>
        </div>
        <img
          src={FlaskLogo}
          alt="Logo"
          className="w-[64px] h-[64px] rounded-full border border-[#8A898E]"
        />
      </div>
      <div className="bg-[#fff] w-full flex flex-row justify-between items-center rounded-2xl my-[8px] p-4">
        <span className="font-[600] text-[16px]">Сумма к оплате</span>
        <span className="font-[700] text-[24px]">735 сом</span>
      </div>
      <div className="bg-[#fff] w-full flex flex-col justify-between items-center rounded-2xl my-1 p-4">
        <h2 className="font-[700] text-[24px] self-start">Детали заказа</h2>
        <div className="w-full pt-3">
          <div className="flex items-center justify-between">
            <span className="font-[600] text-[16px]">Американо</span>
            <span className="font-[600] text-[16px]">340 сом</span>
          </div>
          <div className="flex items-center justify-between w-full">
            <p className="font-[400] text-[14px]">170 сом</p>
            <p className="font-[400] text-[14px]">х2</p>
          </div>
        </div>
      </div>
      <div className="bg-[#fff] w-full flex flex-row justify-between items-center rounded-2xl my-[8px] p-4">
        <div className="flex flex-row items-center">
          <img
            src={Receipt}
            alt="receipt"
            className="w-[36px] h-[36px] pr-[8px]"
          />
          <div>
            <span className="font-[600] text-[16px]">Заказ №2531</span>
            <p className="font-[400] text-[14px] text-[#8A898E]">
              5 сентября - 12:32
            </p>
          </div>
        </div>
        <span className="font-[600] text-[16px] text-orange">Открыт</span>
      </div> */}
      {data?.products.map((product, index) => (
        <div key={index}>
          <div className="bg-[#fff] w-full flex flex-row justify-between items-center rounded-b-2xl p-4">
            <div className="">
              <h2 className="font-[700] text-[28px]">Flask Coffee</h2>
              <p className="font-[400] text-[14px] text-[#8A898E]">
                ул. Исанова 37/1
              </p>
            </div>
            <img
              src={FlaskLogo}
              alt="Logo"
              className="w-[64px] h-[64px] rounded-full border border-[#8A898E]"
            />
          </div>
          <div className="bg-[#fff] w-full flex flex-row justify-between items-center rounded-2xl my-[8px] p-4">
            <span className="font-[600] text-[16px]">Сумма к оплате</span>
            <span className="font-[700] text-[24px]">
              {product.product_sum}
            </span>
          </div>
          <div className="bg-[#fff] w-full flex flex-col justify-between items-center rounded-2xl my-1 p-4">
            <h2 className="font-[700] text-[24px] self-start">Детали заказа</h2>
            <div className="w-full pt-3">
              <div className="flex items-center justify-between">
                <span className="font-[600] text-[16px]">
                  {product.product_name}
                </span>
                <span className="font-[600] text-[16px]">
                  {parseFloat(product.product_sum) / 100}
                </span>
              </div>
              <div className="flex items-center justify-between w-full">
                <p className="font-[400] text-[14px]">{parseFloat(product.product_sum) / parseInt(product.num)}</p>
                <p className="font-[400] text-[14px]">х{product.num}</p>
              </div>
            </div>
          </div>
          <div className="bg-[#fff] w-full flex flex-row justify-between items-center rounded-2xl my-[8px] p-4">
            <div className="flex flex-row items-center">
              <img
                src={Receipt}
                alt="receipt"
                className="w-[36px] h-[36px] pr-[8px]"
              />
              <div>
                <span className="font-[600] text-[16px]">
                  Заказ №{data.transaction_id}
                </span>
                <p className="font-[400] text-[14px] text-[#8A898E]">
                  {data.date_close_date}
                </p>
              </div>
            </div>
            <span className={`font-[600] text-[16px] ${data.status === "1" ? `text-orange` : 'text-[#6DC339]'}`}>{data.status === "1" ? 'Открыт' : 'Оплачен'}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default OrderDetails;
