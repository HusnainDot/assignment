import React from "react";
import { FaRegMessage } from "react-icons/fa6";
import { LuMessageCircleMore } from "react-icons/lu";
import SingleUser from "./SingleUser";
import { Chats } from "./ChatData";

const ChatContainer = () => {
  return (
    <>
      <div className="container bg-gray-400 p-8  mx-auto mt-5  rounded-lg ">
        <div className=" w-auto md:w-[500px]  bg-white rounded-2xl mx-auto overflow-hidden">
          <div className="flex  gap-3 bg-green-500 py-5 px-10 ">
            <LuMessageCircleMore size={40} className="text-white mt-3" />
            <div>
              <h2 className="text-white font-semibold text-2xl">
                Start a Conversation
              </h2>

              <p className="text-white font-normal text-lg">
                Hi! Click one of ou member below to chat <br />
                on <span className="font-bold">Whatsapp</span>.{" "}
              </p>
            </div>
          </div>

          <p className="px-10 py-5 font-semibold text-gray-500">
            The team typically replies in a few mintues
          </p>

          <div className="flex flex-col gap-3 my-3 px-6">
            {Chats.map((obj, i) => {
                return <SingleUser {...obj} key={i} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatContainer;
