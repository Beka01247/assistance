import React from "react";
import Chat from "../../assets/images/chat";
import Dots from "../../assets/images/threedots";

const ContentCard = ({ content }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between w-[368px] h-[55px]">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <Chat className="w-10 h-10 mr-3" />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row">
            <h3 className="ml-2 text-sm font-semibold">{content.title}</h3>
            <div className="flex flex-row items-end ml-3">
              <button className="text-gray-500">
                <Dots />
              </button>
              <p className="text-xs text-gray-500">{content.comments}</p>
            </div>
          </div>
          <div className="flex flex-row">
            <p className="ml-3 text-xs text-gray-500">{content.author}</p>
            <div className="flex items-end">
              <p className="text-xs text-gray-500">{content.time}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
