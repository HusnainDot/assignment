import React from "react";

const View = () => {
  return (
    <>
      <div className=" h-screen w-screen bg-black/65 fixed top-0 flex items-center justify-center">
        <div className="w-[30%] h-[50%] bg-[#24222e] rounded-2xl p-10 flex flex-col items-center gap-5">
          <img src="" alt="" className="w-[120px] h-[120px] rounded-full" />
          <h3 className="font-semibold capitalize text-white text-2xl">name</h3>
          <h5 className="font-semibold capitalize text-gray-100 ">porf</h5>
          <p className="font-semibold capitalize text-gray-100">dec</p>
          <h6 className="font-semibold capitalize text-gray-100">add</h6>
        </div>
      </div>
    </>
  );
};

export default View;
