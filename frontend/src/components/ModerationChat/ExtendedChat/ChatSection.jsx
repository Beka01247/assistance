import React from "react";
import ChatItem from "./ChatItem";

const ChatSection = () => {
  const messages = [
    {
      name: "Светлана",
      role: "Поддержка",
      message: "Lorem ipsum dolor sit amet consectetur.",
      time: "20:15",
    },
    {
      name: "Николай Григорьевич",
      role: "Очевидец",
      message:
        "Lorem ipsum dolor sit amet consectetur. Faucibus pellentesque leo integer eleifend natoque scelerisque.",
      time: "20:16",
    },
    // Add more messages as needed
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-xs ml-auto mb-4">
      <h2 className="text-gray-900 font-semibold mb-4">Тех.поддержка / Чат</h2>
      <div className="overflow-y-auto" style={{ maxHeight: "400px" }}>
        {messages.map((msg, index) => (
          <ChatItem
            key={index}
            name={msg.name}
            role={msg.role}
            message={msg.message}
            time={msg.time}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatSection;
