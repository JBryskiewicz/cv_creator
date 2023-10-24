import { Experience } from "../../types/types";

type Props = {
  experience: Experience;
};

function ExpCard({ experience }: Props) {
  return (
    <div className="summary-card">
      <div className="summary-field">
        <p>Institution:</p>
        <span>{experience.name}</span>
        <p>Employment: </p>
        <span>{experience.period}</span>
        <p>Description:</p>
        <span>{experience.description}</span>
      </div>
    </div>
  );
}

export default ExpCard;
