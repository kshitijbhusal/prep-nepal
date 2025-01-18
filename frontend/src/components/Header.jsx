import React from "react";

const Header = () => {
  return (
    <>
      <div className="bg-blue-500 h-32 flex justify-around items-center ">
        <div>
          <h1 className="text-4xl font-medium ">prepNepal</h1>
        </div>
        <div>
          <ul className="flex gap-x-8">
            <li className="text-lg font-semibold">Support</li>
            <li className="text-lg font-semibold">Request Paper</li>
            <li className="text-lg font-semibold">About</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
