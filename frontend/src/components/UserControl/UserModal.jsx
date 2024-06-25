import React from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";

const ProfileCard = ({ onClose, user }) => {
  const navigate = useNavigate();
  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg shadow-lg relative w-[50%] h-max">
        <button onClick={onClose} className="absolute top-2 right-2 text-lg">
          &times;
        </button>
        <div className="flex mb-4">
          <img
            src="https://via.placeholder.com/100" // Replace with actual profile image URL
            alt="Profile"
            className="w-52 h-52 rounded-lg mr-4"
          />
          <div className="">
            <div className="flex gap-32 items-center justify-between">
              <div className="text-gray-900 font-semibold">Тип</div>
              <div className="text-gray-500">Спасатель</div>
            </div>
            <div className="flex gap-32 items-center justify-between">
              <div className="text-gray-900 font-semibold mt-2">
                Дата регистрации
              </div>
              <div className="text-gray-500">21.05.2024</div>
            </div>
            <div className="flex gap-32 items-center justify-between">
              <div className="text-gray-900 font-semibold mt-2">ID</div>
              <div className="text-gray-500">#58293617</div>
            </div>
            <div className="flex gap-32 items-center justify-between">
              <div className="text-gray-900 font-semibold mt-2">Имя</div>
              <div className="text-gray-500">Николай</div>
            </div>
            <div className="flex gap-32 items-center justify-between">
              <div className="text-gray-900 font-semibold mt-2">Фамилия</div>
              <div className="text-gray-500">Григорьевич</div>
            </div>
            <div className="flex gap-32 items-center justify-between">
              <div className="text-gray-900 font-semibold mt-2">Номер</div>
              <div className="text-gray-500">+ 7 (---) --- -- --</div>
            </div>
            <div className="flex gap-32 items-center justify-between">
              <div className="text-gray-900 font-semibold mt-2">Email</div>
              <div className="text-gray-500">bluesky5472@gmail.com</div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-4 mb-4">
            <div className="flex gap-16 items-center justify-between">
              <div className="text-gray-900 font-semibold">
                Сообщений на форуме
              </div>
              <div className="text-gray-500">1542 шт.</div>
            </div>
            <div className="flex gap-16 items-center justify-between">
              <div className="text-gray-900 font-semibold">
                Статьи на форуме
              </div>
              <div className="text-gray-500">4 шт.</div>
            </div>
            <div className="flex gap-16 items-center justify-between">
              <div className="text-gray-900 font-semibold">Объявлений</div>
              <div className="text-gray-500">2 шт.</div>
            </div>
            <div className="flex gap-16 items-center justify-between">
              <div className="text-gray-900 font-semibold">
                Сообщений о бедствии
              </div>
              <div className="text-gray-500">2 шт.</div>
            </div>
            <div className="flex gap-16 items-center justify-between">
              <div className="text-gray-900 font-semibold">
                Запрошенных инцидентов
              </div>
              <div className="text-gray-500">0 шт.</div>
            </div>
            <div className="flex gap-16 items-center justify-between">
              <div className="text-gray-900 font-semibold">
                Откликов на происшествия
              </div>
              <div className="text-gray-500">10 шт.</div>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-[50%]">
            <button
              className="bg-red-500 text-white font-semibold py-2 px-4 rounded-full w-full h-14"
              onClick={() => navigate("/admin/user-control/activity")}
            >
              Посмотреть активность
            </button>
            <button className="bg-white text-red-500 border border-red-500 font-semibold py-2 px-4 rounded-full w-full h-14">
              Заблокировать
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ProfileCard;
