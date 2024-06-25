import React, { useState } from "react";
import MainHeader from "../MainHeader";
import BurgerMenu from "../BurgerMenu";

const CreateNotification = () => {
  const [activeTab, setActiveTab] = useState("Очевидец");
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const [message, setMessage] = useState("");
  return (
    <div className="w-full h-full">
      <MainHeader toggleMenu={toggleMenu} />
      <div className="w-full h-[80vh] flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md my-auto">
          <h2 className="text-center text-lg font-semibold mb-4">
            Написать PUSH-оповещение
          </h2>
          <div className="flex justify-center mb-4">
            <button
              className={`px-4 py-2 ${
                activeTab === "Очевидец"
                  ? "border-b-2 border-black"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("Очевидец")}
            >
              Очевидец
            </button>
            <button
              className={`px-4 py-2 ${
                activeTab === "Спасатель"
                  ? "border-b-2 border-black"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("Спасатель")}
            >
              Спасатель
            </button>
            <button
              className={`px-4 py-2 ${
                activeTab === "Модерация"
                  ? "border-b-2 border-black"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("Модерация")}
            >
              Модерация
            </button>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Уведомление</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-2 text-gray-700 w-full outline-none h-28 placeholder:text-wrap"
              placeholder="Один из членов группы, устремившись к краю скалы для совершения селфи, потерял равновесие и упал в реку ниже."
            />

            <hr className="border-gray-300 mt-2" />
          </div>
          <button className="bg-[#E13737] text-white font-semibold py-2 px-4 rounded-full w-full">
            Отправить
          </button>
        </div>
      </div>
      <BurgerMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
    </div>
  );
};

export default CreateNotification;
