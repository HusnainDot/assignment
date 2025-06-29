import React, { useState } from "react";

const CounterContainer = () => {
  const [count, setCount] = useState(0);

  const decCount = () => {
    if (count == 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className="  bg-gray-400 p-15  mx-auto mt-5  rounded-lg  ">
        <h2 className="text-center py-2 text-white capitalize  text-2xl">
          Assignment Counter
        </h2>
        <p className="text-center text-9xl text-white">{count}</p>

        <div className="flex items-center justify-center mt-5 gap-4">
          <button
            onClick={decCount}
            className={`text-white bg-red-500 rounded-xl py-2 px-4 font-semibold cursor-pointer active:scale-90 `}
          >
            Dec
          </button>
          <button
            onClick={() => setCount(0)}
            className="text-white bg-gray-700 rounded-xl py-2 px-4 font-semibold cursor-pointer active:scale-90 "
          >
            RESET
          </button>
          <button
            onClick={() => setCount(count + 1)}
            className="text-white bg-green-700 rounded-xl py-2 px-4 font-semibold cursor-pointer active:scale-90 "
          >
            Inc
          </button>
        </div>
      </div>
    </>
  );
};

export default CounterContainer;
