import React, { useEffect, useState } from "react";
import Lawyer from "./Lawyer";

const Lawyers = () => {
    const [lawyers, setLawyers] = useState([]);
    useEffect(() => {
        fetch('/public/lawyers.json')
        .then(res=> res.json())
        .then(res=>setLawyers(res))
    },[])
  return (
    <div className="my-25 space-y-5">
      <div className="text-center space-y-5 w-[70%] mx-auto">
        <h3 className="font-black text-3xl">Our Best Lawyers</h3>
        <p>
          Our platform connects you with verified, experienced Lawyers across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </div>
      <div className="grid xl:grid-cols-2 2xl:gap-22 sm:gap-12 gap-7">
        {
            lawyers.map(lawyer => <Lawyer lawyer={lawyer}/> )
        }

      </div>
    </div>
  );
};

export default Lawyers;
