import React, { useEffect, useState } from "react";
import Lawyer from "./Lawyer";

const Lawyers = () => {
  const [showMore, setShowMore] = useState(false);
  const [lawyers, setLawyers] = useState([]);
  useEffect(() => {
    fetch("/lawyers.json")
      .then((res) => res.json())
      .then((res) => setLawyers(res));
  }, []);

  return (
    <div className="my-25 space-y-7">
      <div className="text-center space-y-5 w-[90%] mx-auto">
        <h3 className="font-black sm:text-3xl text-2xl">List of Our Best Lawyers</h3>
        <p className="hidden sm:block">
          Our platform connects you with verified, experienced Lawyers across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </div>
      <div className="grid xl:grid-cols-2 sm:gap-12 gap-7">
        {showMore
          ? lawyers.map((lawyer) => (
              <Lawyer key={lawyer.license_number} lawyer={lawyer} />
            ))
          : lawyers
              .slice(0, 6)
              .map((lawyer) => (
                <Lawyer key={lawyer.license_number} lawyer={lawyer} />
              ))}
      </div>
      <div className="w-full flex justify-center pt-7">
        <button
          onClick={() => setShowMore(!showMore)}
          className="btn btn-lg rounded-full bg-[#0EA106] text-white"
        >
          {showMore ? "Show Less" : "Show All Lawyers"}
        </button>
      </div>
    </div>
  );
};

export default Lawyers;
