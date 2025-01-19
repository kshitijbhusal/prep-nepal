import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const UploadPaper = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // const { program } = data;

    // Create FormData object
    const formData = new FormData();
    formData.append("program", data.program); // Append program
    formData.append("year", data.year); // Append year
    formData.append("english", data.english[0]); // Append the file

    const res = await axios.post(
      "http://localhost:3000/paper/create",
      formData
    );
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Upload Paper</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        method="post"
        encType="multipart/form-data"
        className="space-y-4"
      >
        {/* Program Field */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="program">
            Program
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

        {/* Exam Year Field */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="year">
            Exam Year (B.S)
          </label>
          <input
            id="year"
            type="number"
            {...register("year", {
              required: "Exam Year is required",
              min: { value: 1900, message: "Year must be after 1900" },
              max: {
                value: 2081,
                message: `Year cannot exceed B.S 2081`,
              },
            })}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.year && (
            <p className="text-red-500 text-sm mt-1">{errors.year.message}</p>
          )}
        </div>

        {/* Business English Field */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="english">
            English
          </label>
          <input
            id="english"
            type="file"
            {...register("english", {
              required: "paper is required",
            })}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.paper && (
            <p className="text-red-500 text-sm mt-1">
              {errors.english.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded-lg px-3 py-2 hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UploadPaper;
