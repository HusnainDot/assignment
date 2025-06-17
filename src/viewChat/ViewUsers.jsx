import React from "react";

const ViewUsers = ({ id, image, name, prof }) => {
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
          <button className="bg-teal-950 px-3 py-2 rounded-lg text-white active:scale-95 font-semibold cursor-pointer">
            View
          </button>
        </div>
      </div>
    </>
  );
};

export default ViewUsers;
