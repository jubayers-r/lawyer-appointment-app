import React from "react";
import ServiceCard from "./ServiceCard";
import firstP from "../../assets/success-doctor.png";
import secP from "../../assets/success-review.png";
import thirdP from "../../assets/success-patients.png";
import forthP from "../../assets/success-staffs.png";
import CountUp from "react-countup";

const Services = () => {
  return (
    <div className="space-y-8 my-8">
      <div className="text-center space-y-5">
        <h3 className="font-black text-3xl">We Provide Best Law Services</h3>
        <p>
          Our platform connects you with verified, experienced Lawyers across
          various specialities — all at your convenience.
        </p>
      </div>
      <div className=" gap-4 w-full grid sm:grid-cols-2 lg:grid-cols-4">
        <ServiceCard
          pic={firstP}
          count={<CountUp duration={6} end={199} />}
          title={"Total Lawyer"}
        />
        <ServiceCard
          pic={secP}
          count={<CountUp duration={7} end={467} />}
          title={"Total Reviews"}
        />
        <ServiceCard
          pic={thirdP}
          count={<CountUp duration={8} end={1900} />}
          title={"Cases Initiated"}
        />
        <ServiceCard
          pic={forthP}
          count={<CountUp duration={9} end={300} />}
          title={"Total Stuffs"}
        />
      </div>
    </div>
  );
};

export default Services;
