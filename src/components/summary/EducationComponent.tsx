import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import EduCard from "./EducationCard";

function EduSummary() {
  const { education } = useSelector((state: RootState) => state.information);
  return (
    <>
      {education.map((element) => (
        <EduCard key={element.name} education={element} />
      ))}
    </>
  );
}

export default EduSummary;
