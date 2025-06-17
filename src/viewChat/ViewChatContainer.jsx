import React from "react";
import { LuMessageCircleMore } from "react-icons/lu";
import ViewUsers from "./ViewUsers";
import { ViewChats } from "./ViewData";
import View from "./View";

const ViewChatContainer = () => {
  return (
    <>
      <View />

      <div className="container bg-gray-400 p-8 w-[98%]  mx-auto mt-5  rounded-lg ">
        <div className=" w-auto md:w-[500px]  bg-white rounded-2xl mx-auto overflow-hidden">
          <h2 className="text-teal-950 text-center font-semibold text-2xl my-5">
            Users
          </h2>

          <div className="flex flex-col gap-3 my-3 px-6">
            {ViewChats.map((obj, i) => {
              return <ViewUsers {...obj} key={i} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewChatContainer;
