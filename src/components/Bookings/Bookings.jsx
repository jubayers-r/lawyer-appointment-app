import React, { useEffect, useState } from "react";
import Recharts from "./Recharts";
import { getLawyers } from "../../utils/localestorage";
import { useLoaderData, useNavigate } from "react-router";
import AppoinCard from "./AppoinCard";

const Bookings = () => {
  const lawyers = useLoaderData();
  const navigate = useNavigate();
  const [storedLawyers, setStoredLawyers] = useState([]);
  useEffect(() => {
    doSomething();
  }, []);
  const doSomething = () => {
    const storedLawyersIDs = getLawyers();
    const storedLawyersData = lawyers.filter((lawyer) =>
      storedLawyersIDs.includes(lawyer.license_number)
    );
    setStoredLawyers(storedLawyersData);
  };
  return (
    <div className="mt-6 mb-35 w-9/11 mx-auto">
      <div className="rounded-xl border border-gray-300 p-6 mb-20">
        <Recharts storedLawyers={storedLawyers} />
      </div>
      <div>
        <div className="text-center space-y-5 my-15">
          <h3 className="font-black text-4xl ">My Appointments Today</h3>
          <p>
            Our platform connects you with verified, experienced Lawyers across
            various specialties — all at your convenience.
          </p>
        </div>
        <div className="space-y-15">
          {!storedLawyers.length == 0 ? (
            storedLawyers.map((lawyer) => (
              <AppoinCard
                key={lawyer.license_number}
                lawyer={lawyer}
                doSomething={doSomething}
              />
            ))
          ) : (
            <p className="text-2xl text-center">
              No Appointments Scheduled for Today
            </p>
          )}
          {}
        </div>
        {
          storedLawyers.length == 0 ? <div className="flex justify-center mt-10">
          <button
            onClick={() => navigate("/")}
            className="btn rounded-full p-10 text-xl font-bold hover:bg-[#0EA106] hover:text-white"
          >
            Go Back to Homepage
          </button>
          </div> : null
        }

      </div>
    </div>
  );
};

export default Bookings;
