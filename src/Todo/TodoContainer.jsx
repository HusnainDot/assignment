import React, { use, useState } from "react";
import { FaPlus } from "react-icons/fa";
import Task from "./Task";
const TodoContainer = () => {
  const [taskData, setTaskData] = useState([]);
  const [taskId, settaskId] = useState(null);
  const [getTask, setGetTask] = useState("");
  const [checkError, setCheckError] = useState(false);
  const [submited, setSubmited] = useState(false);
  const AddTask = () => {
    setSubmited(true);

    if (getTask === "") {
      setCheckError(true);
    } else {
      setTaskData([
        ...taskData,
        {
          text: getTask,
          id: Date.now(),
        },
      ]);

      setCheckError(false);
      setGetTask("");
      setTimeout(() => {
        setSubmited(false);
      }, 3000);
    }
  };

  const remove = (Id) => {
    const upDatedData = taskData.filter((i) => i.id !== Id);

    setTaskData(upDatedData);
  };

  return (
    <div className="bg-black/25 w-full h-screen flex items-center justify-center">
      <div className=" w-auto md:min-w-[600px]  rounded-md bg-gray-950">
        <h2 className="text-white text-center text-5xl mt-5 font-semibold">
          Todo List
        </h2>
        <form className="w-full p-5 text-xl">
          <label htmlFor="" className="text-white font-semibold">
            Add Task
          </label>
          <div
            className={`flex items-center capitalize  rounded-xl p-3 border-2 my-2 ${
              submited
                ? checkError
                  ? "border-red-500"
                  : "border-green-500"
                : "border-gray-500"
            }`}
          >
            <input
              value={getTask}
              onChange={(e) => setGetTask(e.target.value)}
              type="text"
              placeholder="Enter your task"
              className="text-white w-full outline-0 bg-transparent"
            />
            <button
              onClick={AddTask}
              type="button"
              className={`text-gray-900 bg-white rounded-2xl cursor-pointer active:scale-95`}
            >
              <FaPlus size={30} />
            </button>
          </div>

          {submited &&
            (checkError ? (
              <p className="capitalize text-red-500 font-semibold md:my-3 md:px-2 text-sm md:text-lg ">
                please enter something in your task
              </p>
            ) : (
              <p className="capitalize text-green-500 font-semibold md:my-3 md:px-2 text-sm md:text-lg ">
                Your task has been added Successfully
              </p>
            ))}
        </form>

        <div className=" m-3 py-1  border-2 border-gray-500 rounded-xl ">
          <h2 className="text-white text-center text-2xl font-semibold">
            All Task
          </h2>

          <div className="flex flex-col my-3 px-4 w-full gap-y-5">
            {taskData.map((obj, i) => {
              return (
                <Task
                  {...obj}
                  key={i}
                  count={i + 1}
                  settaskId={settaskId}
                  onremove={remove}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
