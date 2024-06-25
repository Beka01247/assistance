import React, { useEffect, useState } from "react";
import Chat from "../../../assets/images/chat";
import Dots from "../../../assets/images/threedots";
import MoreVertical from "../../../assets/images/morevertical";

const ContentCard = ({ content, index }) => {
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
  useEffect(() => {
    console.log("comment", content);
  }, [content]);
  return (
    content && (
      <div className="w-full h-max flex items-center relative" key={index}>
        <div className="bg-white border w-full border-gray-200 rounded-lg px-4 py-2 flex items-center justify-between ">
          <div className="flex items-center w-full">
            <div className="flex-shrink-0 cursor-pointer self-start">
              <img
                className="w-10 h-10 rounded-full"
                src="https://via.placeholder.com/40"
                alt="avatar"
              />
            </div>
            <div className="flex flex-col w-full">
              <div className="flex flex-row">
                <h3 className="ml-2 text-sm font-semibold">{content.author}</h3>
                <div className="flex flex-row items-end ml-4">
                  <p className="text-xs text-gray-500">{content.time}</p>
                </div>
              </div>
              <div className="flex flex-row w-full">
                <p className="ml-3 text-xs text-gray-500">{content.role}</p>
                <div className="flex ml-auto"></div>
              </div>
              <div className="w-full">
                <p className="-ml-8 mt-2 text-sm text-gray-500">
                  {content.content}
                </p>
              </div>
            </div>
          </div>
        </div>
        <MoreVertical toggleMenu={toggleMenu} />
        {menuVisible && (
          <div className="absolute right-0 top-20 w-40 text-md bg-white border rounded-lg shadow-xl z-10">
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
    )
  );
};

export default ContentCard;
