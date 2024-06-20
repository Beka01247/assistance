import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg w-[413px] h-[386px]">
      <div className="flex items-center">
        <img
          src={user.photo}
          alt={`${user.name}'s photo`}
          className="rounded-lg w-[180px] h-[180px] mr-1"
        />
        <div className="flex flex-col w-[180px] h-[180px] ml-auto">
          <button className="bg-[rgba(225,55,55,1)] w-[193px] h-[50px] mb-3 text-white text-sm px-4 py-2 rounded-lg">
            Посмотреть профиль
          </button>
          <button className="bg-[rgba(225,55,55,1)] w-[193px] h-[50px] mb-3 text-white text-sm px-4 py-2 rounded-lg">
            Посмотреть активность
          </button>
          <button className=" border border-slate-300 w-[193px] h-[50px] md:border-[rgba(225,55,55,1)] bg-white text-[rgba(225,55,55,1)] text-sm px-4 py-2 rounded-lg">
            Заблокировать
          </button>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-700">
          ID <strong>#{user.id}</strong>
        </p>
        <p className="mt-1 text-gray-700">
          Имя <strong>{user.name}</strong>
        </p>
        <p className="mt-1 text-gray-700">
          Фамилия <strong>{user.secondname}</strong>
        </p>
        <p className="mt-1 text-gray-700">
          Номер <strong>{user.phone}</strong>
        </p>
        <p className="mt-1 text-gray-700">
          Email <strong>{user.email}</strong>
        </p>
      </div>
    </div>
  );
};

export default UserCard;
