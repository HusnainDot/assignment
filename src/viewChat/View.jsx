import React from "react";
import { IoMdClose } from "react-icons/io";
import { ViewChats } from "./ViewData";

const View = ({ setShowView, showView, check }) => {
  return (
    <>
      <div className=" h-screen w-screen bg-black/65 fixed top-0 flex items-center justify-center">
        <div className=" w-[98%] xl:w-[30%] h-auto bg-[#24222e] rounded-2xl p-10 flex flex-col items-center gap-5 relative">
          <IoMdClose
            onClick={() => setShowView(!showView)}
            className="absolute right-5 top-5 text-white cursor-pointer active:scale-95 "
            size={30}
          />

          <img
            src={ViewChats[check - 1].image}
            alt=""
            className="w-[120px] h-[120px] rounded-full"
          />
          <h3 className="font-semibold capitalize text-white text-2xl">
            {ViewChats[check - 1].name}
          </h3>
          <h5 className="font-semibold capitalize text-gray-100 ">
            {ViewChats[check - 1].prof}
          </h5>
          <h6 className="font-semibold capitalize text-gray-100">
            {ViewChats[check - 1].dob}
          </h6>
          <h6 className="font-semibold capitalize text-gray-100">
            {ViewChats[check - 1].address}
          </h6>
          <p className="font-semibold capitalize text-gray-100">
            {ViewChats[check - 1].description}
          </p>
        </div>
      </div>
    </>
  );
};

export default View;
