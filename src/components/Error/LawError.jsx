import { useEffect } from "react";
import { useParams } from "react-router";

const LawError = () => {
  const id = useParams().license_number;
  useEffect(() => {
    document.title = "Lawyer Not Found";
  }, []);

  return (
    <div className="text-center space-y-5 ">
      <h3 className="font-black text-3xl">Lawyer Not Found!</h3>
      <p>No Lawyer Found with license no.</p>
      <p>&#174; {id}</p>
    </div>
  );
};

export default LawError;
