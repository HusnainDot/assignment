import React, { useState } from "react";
import { useEffect } from "react";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineContentCopy } from "react-icons/md";

const PasswordGenraterContainer = () => {
  const [Password, setPassword] = useState("");
  const [checkLength, setCheckLength] = useState(8);
  const [allowedChar, setAllowedChar] = useState(false);
  const [allowdNumber, setAllowedNumber] = useState(false);

  useEffect(() => {
    let pass = " ";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let Number = "0123456789";
    let specialChar = "!@#$%^&*()_+-=[]{}|;:',.<>/?";
    if (allowdNumber) {
      string += Number;
    }
    if (allowedChar) {
      string += specialChar;
    }

    for (let i = 1; i <= checkLength; i++) {
      let char = Math.floor(Math.random() * string.length + 1);

      pass += string.charAt(char);
    }
    setPassword(pass);
    console.log(checkLength);
    
  }, [allowdNumber, allowedChar, checkLength]);

  return (
    <>
      <div className="w-full h-screen  bg-cyan-950/80 ">
        <h2 className="text-center py-2 text-white capitalize  text-2xl">
          Password Genrator
        </h2>

        <div className=" w-[30%] mx-auto py-10 my-10  rounded-md bg-gray-800 ">
          <form className="w-full p-5 text-xl">
            <div
              className={`flex items-center capitalize  rounded-xl  border-2 my-2 border-gray-500 overflow-hidden pl-5`}
            >
              <input
                value={Password}
                type="text"
                readOnly
                
                placeholder="Password Genrater"
                className="text-white w-full outline-0 bg-transparent "
              />
              <button
                type="button"
                className={` bg-blue-500 text-white  cursor-pointer active:scale-95 rounded-l-2xl py-3 px-5`}
              >
                <MdOutlineContentCopy size={30} />
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-6 ">
              <div className="flex flex-col text-white w-full sm:w-auto">
                <label className="mb-1 font-semibold text-sm">
                  Length: {checkLength}
                </label>
                <input
                  type="range"
                  min={8}
                  max={20}
                  value={checkLength}
                  onChange={(e) => setCheckLength(e.target.value)}
                  className="accent-blue-500 w-full sm:w-48 cursor-pointer rounded-md"
                />
              </div>

              <div className="flex items-center gap-2 text-white">
                <input
                  type="checkbox"
                  id="numbers"
                  onChange={() => setAllowedNumber((prev) => !prev)}
                  className="accent-blue-500 w-4 h-4 cursor-pointer rounded-md"
                />
                <label htmlFor="numbers" className="text-sm font-medium">
                  Numbers
                </label>
              </div>

              <div className="flex items-center gap-2 text-white">
                <input
                  type="checkbox"
                  id="characters"
                  onChange={() => setAllowedChar((prev) => !prev)}
                  className="accent-blue-500 w-4 h-4 cursor-pointer rounded-md"
                />
                <label htmlFor="characters" className="text-sm font-medium">
                  Characters
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PasswordGenraterContainer;
