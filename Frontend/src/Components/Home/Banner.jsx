// import { useState } from "react";

const Banner = () => {
  const hostels = ["boy's hostel", "girl's hostel"];
  //   const [hostel, setHostel] = useState("boy's hostel");
  const Blocks = ["A", "B", "C"];
  //   const [Block, setBlock] = useState("A");
  const Problems = ["Electricity", "Water", "Internet", "Other"];
  //   const [Problem, setProblem] = useState("Electricity");

  return (
    <div className=" px-4 lg:px-24 bg-[#CCDDFF] flex items-center">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        {/* Left Side */}
        <div className=" space-y-8 md:w-1/2 h-full">
          <h2 className=" text-8xl font-bold leading-snug text-black ">
            Report Your <span className="text-[#5863C4]">Problem</span>
          </h2>

          <p className=" md:w-4/5 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            minus quidem reiciendis eaque enim labore ipsa corporis iusto optio,
            pariatur saepe cumque natus consectetur, illum, quo excepturi in
            est! Modi!
          </p>

          {/* !======================================================================================================== */}
          {/* ==================================================================================================== */}
        </div>
        <div>
          <div className="container px-12  mt-7 mx-auto ">
            <form className="max-w-lg">
              {/* Hostel */}
              <div className="mb-4">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-state"
                >
                  Hostel
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                  >
                    {hostels.map((hostel, index) => (
                      <option key={index}>{hostel}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Blocks */}
              <div className="mb-6">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-state"
                >
                  Blocks
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                  >
                    {Blocks.map((block, index) => (
                      <option key={index}>{block}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Room No. */}
              <div className="mb-6">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-city"
                >
                  Room No.
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="number"
                  placeholder="Room Number"
                ></input>
              </div>

              {/* Problem */}
              <div className="mb-6">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-state"
                >
                  Problem
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                  >
                    {Problems.map((problem, index) => (
                      <option key={index}>{problem}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Button */}
              <div className="mb-6">
                <button
                  className="bg-[#5863C4] hover:bg-[#6E7BFF] text-white font-bold py-2 px-4 rounded"
                  type="button"
                >
                  Report
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Side */}
      </div>
    </div>
  );
};

export default Banner;
