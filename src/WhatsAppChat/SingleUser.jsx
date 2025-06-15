import React from "react";

const SingleUser = ({ name, image, prof, sms }) => {
    
console.log(sms);


  return (
    <>
          <div className={`w-full bg-gray-100 p-4 rounded-md border-l-4 ${sms >= 1 ? "border-green-500" : 'border-gray-500'} `}>
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
          <div className={`p-3 rounded-full ${sms >= 1 ? "bg-green-500" : "bg-gray-500"}`}> </div>
          </div>
      </div>
    </>
  );
};

export default SingleUser;
