import React from "react";

const UsersDetails = ({
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
}) => {
  return (
    <>
      <div className="bg-gray-300 rounded-md p-5">
        <h3 className="text-teal-950 capitalize my-3">Name :{name}</h3>
        <h3 className="text-teal-950 capitalize my-3">
          {" "}
          Last Name: {LastName}
        </h3>
        <h3 className="text-teal-950 capitalize my-3"> Email:{Email}</h3>
        <h3 className="text-teal-950 capitalize my-3">
          Phone Number: {CellNumber}
        </h3>
        <h3 className="text-teal-950 capitalize my-3">Country:{Country}</h3>
        <h3 className="text-teal-950 capitalize my-3">State:{State}</h3>
        <h3 className="text-teal-950 capitalize my-3">City:{City}</h3>
        <h3 className="text-teal-950 capitalize my-3">ZipCode:{ZipCode}</h3>
        <h3 className="text-teal-950 capitalize my-3"> Address : {Address}</h3>
        <h3 className="text-teal-950 capitalize my-3">Password: {password}</h3>
        <h3 className="text-teal-950 capitalize my-3">Confirm Password : {ConfirmPassword}</h3>
      </div>
    </>
  );
};

export default UsersDetails;
