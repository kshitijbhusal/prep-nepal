import React, { useState } from "react";

const ShowPaper = ({ paper }) => {
  const { english, subject2, subject3, subject4, subject5 } = paper;
  // const imgSrc = `data:image/png;base64,${english}`;
  const engpdf = `data:application/pdf;base64,${english}`;
  const sub2pdf = `data:application/pdf;base64,${subject2}`;
  const sub3pdf = `data:application/pdf;base64,${subject3}`;
  const sub4pdf = `data:application/pdf;base64,${subject4}`;
  const sub5pdf = `data:application/pdf;base64,${subject5}`;

  const programMapping = {
    bbs1: "BBS First Year",
    bbs2: "BBS Second Year",
    bbs3: "BBS Third Year",
    bbs4: "BBS Fourth Year",
  };

  return (
    <div className="p-16">
      {paper ? (
        <div className=" mx-auto mt-8 px-6 py-6 rounded-md shadow-sm  mb-10 shadow-blue-600 ">
          <div className="mb-36">
            <p className="text-lg font-semibold mb-1 ">
              <span className="font-bold">Programme:</span>{" "}
              {programMapping[paper.program]}{" "}
            </p>
            <p className="text-lg font-semibold mb-1 ">
              <span className="font-bold">Exam Year:</span> {paper.year}{" "}
            </p>

            <div className="grid grid-cols-1 gap-20 ">
              {/* ----------------English PDF ---------------------- */}
              <div className="font-bold flex flex-col items-center">
                <p className="text-xl mb-4">English</p>
                <embed
                  className=""
                  src={engpdf}
                  width="800"
                  height="500"
                ></embed>
              </div>

              {/* ----------------Subject2 PDF ---------------------- */}
              <div className="font-bold flex flex-col items-center">
                <p className="text-xl mb-4">Subject-2</p>
                <embed
                  className=""
                  src={sub2pdf}
                  width="800"
                  height="500"
                ></embed>
              </div>

              {/* ----------------Subject3 PDF ---------------------- */}
              <div className="font-bold flex flex-col items-center">
                <p className="text-xl mb-4">Subject-3</p>
                <embed
                  className=""
                  src={sub3pdf}
                  width="800"
                  height="500"
                ></embed>
              </div>

              {/* ----------------Subject4 PDF ---------------------- */}
              <div className="font-bold flex flex-col items-center">
                <p className="text-xl mb-4">Subject-4</p>
                <embed
                  className=""
                  src={sub4pdf}
                  width="800"
                  height="500"
                ></embed>
              </div>

              {/* ----------------Subject5 PDF ---------------------- */}
              <div className="font-bold flex flex-col items-center">
                <p className="text-xl mb-4">Subject-5</p>
                <embed
                  className=""
                  src={sub5pdf}
                  width="800"
                  height="500"
                ></embed>
              </div>
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
