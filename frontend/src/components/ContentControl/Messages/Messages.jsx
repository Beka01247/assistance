import React from "react";
import MoreVertical from "./../../../assets/images/morevertical";
import MessageCard from "./MessageCard";
import ReadMoreButton from "../Themes/ReadMoreButton";

export default function Messages() {
  const comments = Array(24).fill({
    author: "Андрей Голубев",
    time: "20 мин. назад",
    role: "Очевидець",
    content:
      "Lorem ipsum dolor sit amet consectetur. Faucibus pellentesque leo integer eleifend natoque scelerisque. Gravida aliquet sit diam amet amet.",
  });

  return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto">
        <div className="p-6 bg-white rounded-lg shadow-md mb-4">
          <div className="flex flex-wrap">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-2 px-7 ml-8">
              {comments.map((comment, index) => (
                <MessageCard content={comment} index={index} />
              ))}
            </div>
            <ReadMoreButton />
          </div>
        </div>
      </div>
    </div>
  );
}
