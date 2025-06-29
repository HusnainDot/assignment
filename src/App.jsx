import React from "react";
import "./globals.css";
import ChatContainer from "./WhatsAppChat/ChatContainer";
import CounterContainer from "./counter/CounterContainer";
import ViewChatContainer from "./viewChat/ViewChatContainer";
import TodoContainer from "./Todo/TodoContainer";
import FromContainer from "./MultiFormInputs/FromContainer";
import UseRefContainer from "./UseRef/UseRefContainer";
import ReducerContainer from "./Reducer/ReducerContainer";
const App = () => {
  return (
    <>
      <div className="flex flex-col gap-10 ">
        <ChatContainer />
        <ViewChatContainer />
        <CounterContainer />
        <TodoContainer />
        <FromContainer />

        <ReducerContainer />
        <UseRefContainer />
      </div>
    </>
  );
};

export default App;
