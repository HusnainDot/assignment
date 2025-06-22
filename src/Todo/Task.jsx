import React, { useState } from "react";

const Task = ({ text, count, id, settaskId, onremove }) => {
  settaskId(id);

  return (
    <>
      <div className="w-full p-2 rounded-md border-2 border-gray-700 items-center flex justify-between shadow-xl shadow-gray-500 ">
        <div className="flex gap-2 items-center">
          <span className="capitalize text-white text-md md:text-lg font-semibold">
            #{count} :
          </span>
          <p className="capitalize text-white  md:text-xl font-semibold">
            {text.length > 20 ? text.slice(0, 20) + "..." : text}
          </p>
        </div>
        <button
          onClick={() => onremove(id)}
          className="text-gray-900 px-2 py-1.5 rounded-md font-semibold active:scale-95 bg-white cursor-pointer"
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Task;
