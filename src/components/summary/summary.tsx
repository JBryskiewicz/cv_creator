import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import ExpEduSharedComponent from "./ExpEduSharedComponent";

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
				{information.education.length ? (
					<ExpEduSharedComponent dataCollection={information.education} />
				) : (
					<div className="summary-card" />
				)}
			</div>
			<div>
				<h3>Working Experience</h3>
				{information.education.length ? (
					<ExpEduSharedComponent dataCollection={information.experience} />
				) : (
					<div className="summary-card" />
				)}
			</div>
		</div>
	);
}

export default Summary;
