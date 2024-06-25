import React, { useState } from "react";
import Chat from "../../../assets/images/chat";
import Dots from "../../../assets/images/threedots";
import MoreVertical from "../../../assets/images/morevertical";

const ContentCard = ({ content, setTab }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleEdit = () => {
    console.log("Edit");
  };

  const handleDelete = () => {
    console.log("Delete");
  };
  return (
    <div className="w-full h-[60px] flex items-center relative">
      <div className="bg-white border w-full border-gray-200 rounded-lg px-4 py-2 flex items-center justify-between ">
        <div className="flex items-center w-full">
          <div
            className="flex-shrink-0 cursor-pointer"
            onClick={() => setTab(5)}
          >
            <Chat className="w-10 h-10 mr-3" />
          </div>
          <div className="flex flex-col w-full">
            <div className="flex flex-row">
              <h3 className="ml-2 text-sm font-semibold">{content.title}</h3>
              <div className="flex flex-row items-end ml-auto">
                <button className="text-gray-500">
                  <Dots />
                </button>
                <p className="text-xs text-gray-500">{content.comments}</p>
              </div>
            </div>
            <div className="flex flex-row w-full">
              <p className="ml-3 text-xs text-gray-500">{content.author}</p>
              <div className="flex ml-auto">
                <p className="text-xs text-gray-500">{content.time}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MoreVertical toggleMenu={toggleMenu} />
      {menuVisible && (
        <div className="absolute right-0 top-12 w-40 bg-white border rounded-lg shadow-xl z-10">
          <ul>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-center"
              onClick={handleEdit}
            >
              Редактировать
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600 text-center"
              onClick={handleDelete}
            >
              Удалить
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ContentCard;
