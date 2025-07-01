import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { GoCopy } from "react-icons/go";
import { LoremData } from "./LoremData";

const LoremContainer = () => {
  const [getNumber, setGetNumber] = useState();
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const GenrateLorem = () => {
    let newData = LoremData.slice(0, getNumber);

    if (getNumber > LoremData.length || getNumber < 1) {
      setError(true);
      setData([]);
    } else {
      setData(newData);
    }
  };

  useEffect(() => {


    if (getNumber >= LoremData.length) {
      setError(true);
    } 

    setTimeout(() => {
      setError(false);

    }, 3000);
  }, [setGetNumber, getNumber]);

  return (
    <>
      <div className="w-full p-10 bg-cyan-950/80">
        <h2 className="text-center py-2 text-white capitalize  text-2xl">
          Assignment Lorem Genrater
        </h2>

        <div className=" w-auto  md:max-w-[600px] mx-auto  rounded-md bg-gray-950">
          <form className="w-full p-5 text-xl">
            <div
              className={`flex items-center capitalize  rounded-xl border-gray-500 border-2 my-2  overflow-hidden`}
            >
              <input
                value={getNumber}
                onChange={(e) => setGetNumber(e.target.value)}
                type="number"
                placeholder="Enter Your number"
                className="text-white w-full outline-0 bg-transparent py-3 pl-3"
              />
            </div>
            {error && (
              <p className="text-red-500 text-md pb-1.5  capitalize">
                {" "}
                 Please Enter Value under 0 To 20
              </p>
            )}
            <button
              onClick={GenrateLorem}
              type="button"
              className=" bg-cyan-700 py-2 mx-auto block rounded-2xl  w-[150px] text-white cursor-pointer"
            >
              Genrate
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1  md:grid-cols-4 gap-10 mt-10">
          {data.map((item, index) => (
            <div
              key={index}
              className="text-center p-5 bg-teal-900 rounded-2xl"
            >
              <h2 className="text-white bold">Lorem {index + 1}</h2>
              <h4 className="text-center text-white text-sm">{item}</h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LoremContainer;
