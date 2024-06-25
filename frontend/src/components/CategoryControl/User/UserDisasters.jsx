import React from "react";
import ContentCard from "./ContentCard";
import ReadMoreButton from "./../../ContentControl/Themes/ReadMoreButton";

export default function UserDisasters({ setTab }) {
  const exampleContent = {
    title: "Наступлении сильных ураганов в вашем районе.",
    views: 120,
    time: "12.05.2024",
  };
  return (
    <div className="flex flex-col w-[72.5%] mx-auto">
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
