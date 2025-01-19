import React, { useState } from "react";

const ShowPaper = ({ paper }) => {
  console.log(paper);

  // const paper = {
  //   program: "BBS Firt Year",
  //   year: "2078",
  //   english: "english paper link",
  // };
  return (
    <div className="p-16">
      {paper ? (
        <div className=" h-32 w-96 bg-yellow-400 mx-auto mt-8 px-6 py-6 rounded-md shadow-sm  mb-10 shadow-blue-600 ">
          {/* <h1 className="text-center text-2xl text-blue-400 font-medium mb-8">
          {programMapping[paper.program] || "Please select your program "}
        </h1> */}
          <p className="text-lg font-semibold mb-1 ">
            <span className="font-bold">Program:</span> {paper.program}{" "}
          </p>
          <p className="text-lg font-semibold mb-1 ">
            <span className="font-bold">Exam Year:</span> {paper.year}{" "}
          </p>

          <p className="text-lg font-semibold ">
            <span className="font-bold">English: </span>
          </p>
        </div>
      ) : (
        <p className="text-center text-white text-lg font-semibold">
          Please select your <b className="text-yellow-300">program</b> and{" "}
          <b className="text-yellow-300">exam year</b> to proceed.
        </p>
      )}
    </div>
  );
};

export default ShowPaper;
