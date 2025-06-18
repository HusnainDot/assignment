import React from "react";

const ViewUsers = ({
  id,
  image,
  name,
  prof,
  setShowView,
  showView,
  setCheck,

  onRemove
}) => {
  const handelUsers = () => {
    setShowView(!showView);
    setCheck(id);
  };

  return (
    <>
      <div className={`w-full bg-gray-100 p-4 rounded-md border-l-4 `}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={image}
              alt=""
              className="w-[60px] h-[60px] rounded-full object-cover"
            />

            <div>
              <h3 className="font-semibold capitalize ">{name}</h3>
              <h5 className="font-semibold capitalize text-gray-600 ">
                {prof}
              </h5>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handelUsers}
              className="bg-teal-950 px-3 py-2 rounded-lg text-white active:scale-95 font-semibold cursor-pointer"
            >
              View
            </button>
            <button
            onClick={()=>onRemove(id)}
              className="bg-teal-950 px-3 py-2 rounded-lg text-white active:scale-95 font-semibold cursor-pointer"
            >
              Delete{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewUsers;
