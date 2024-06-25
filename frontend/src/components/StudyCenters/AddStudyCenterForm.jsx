import React from "react";
import InputMask from "react-input-mask";
import TabSwitcher from "./TabSwitcher";

const AddStudyCenterForm = ({ setTab, tab }) => {
  return (
    <div className="min-h-screen flex items-center justify-center w-[70%] mt-8">
      <div className="bg-white rounded-lg w-full mx-auto">
        <TabSwitcher tab={tab} setTab={setTab} />
        <h2 className="text-gray-900 font-semibold text-xl mb-4">Информация</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-gray-700 mb-1">Адрес центра</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-gray-500"
              placeholder="Введите адрес центра"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-gray-500"
              placeholder="Введите email"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Контактный номер</label>
            <InputMask
              mask="+7 (999) 999-99-99"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-gray-500"
              placeholder="+7 (___) ___-__-__"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">
              Юридическая сущность
            </label>
            <select className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-gray-500">
              <option>Для ИП</option>
              <option>Для Юр.лиц</option>
              <option>Для Физ.лиц</option>
            </select>
          </div>
        </div>
        <h2 className="text-gray-900 font-semibold text-xl mb-4">
          Часы работы
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-gray-700 mb-1">От</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-gray-500"
              placeholder="10:00"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">До</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-gray-500"
              placeholder="20:00"
            />
          </div>
        </div>
        <h2 className="text-gray-900 font-semibold text-xl mb-4">Соц.сети</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-gray-700 mb-1">Instagram</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-gray-500"
              placeholder="Введите Instagram"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">WhatsApp</label>
            <InputMask
              mask="+7 (999) 999-99-99"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-gray-500"
              placeholder="+7 (___) ___-__-__"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Telegram</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-gray-500"
              placeholder="Введите Telegram"
            />
          </div>
        </div>
        <div className="w-full flex justify-center">
          <button className="bg-[#E13737] text-white font-semibold py-2 px-4 rounded-full w-1/2">
            Добавить
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddStudyCenterForm;
