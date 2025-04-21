import React, { useEffect, useState } from "react";
import Recharts from "./Recharts";
import { toast } from "react-toastify";
import { getLawyers } from "../../utils/localestorage";
import { useLoaderData } from "react-router";
import AppoinCard from "./AppoinCard";


const Bookings = () => {
    const lawyers = useLoaderData();
    const [storedLawyers, setStoredLawyers] = useState([]);
    const storedLawyersIDs = getLawyers();
  useEffect(() => {
    const storedLawyersData = lawyers.filter((lawyer) =>
      storedLawyersIDs.includes(lawyer.license_number)
    );
    setStoredLawyers(storedLawyersData);
  }, [lawyers, storedLawyersIDs]);

  return (
    <div className="mt-6 mb-50 w-9/11 mx-auto">
      <div className="rounded-xl border border-gray-300 p-6 mb-20">
        <Recharts />
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
          {storedLawyers.map((lawyer) => (
            <AppoinCard lawyer={lawyer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookings;
