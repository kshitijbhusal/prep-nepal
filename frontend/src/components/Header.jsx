import React from "react";

import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-blue-500 h-32 flex justify-around items-center ">
        <div>
          <Link className="text-4xl font-medium " to="/">
            <i>
              <b>prepnepal</b>
            </i>
          </Link>
        </div>
        <div>
          <ul className="flex gap-x-8">
            <Link className="text-xl font-semibold" to="*">
              {" "}
              Request Paper
            </Link>
            <Link className="text-xl font-semibold" to="*">
              About
            </Link>
            <Link className="text-xl font-semibold" to="*">
              Support
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
