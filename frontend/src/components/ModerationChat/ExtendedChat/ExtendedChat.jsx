import React from "react";
import ChatSection from "./ChatSection";
import MessageInput from "./MessageInput";
import StatusSection from "./StatusSection";

const ExtendedChat = () => {
  return (
    <div className="min-h-screen p-8 flex items-start w-full justify-center">
      <ChatSection />
      <MessageInput />
      <StatusSection />
    </div>
  );
};

export default ExtendedChat;
