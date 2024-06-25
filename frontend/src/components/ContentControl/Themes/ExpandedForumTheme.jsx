import React, { useState } from "react";
import MainHeader from "../../MainHeader";
import MessageCard from "../Messages/MessageCard";
import ThemeTopicCard from "./ThemeTopicCard";
import ReadMoreButton from "./ReadMoreButton";

export default function ExpandedForumTheme() {
  const comments = Array(12).fill({
    author: "Андрей Голубев",
    time: "20 мин. назад",
    role: "Очевидець",
    content:
      "Lorem ipsum dolor sit amet consectetur. Faucibus pellentesque leo integer eleifend natoque scelerisque. Gravida aliquet sit diam amet amet.",
  });

  return (
    <div className="p-4">
      <div className="max-w-6xl mx-auto flex">
        <div className="bg-white mb-4 w-[30%]">
          <ThemeTopicCard
            content={{
              author: "Андрей Голубев",
              role: "Очевидець",
              date: "17 апр в 19:49",
            }}
          />
        </div>

        <div className="flex flex-wrap w-[70%]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-2 px-7 ml-8">
            {comments.map((comment, index) => (
              <MessageCard content={comment} index={index} />
            ))}
          </div>
          <ReadMoreButton />
        </div>
      </div>
    </div>
  );
}
