import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import user from "../services/user.service";

const initialUserData = {
  first_name: "",
  last_name: "",
  email: "",
};

export default function AddUser() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(initialUserData);

  /**
   * @desc add user data value
   * @param {Object} e
   * @param {String} label
   */
  const onHandleUserInput = (e, label) => {
    try {
      const { value } = e.target;
      if (label === "first_name") {
        setUserData({ ...userData, first_name: value });
      } else if (label === "last_name") {
        setUserData({ ...userData, last_name: value });
      } else {
        setUserData({ ...userData, email: value });
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  /**
   * @desc submit user data with api
   * @param {Object} e
   */
  const onHandleSubmit = async (e) => {
    try {
      e.preventDefault();
      let res = await user.createUser(userData);
      if (res instanceof Object) {
        setUserData(initialUserData);
        alert("User Added Successfully");
        navigate("/");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <section className="bg-blue-50 p-6 md:p-12">
      <div className="flex justify-evenly   ">
        <h1 className="text-2xl font-bold font-serif">Add User</h1>
      </div>
      <div className="flex justify-center py-12">
        <form onSubmit={onHandleSubmit}>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={(e) => onHandleUserInput(e, "first_name")}
                required={true}
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First name
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="floating_last_name"
                id="floating_last_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={(e) => onHandleUserInput(e, "last_name")}
                required={true}
              />
              <label
                htmlFor="floating_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last name
              </label>
            </div>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={(e) => onHandleUserInput(e, "email")}
              required={true}
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div className="mt-12">
            <button
              type="submit"
              to={"/add-user"}
              className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
            >
              <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute" />
              <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                <span className="relative text-white">Add User</span>
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
