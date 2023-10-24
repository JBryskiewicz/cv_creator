import { Education } from "../../types/types";

type Props = {
  education: Education;
};

function EduCard({ education }: Props) {
  return (
    <div className="summary-card">
      <div className="summary-field">
        <p>Institution:</p>
        <span>{education.name}</span>
        <p>Attending: </p>
        <span>{education.period}</span>
        <p>Description:</p>
        <span>{education.description}</span>
      </div>
    </div>
  );
}

export default EduCard;
