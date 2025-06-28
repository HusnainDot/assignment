import React, { use, useState } from "react";
import UsersDetails from "./UsersDetails";

const FromContainer = () => {
  const [newData, setNewData] = useState([]);

  const [formsInputs, setFromsInputs] = useState({
    name: "",
    LastName: "",
    Email: "",
    CellNumber: "",
    Country: "",
    State: "",
    City: "",
    ZipCode: "",
    Address: "",
    password: "",
    ConfirmPassword: "",
  });
  const {
    name,
    LastName,
    Email,
    CellNumber,
    Country,
    State,
    City,
    ZipCode,
    Address,
    password,
    ConfirmPassword,
  } = formsInputs;

  const handelChange = (e) => {
    setFromsInputs({
      ...formsInputs,
      [e.target.name]: e.target.value,
      id: Date.now(),
    });
  };

  const SubmitData = () => {
    setNewData([...newData, formsInputs]);



    setFromsInputs({
      name: "",
      LastName: "",
      Email: "",
      CellNumber: "",
      Country: "",
      State: "",
      City: "",
      ZipCode: "",
      Address: "",
      password: "",
      ConfirmPassword: "",
    });
  };

  return (
    <div className="">
      <div className="flex items-center justify-center bg-gray-500 w-full h-screen">
        {" "}
        <div className="bg-teal-950 rounded-2xl">
          <form className="space-y-4 p-4">
            <div className="flex items-center gap-5">
              <div className="w-full">
                <label className="block text-sm font-medium text-white">
                  Name
                </label>
                <input
                  value={name}
                  name="name"
                  type="text"
                  onChange={handelChange}
                  placeholder="Enter your name"
                  className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 border-gray-500 placeholder-white text-white"
                />
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium text-white">
                  Last Name
                </label>
                <input
                  value={LastName}
                  name="LastName"
                  type="text"
                  onChange={handelChange}
                  placeholder="Enter your Last Name"
                  className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 border-gray-500 placeholder-white text-white"
                />
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="w-full">
                <label className="block text-sm font-medium text-white">
                  Email
                </label>
                <input
                  value={Email}
                  name="Email"
                  type="email"
                  onChange={handelChange}
                  placeholder="Enter your email"
                  className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 border-gray-500 placeholder-white text-white"
                />
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium text-white">
                  Phone
                </label>
                <input
                  value={CellNumber}
                  name="CellNumber"
                  type="tel"
                  onChange={handelChange}
                  placeholder="Enter your phone number"
                  className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 border-gray-500 placeholder-white text-white"
                />
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="w-full">
                <label className="block text-sm font-medium text-white">
                  Country
                </label>
                <input
                  value={Country}
                  name="Country"
                  type="text"
                  onChange={handelChange}
                  placeholder="Enter your country"
                  className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 border-gray-500 placeholder-white text-white"
                />
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium text-white">
                  State
                </label>
                <input
                  value={State}
                  name="State"
                  type="text"
                  onChange={handelChange}
                  placeholder="Enter your state"
                  className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 border-gray-500 placeholder-white text-white"
                />
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div>
                <label className="block text-sm font-medium text-white">
                  City
                </label>
                <input
                  value={City}
                  name="City"
                  type="text"
                  onChange={handelChange}
                  placeholder="Enter your city"
                  className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 border-gray-500 placeholder-white text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  Zip Code
                </label>
                <input
                  value={ZipCode}
                  name="ZipCode"
                  type="text"
                  onChange={handelChange}
                  placeholder="Enter your zip code"
                  className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 border-gray-500 placeholder-white text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white">
                Address
              </label>
              <input
                value={Address}
                name="Address"
                type="text"
                onChange={handelChange}
                placeholder="Enter your address"
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 border-gray-500 placeholder-white text-white"
              />
            </div>

            <div className="flex items-center gap-5">
              <div className="w-full">
                <label className="block text-sm font-medium text-white">
                  Password
                </label>
                <input
                  value={password}
                  name="password"
                  type="password"
                  onChange={handelChange}
                  placeholder="Enter your password"
                  className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 border-gray-500 placeholder-white text-white"
                />
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium text-white">
                  Confirm Password
                </label>
                <input
                  value={ConfirmPassword}
                  name="ConfirmPassword"
                  type="password"
                  onChange={handelChange}
                  placeholder="Confirm your password"
                  className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 border-gray-500 placeholder-white text-white"
                />
              </div>
            </div>

            <button
              onClick={SubmitData}
              type="button"
              className="block w-[30%] mx-auto py-2 bg-teal-600 rounded-xl text-white font-semibold text-2xl cursor-pointer active:scale-95"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="w-full h-screen bg-teal-950  p-10 flex items-start gap-10 flex-wrap ">
        {newData.map((obj, i) => {
          return <UsersDetails {...obj} key={i} />;
        })}
      </div>
    </div>
  );
};

export default FromContainer;
