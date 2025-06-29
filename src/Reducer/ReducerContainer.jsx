import React, { useReducer, useState } from "react";
import { FaPlus } from "react-icons/fa6";

const ReducerContainer = () => {
  const [handelInput, setHandelInput] = useState("");

  const reducer = (state, action) => {
    if (action.type == "Empty") {
      return {
        ...state,
        success: false,
        error: true,
        message: "please Enter any task",
      };
    }

    if (action.type == "reset") {
      return {
        ...state,
        success: false,
        error: false,
        message: "",
      };
    }

    if (action.type == "Value_added") {
      return {
        ...state,
        success: true,
        error: false,
        message: "Your task has been Aded",
        data: [...state.data, action.payload],
      };
    }
  };

  const initalState = {
    data: [],
    success: false,
    error: false,
    message: "",
  };

  const [state, dispatch] = useReducer(reducer, initalState);

  const SubmitData = () => {
    if (!handelInput) {
      dispatch({ type: "Empty" });
    } else {
      dispatch({ type: "Value_added", payload: handelInput });
    }

    setTimeout(() => {
      dispatch({ type: "reset" });
    }, 3000);
  };

  return (
    <>
      <div className="bg-cyan-950 w-full h-screen flex flex-col  items-center justify-center">
        <h2 className="text-center py-2 text-white capitalize  text-2xl">
          Assignment Todo List using Reducer
        </h2>
        <div className=" w-auto md:min-w-[600px]  rounded-lg bg-gray-950">
          <form className="w-full p-5 text-xl">
            <label htmlFor="" className="text-white font-semibold">
              Add Task
            </label>
            <div
              className={`flex items-center capitalize  rounded-xl p-3 border-2 border-gray-500 my-2 `}
            >
              <input
                value={handelInput}
                onChange={(e) => setHandelInput(e.target.value)}
                type="text"
                placeholder="Enter your task"
                className="text-white w-full outline-0 bg-transparent"
              />
              <button
                onClick={SubmitData}
                type="button"
                className={`text-gray-900 bg-white rounded-2xl cursor-pointer active:scale-95`}
              >
                <FaPlus size={30} />
              </button>
            </div>
            {state.error && (
              <p className="text-red-500 text-sm capitalize font-semibold">
                {state.message}
              </p>
            )}

            {state.success && (
              <p className="text-green-500 text-sm capitalize font-semibold">
                {state.message}
              </p>
            )}
          </form>
          <div className=" m-3 py-1  border-2 border-gray-500 rounded-xl ">
            <h2 className="text-white text-center text-2xl font-semibold">
              All Task
            </h2>

            <div className="flex flex-col my-3 px-4 w-full gap-y-5">
              {state.data.map((item, i) => {
                return (
                  <h4 className="text-white">
                    {" "}
                    Task {i + 1} : {item}
                  </h4>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReducerContainer;
