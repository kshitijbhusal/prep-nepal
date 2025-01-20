import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const SearchPaper = ({ setPaper }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await axios.get("http://localhost:3000/paper/get", {
      params: { program: data.program, year: data.year },
    });
    setPaper(res.data);
  };

  // ------------------ProgramMapping----------------------//
  const programMapping = {
    bbs1: "BBS First Year",
    bbs2: "BBS Second Year",
    bbs3: "BBS Third Year",
    bbs4: "BBS Fourth Year",
  };

  return (
    <div
      className="h-96 flex justify-around items-center  "
      // style={{
      //   backgroundImage: `url(${imgUrl})`,
      //   backgroundPosition: "center",
      // }}
    >
      <div className=" border p-6 w-96 mx-auto bg-white rounded-md shadow-xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Search Exam Papers
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Select Your Program
            </label>

            <select
              {...register("program")}
              id="program"
              className={`w-full px-4 py-2 border ${
                errors.program ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            >
              <option value="bbs1">BBS First Year</option>
              <option value="bbs2">BBS Second Year</option>
              <option value="bbs3">BBS Third Year</option>
              <option value="bbs4">BBS Fourth Year</option>
            </select>
            {errors.program && (
              <p className="text-red-500 text-sm mt-1">
                {errors.program.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Exam Year
            </label>
            <input
              type="text"
              {...register("year", { required: "Exam Year is required" })}
              className={`w-full px-4 py-2 border ${
                errors.examYear ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Enter exam year (e.g., 2023)"
            />
            {errors.year && (
              <p className="text-red-500 text-sm mt-1">{errors.year.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Search Paper
          </button>
        </form>
      </div>

      {/* <div className=" h-52 mx-auto mt-8 px-6 py-6 rounded-md shadow-sm shadow-blue-600 ">
        <h1 className="text-center text-2xl text-blue-400 font-medium mb-8">
          {programMapping[paper.program] || "Please select your program "}
        </h1>

        <p className="text-lg font-semibold mb-1 ">
          <span className="font-bold">Exam Year:</span>{" "}
          {paper.year || "Please select exam year."}{" "}
        </p>
        <p className="text-lg font-semibold ">
          <span className="font-bold">Exam Paper: </span>{" "}
          <a href={paper.paper} target="_blank">
            Click here to download
          </a>
        </p>
      </div> */}
    </div>
  );
};

export default SearchPaper;
