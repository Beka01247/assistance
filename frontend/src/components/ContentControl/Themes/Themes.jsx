import React from "react";
import ContentCard from "./ContentCard";
import ReadMoreButton from "./ReadMoreButton";

export default function Themes({ setTab }) {
  const exampleContent = {
    icon: "https://via.placeholder.com/40",
    title: "Экстренная помощь и спасение",
    author: "Андрей Голубев",
    comments: 120,
    time: "25 мин. назад",
  };
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 p-7 ml-8">
        {[
          exampleContent,
          exampleContent,
          exampleContent,
          exampleContent,
          exampleContent,
          exampleContent,
        ].map((content, index) => (
          <ContentCard key={index} content={content} setTab={setTab} />
        ))}
      </div>
      <ReadMoreButton />
    </div>
  );
}
