import React, { useRef, useEffect } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { MdClose } from "react-icons/md";

const UseRefContainer = () => {
  const menuRef = useRef(null);
  const closeMenuRef = useRef(null);
  const menuSlider = useRef(null);

    useEffect(() => {
      

        const openBtn = menuRef.current;
        const closeBtn = closeMenuRef.current;
        const  menuSlider = closeMenuRef.current;
    const openMenu = () => {
      if (menuSlider) {
        menuSlider.classList.remove("scale-0");
        menuSlider.classList.add("scale-100");
      }
    };

    const closeMenu = () => {
      if (menuSlider.current) {
        menuSlider.current.classList.remove("scale-100");
        menuSlider.current.classList.add("scale-0");
      }
    };

 

    if (openBtn && closeBtn) {
      openBtn.addEventListener("click", openMenu);
      closeBtn.addEventListener("click", closeMenu);
    }

    return () => {
      if (openBtn && closeBtn) {
        openBtn.removeEventListener("click", openMenu);
        closeBtn.removeEventListener("click", closeMenu);
      }
    };
  }, []);

  return (
    <div className="w-full h-screen bg-teal-950 text-white relative">
      <h2 className="text-center py-2 text-white capitalize  text-2xl">
        Assignment Slider using Use Ref
      </h2>
      <div className="pt-10 px-10">
        <button
          ref={menuRef}
          className="bg-yellow-500 p-2 rounded cursor-pointer"
        >
          <CiMenuBurger size={45} />
        </button>
      </div>

      <div
        ref={menuSlider}
        className="absolute w-full transform scale-0 origin-left top-0 h-screen z-50 bg-black bg-opacity-40 transition-transform duration-300"
      >
        <div className="flex h-full relative">
          <div className="w-64 bg-gray-800 text-white p-6 space-y-6">
            <div className="text-2xl font-bold">MyApp</div>
            <nav className="flex flex-col space-y-4">
              <a
                href="#"
                className="hover:bg-gray-700 px-4 py-2 rounded transition"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="hover:bg-gray-700 px-4 py-2 rounded transition"
              >
                Profile
              </a>
              <a
                href="#"
                className="hover:bg-gray-700 px-4 py-2 rounded transition"
              >
                Settings
              </a>
              <a
                href="#"
                className="hover:bg-gray-700 px-4 py-2 rounded transition"
              >
                Logout
              </a>
            </nav>
          </div>

          <div className="flex-1 bg-gray-100 p-8">
            <h1 className="text-3xl font-bold mb-4 text-black">
              Welcome to the Dashboard
            </h1>
            <p className="text-gray-700">Your content goes here.</p>
          </div>

          <button
            ref={closeMenuRef}
            className="absolute top-10 right-10 text-black bg-transparent border-none"
          >
            <MdClose size={45} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseRefContainer;
