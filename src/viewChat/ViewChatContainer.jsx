import React, { use, useState } from "react";
import { LuMessageCircleMore } from "react-icons/lu";
import ViewUsers from "./ViewUsers";
import { ViewChats } from "./ViewData";
import View from "./View";

const ViewChatContainer = () => {
  const [showView, setShowView] = useState(false);
  const [check, setCheck] = useState(null);
  const [allData, setAllData] = useState(ViewChats);

  const remove = (check) => {
    const updatedData = allData.filter((i) => i.id !== check);

    setAllData(updatedData);
  };

  return (
    <>
      {showView && (
        <View showView={showView} setShowView={setShowView} check={check} />
      )}

      <div className="container bg-gray-400 p-1 md:p-8 w-[98%]  mx-auto mt-5  rounded-lg ">
        <div className=" w-full md:w-[500px]  bg-white rounded-2xl mx-auto overflow-hidden">
          <h2 className="text-teal-950 text-center font-semibold text-2xl my-5">
            Users
          </h2>

          <div className="flex flex-col gap-3 my-3 px-6">
            {allData.map((obj, i) => {
              return (
                <ViewUsers
                  {...obj}
                  key={i}
                  showView={showView}
                  setShowView={setShowView}
                  setCheck={setCheck}
                  check={check}
                  onRemove={remove}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewChatContainer;
