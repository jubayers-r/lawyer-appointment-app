import React, { useEffect } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router";
import { nameOfTheDay } from "../Lawyers/Lawyer";
import { toast } from "react-toastify";
import { getLawyers, setLawyers } from "../../utils/localestorage";

const Details = () => {
  const navigate = useNavigate();
  const selected = useParams();
  const lawyers = useLoaderData();

  const selectedLawyer = lawyers.find(
    (lawyer) => lawyer.license_number == selected.license_number
  );
  const {
    image,
    name,
    speciality,
    years_of_experience,
    license_number,
    availability_days,
    consultation_fee,
    description,
  } = selectedLawyer;
  useEffect(() => {
    document.title = name;
  }, [name]);
  const availability = availability_days.find((day) => day == nameOfTheDay);

  const handleBooking = (name, id) => {
    const lawyerExist = getLawyers().find((lawyer) => lawyer == id);

    if (!lawyerExist) {
      toast.success(`Successfully scheduled appointment with ${name}`);
      setLawyers(id);
      navigate("/bookings");
    } else {
      toast.error(`Appointment with ${name} was already booked once`);
    }
  };
  return (
    <div className="space-y-5 w-9/11 mx-auto ">
      <div className="rounded-2xl bg-[#0F0F0F0D] space-y-3 text-center p-10 sm:p-20">
        <div className="mx-auto space-y-4">
          <h3 className="sm:text-2xl sm:font-black font-bold text-xl">
            Lawyer’s Profile Details
          </h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="flex rounded-2xl border border-gray-300">
        <div className="flex flex-col lg:flex-row space-x-10 p-6 w-full">
          <div className="lg:w-[30%] lg:h-[220px] mb-5 lg:mb-0 w-full flex justify-center">
            <img src={image} className="object-cover rounded-lg shadow-2xl" />
          </div>
          <div className="space-y-5 w-full flex flex-col items-center text-center lg:items-baseline lg:text-left">
            <div className="flex gap-5 ">
              <p className="p-2 text-[#176AE5] bg-[#176AE51A] rounded-full text-sm font-semibold text-center flex items-center">
                {years_of_experience}+ Years of Experience
              </p>
            </div>
            <div className="space-y-3 w-full">
              <h3 className="font-black text-2xl">{name}</h3>
              <div className="lg:flex gap-10 justify-center lg:justify-start">
                <p className="text-[#0F0F0F99]">{speciality}</p>
                <p className="text-[#0F0F0FB3]">
                  &#174; License No: {license_number}
                </p>
              </div>
              <div className="flex flex-col lg:flex-row gap-4 items-center">
                <p className="font-bold text-black/70">Availability</p>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                  {availability_days.map((day) => (
                    <p
                      key={license_number}
                      className="text-[#FFA000] bg-[#FFA0001A] rounded-full px-3 py-1 flex justify-center"
                    >
                      {day}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 justify-center lg:justify-start">
                <p className="font-bold text-black/70">Consultation Fee:</p>
                <p className="font-bold text-green-600">${consultation_fee}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex rounded-2xl border border-gray-300 ">
        <div className="mx-auto space-y-4 text-center w-[95%] m-8">
          <h3 className="sm:text-2xl sm:font-black font-bold text-xl">
            Book an Appointment
          </h3>
          <hr className="text-gray-300 border-dashed" />
          <div className="flex justify-between p-1">
            <p>Availability</p>
            <p
              className={`p-2 rounded-full text-sm font-semibold text-center flex items-center ${
                availability
                  ? "text-[#09982F] bg-[#09982F1A]"
                  : "text-[#980909] bg-[#9809091a]"
              }`}
            >
              {availability
                ? "Lawyer Available Today"
                : "Lawyer Not Available Today"}
            </p>
          </div>
          <hr className="text-gray-300 " />
          <div className="flex flex-col items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-[#FFA000] "
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z"></path>
            </svg>
            <p className="bg-[#FFA0001A] text-[#FFA000] rounded-full flex items-center gap-1 justify-center py-2 px-5">
              {availability
                ? "Due to high client volume, for today we are only accepting appointments. We appreciate your understanding and cooperation."
                : "Even if the lawyer is not available, the appointment will still be scheduled on one of the available days as per the lawyer’s availability."}
            </p>
          </div>
          <button
            onClick={() => handleBooking(name, license_number)}
            className="btn btn-ghost p-6 rounded-full bg-[#0EA106] text-white xl:text-lg w-full my-6"
          >
            Book Appointment Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
