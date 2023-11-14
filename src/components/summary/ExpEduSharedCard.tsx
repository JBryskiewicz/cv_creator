import { Education, Experience } from "../../types/types";

type Props = {
	data: Experience | Education;
};

function ExpEduSharedCard({ data }: Props) {
	return (
		<div className="summary-card">
			<div className="summary-field">
				<p>Institution:</p>
				<span>{data.name}</span>
				<p>Period: </p>
				<span>{data.period}</span>
				<p>Description:</p>
				<span>{data.description}</span>
			</div>
		</div>
	);
}

export default ExpEduSharedCard;
