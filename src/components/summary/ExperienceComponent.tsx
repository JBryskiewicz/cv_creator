import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import ExpCard from "./ExperienceCard";

function ExpSummary() {
  const { experience } = useSelector((state: RootState) => state.information);

  return (
    <>
      {experience.map((element) => (
        <ExpCard key={element.name} experience={element} />
      ))}
    </>
  );
}

export default ExpSummary;
