import React from "react";

const UnderDevelopment = () => {
  return (
    <>
      <div className="flex justify-center h-[calc(100vh-8rem)] items-center">
        <div className=" h-fit text-center p-6 border-1 border-black rounded-2xl shadow-xl ">
          <h1 className="text-6xl font-bold">🚧 Under Development 🚧</h1>
          <p className="mt-4 text-lg text-blue-500 font-semibold">
            We're working hard to bring you something amazing. Stay tuned!
          </p>
        </div>
      </div>
    </>
  );
};

export default UnderDevelopment;
