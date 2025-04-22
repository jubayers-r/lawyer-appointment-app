import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";

const LawError = () => {
  const navigate = useNavigate();
  const id = useParams().license_number;
  useEffect(() => {
    document.title = "Lawyer Not Found";
  }, []);

  return (
    <div className="text-center space-y-5 ">
      <h3 className="font-black text-3xl">Lawyer Not Found!</h3>
      <p>No Lawyer Found with license no.</p>
      <p>&#174; {id}</p>
      <div className="flex justify-center">
        <button
          onClick={() => navigate("/")}
          className="btn rounded-full p-10 text-xl font-bold hover:bg-[#0EA106] hover:text-white"
        >
          Go Back to Homepage
        </button>
      </div>
    </div>
  );
};

export default LawError;
