import React from "react";
import CertificateCard from "./CertificateCard";

const Status = () => {
  return (
    <div className="bg-white p-6 w-[50%]">
      <div className="flex items-center w-full mb-4 border-b-[1px] border-gray-300 pb-2">
        <span className="text-gray-700 font-semibold">Не просмотрено</span>
        <input
          type="radio"
          name="status"
          className="mr-2 ml-auto custom-radio"
          checked
        />
      </div>
      <div className="flex items-center mb-4 w-full border-b-[1px] border-gray-300 pb-2">
        <span className="text-gray-700 font-semibold">Одобренно</span>
        <input
          type="radio"
          name="status"
          className="mr-2 ml-auto custom-radio"
        />
      </div>
      <div className="flex items-center w-full mb-4 border-b-[1px] border-gray-300 pb-2">
        <span className="text-gray-700 font-semibold">Отклонено</span>
        <input
          type="radio"
          name="status"
          className="mr-2 ml-auto custom-radio"
        />
      </div>
      <div className="flex items-center w-full mb-4 border-b-[1px] border-gray-300 pb-2">
        <span className="text-gray-700 font-semibold">Архив</span>
        <input
          type="radio"
          name="status"
          className="mr-2 ml-auto custom-radio"
        />
      </div>
    </div>
  );
};

const ExtendedCertificateCard = () => {
  return (
    <div className="flex flex-col items-center h-screen space-y-6">
      <div className="flex space-x-6 w-[50%]">
        <div className="flex flex-col w-[50%]">
          <CertificateCard />
          <button className="bg-[#E13737] text-white px-16 py-2 rounded-2xl mt-4">
            Скачать PDF
          </button>
        </div>
        <Status />
      </div>
    </div>
  );
};

export default ExtendedCertificateCard;
