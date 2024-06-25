import React from "react";

const MessageInput = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-[30%] mx-4 mb-4">
      <h2 className="text-gray-900 font-semibold mb-4">Сообщение</h2>
      <textarea
        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-gray-500"
        rows="5"
        placeholder="Lorem ipsum dolor sit amet consectetur..."
      ></textarea>
      <button className="bg-[#E13737] text-white font-semibold py-2 px-4 rounded-full w-full mt-4">
        Отправить
      </button>
    </div>
  );
};

export default MessageInput;
