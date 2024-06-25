import React from "react";

const ContentCard = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full mx-auto mb-4">
      <div className="flex items-center mb-4">
        <img
          src="https://via.placeholder.com/50"
          alt="Icon"
          className="w-36 h-36 mr-4 rounded-xl"
        />
        <div>
          <div className="text-gray-500 text-sm">Время</div>
          <div className="text-gray-900">01.05.24 21:21</div>
          <div className="text-gray-500 text-sm mt-2">Имя и фамилия</div>
          <div className="text-gray-900">Николай Григорьевич</div>
          <div className="text-gray-500 text-sm mt-2">Категория ситуации</div>
          <div className="text-gray-900">Человек без сознания</div>
        </div>
      </div>
      <div className="text-gray-700 mb-4">
        Описание
        <p>
          Один из членов группы, устремившись к краю скалы для совершения селфи,
          потерял равновесие и упал в реку ниже.
        </p>
      </div>
      <button className="bg-[#E13737] text-white font-semibold py-2 px-4 rounded-lg w-full">
        Отключить ситуацию
      </button>
    </div>
  );
};

export default ContentCard;
