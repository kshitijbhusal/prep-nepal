import React, { useState } from "react";

const ShowPaper = ({ paper }) => {
  const { english } = paper;
  // const imgSrc = `data:image/png;base64,${english}`;
  const pdf = `data:application/pdf;base64,${english}`;

  return (
    <div className="p-16">
      {paper ? (
        <div className=" mx-auto mt-8 px-6 py-6 rounded-md shadow-sm  mb-10 shadow-blue-600 ">
          <div className="mb-36">
            <p className="text-lg font-semibold mb-1 ">
              <span className="font-bold">Program:</span> {paper.program}{" "}
            </p>
            <p className="text-lg font-semibold mb-1 ">
              <span className="font-bold">Exam Year:</span> {paper.year}{" "}
            </p>

            <div className="font-bold flex flex-col items-center">
              <p className="text-xl">English</p>
              <embed className="" src={pdf} width="800" height="500"></embed>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-lg font-semibold">
          Please select your <b className="text-red-500">program</b> and{" "}
          <b className="text-red-500">exam year</b> to proceed.
        </p>
      )}
    </div>
  );
};

export default ShowPaper;
