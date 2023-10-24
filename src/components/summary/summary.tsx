import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import EduSummary from "./EducationComponent";

function Summary() {
  const information = useSelector((state: RootState) => state.information);

  return (
    <div className="section summary">
      <div>
        <h1>Personal Information</h1>
        <p>Name: {information.name}</p>
        <p>Email: {information.email}</p>
        <p>Phone: {information.phoneNumber}</p>
      </div>
      <div>
        <h2>Education</h2>
        <EduSummary />
      </div>
      <div>
        <h3>Working Experience</h3>
        <div>job description component</div>
      </div>
    </div>
  );
}

export default Summary;
