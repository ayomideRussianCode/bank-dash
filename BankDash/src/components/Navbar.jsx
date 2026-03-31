import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between m-7 bg-[#ffffff] ">
          <div className="flex">
            <h2 className="text-blue-950 text-2xl font-semibold">Overview</h2>
          <div className=" flex  ">
            <div className="relative">
              <input  placeholder="Search for something" className="rounded-4xl outline-0  py-2 px-14 text-[#8ba3cb] bg-[#f5f7fa]" type="text" />
              <img className="absolute top-3 left-4 " src="/search-icon.png" alt="Search" />
            </div>
            <div className="mx-6">
              <img src="/settings-icon-2.png" alt="" />
            </div>
            <div>
              <img src="/settings-icon-2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
