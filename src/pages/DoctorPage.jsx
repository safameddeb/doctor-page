import DoctorCard from "../components/DoctorCard";
import doctorData from "../data/doctorData";

const DoctorPage = () => {
  return <DoctorCard doctor={doctorData} />;
};

export default DoctorPage;