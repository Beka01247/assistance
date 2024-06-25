import React from "react";

const Chat = ({ name, description, avatarUrl, notifications, setTab }) => {
  return (
    <div
      className="flex items-center p-4 bg-white border-b-2 border-gray-700 w-full mb-4"
      onClick={() => setTab(5)}
    >
      <img
        src={avatarUrl}
        alt="Profile"
        className="w-12 h-12 rounded-full mr-4"
      />
      <div className="flex-grow">
        <div className="text-gray-900 font-semibold">{name}</div>
        <div className="text-gray-500 text-sm">{description}</div>
      </div>
      {notifications > 0 && (
        <div className="bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center ml-2">
          {notifications}
        </div>
      )}
    </div>
  );
};

export default Chat;
