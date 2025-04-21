import React from "react";
import { Link } from "react-router";

const today = new Date();
const dayOfTheWeek = today.getDay();
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
export const nameOfTheDay = days[dayOfTheWeek];
const Lawyer = ({ lawyer }) => {
  const {
    image,
    name,
    speciality,
    years_of_experience,
    license_number,
    availability_days,
  } = lawyer;

  const availability = availability_days.find((day) => day == nameOfTheDay);
  return (
    <div className="flex rounded-2xl border border-gray-300">
      <div className="flex flex-col lg:flex-row space-x-10 p-6 w-full">
        <div className="lg:w-[55%] lg:h-[220px] mb-5 lg:mb-0 w-full flex justify-center">
          <img src={image} className="object-cover rounded-lg shadow-2xl" />
        </div>
        <div className="space-y-5 w-full flex flex-col items-center text-center lg:items-baseline lg:text-left">
          <div className="flex gap-5 ">
            <p
              className={`p-2 rounded-full text-sm font-semibold text-center flex items-center ${
                availability
                  ? "text-[#09982F] bg-[#09982F1A]"
                  : "text-[#980909] bg-[#9809091a]"
              }`}
            >
              {availability ? "Available" : "Not Available"}
            </p>
            <p className="p-2 text-[#176AE5] bg-[#176AE51A] rounded-full text-sm font-semibold text-center flex items-center">
              {years_of_experience}+ Years of Experience
            </p>
          </div>
          <div className="space-y-1 w-full">
            <h3 className="font-black text-2xl">{name}</h3>
            <p className="text-[#0F0F0F99]">{speciality}</p>
            <hr className="text-gray-500 border-dashed my-3" />
            <p className="text-[#0F0F0FB3]">
              &#174; License No: {license_number}
            </p>
          </div>
          <Link to={`/lawyer/${license_number}`}>
            <button className="btn rounded-full p-5.5 w-full text-[#176AE5] border-[#176AE533] text-xl font-bold">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Lawyer;
