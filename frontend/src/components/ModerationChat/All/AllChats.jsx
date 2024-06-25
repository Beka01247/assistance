import React from "react";
import Chat from "../Chat";

const AllChats = ({ setTab }) => {
  const items = [
    {
      name: "Андрей Голубев",
      description: "Lorem ipsum dolor sit amet consectetur sit nam.",
      avatarUrl: "https://via.placeholder.com/50",
      notifications: 10,
    },
    {
      name: "Андрей Голубев",
      description: "Lorem ipsum dolor sit amet consectetur sit nam.",
      avatarUrl: "https://via.placeholder.com/50",
      notifications: 3,
    },
    {
      name: "Андрей Голубев",
      description: "Lorem ipsum dolor sit amet consectetur sit nam.",
      avatarUrl: "https://via.placeholder.com/50",
      notifications: 0,
    },
    // Add more items as needed
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <Chat
            setTab={setTab}
            key={index}
            name={item.name}
            description={item.description}
            avatarUrl={item.avatarUrl}
            notifications={item.notifications}
          />
        ))}
      </div>
    </div>
  );
};

export default AllChats;
