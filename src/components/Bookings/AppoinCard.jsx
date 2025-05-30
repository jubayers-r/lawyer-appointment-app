import { toast } from "react-toastify";
import { removeLawyers } from "../../utils/localestorage";

const AppoinCard = ({ lawyer, doSomething }) => {
  const handleCancel = (id) => {
    toast.warn("Appointment cancelled successfully");
    removeLawyers(id);
    doSomething();
  };
  const { name, speciality, license_number, consultation_fee } = lawyer;
  return (
    <div className="rounded-xl border border-gray-300 p-5 space-y-4">
      <p className="font-bold text-xl text-center sm:text-left">{name}</p>
      <div className="sm:flex justify-between text-center">
        <p>{speciality}</p>
        <p>Appointment fee: ${consultation_fee}</p>
      </div>
      <hr className="text-gray-300 border border-dashed" />
      <button
        onClick={() => handleCancel(license_number)}
        className="text-[#FF0000] hover:bg-[#ff0000a6] hover:text-white border-[#FF0000] btn rounded-full w-full bg-white btn-ghost text-lg font-semibold mb-5"
      >
        Cancel Appointment
      </button>
    </div>
  );
};

export default AppoinCard;
