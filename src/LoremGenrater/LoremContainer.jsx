import React from 'react'
import { FaPlus } from 'react-icons/fa6';

const LoremContainer = () => {
  return (
    <>
      <div className="w-full h-screen  bg-cyan-950/80">
        <h2 className="text-center py-2 text-white capitalize  text-2xl">
          Assignment Todo List
        </h2>

        <div className=" w-auto  md:min-w-[600px]  rounded-md bg-gray-950">
          <form className="w-full p-5 text-xl">
            <label htmlFor="" className="text-white font-semibold">
              Add Task
            </label>
            <div
              className={`flex items-center capitalize  rounded-xl p-3 border-2 my-2 `}
            >
              <input
                type="text"
                placeholder="Enter your task"
                className="text-white w-full outline-0 bg-transparent"
              />
              <button
                type="button"
                className={`text-gray-900 bg-white rounded-2xl cursor-pointer active:scale-95`}
              >
                <FaPlus size={30} />
              </button>
            </div>

            {/* {submited &&
              (checkError ? (
                <p className="capitalize text-red-500 font-semibold md:my-3 md:px-2 text-sm md:text-lg ">
                  please enter something in your task
                </p>
              ) : (
                <p className="capitalize text-green-500 font-semibold md:my-3 md:px-2 text-sm md:text-lg ">
                  Your task has been added Successfully
                </p>
              ))} */}
          </form>

          <div className=" m-3 py-1  border-2 border-gray-500 rounded-xl ">
            <h2 className="text-white text-center text-2xl font-semibold">
              All Task
            </h2>

            <div className="flex flex-col my-3 px-4 w-full gap-y-5"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoremContainer