import React from "react";
import "./globals.css";
import ChatContainer from "./WhatsAppChat/ChatContainer";
import CounterContainer from "./counter/CounterContainer";
import ViewChatContainer from "./viewChat/ViewChatContainer";
const App = () => {
  return (
    <>
      <div className="flex flex-col gap-10 my-10">
        {/* <ChatContainer />
        <CounterContainer />   */}
        <ViewChatContainer />
      </div>
    </>
  );
};

export default App;
