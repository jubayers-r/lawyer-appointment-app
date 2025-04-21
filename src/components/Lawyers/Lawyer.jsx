import React from "react";

const Lawyer = ({lawyer}) => {
    const {image, name, speciality, years_of_experience, license_number} = lawyer;
  return (
    <div >
      <div className="flex  justify-center rounded-2xl border border-gray-300">
        <div className="flex flex-col lg:flex-row space-x-20 p-6">
          <div className="lg:w-[35%] lg:h-[250px] mb-5 lg:mb-0 w-full flex justify-center">
            <img
              src={image}
              className="w-full object-cover rounded-lg shadow-2xl"
            />
          </div>
          <div className="space-y-5">
            <div className="flex gap-5 ">
                <p className="p-2 text-[#09982F] bg-[#09982F1A] rounded-full text-sm font-semibold text-center flex items-center">Available</p>
                <p className="p-2 text-[#176AE5] bg-[#176AE51A] rounded-full text-sm font-semibold text-center flex items-center">{years_of_experience}+ Years of Experience</p>
            </div>
            <div className="space-y-1">
            <h3 className="font-black text-2xl">{name}</h3>
            <p className="text-[#0F0F0F99]">{speciality}</p>
            <p className="text-[#0F0F0FB3]">&#174; License No: {license_number}</p>
            </div>
            <button className="btn rounded-full p-5.5 w-full text-[#176AE5] border-[#176AE533] text-xl font-bold">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lawyer;
