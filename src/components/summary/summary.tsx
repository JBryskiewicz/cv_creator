import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import ExpEduSharedComponent from "./ExpEduSharedComponent";
import { Card, Typography } from "@mui/material";
import { formHeaders } from "../../utils/library";

function Summary() {
	const information = useSelector((state: RootState) => state.information);
	const { name, email, phoneNumber, education, experience } = information;
	const { stepOne, stepTwo, stepThree } = formHeaders;

	return (
		<Card className="section summary">
			<div style={{ margin: "1rem 0" }}>
				<Typography variant="h5" gutterBottom>
					{stepOne}
				</Typography>
				<Card sx={{ padding: "0 1rem" }}>
					<Typography variant="body2" gutterBottom sx={{ marginTop: ".375rem" }}>
						Name: {name}
					</Typography>
					<Typography variant="body2" gutterBottom>
						Email: {email}
					</Typography>
					<Typography variant="body2" gutterBottom>
						Phone: {phoneNumber}
					</Typography>
				</Card>
			</div>
			<div>
				<Typography variant="h5" gutterBottom>
					{stepTwo}
				</Typography>
				{education.length ? (
					<ExpEduSharedComponent dataCollection={information.education} />
				) : (
					<Card className="summary-card" />
				)}
			</div>
			<div>
				<Typography variant="h5" gutterBottom>
					{stepThree}
				</Typography>
				{experience.length ? (
					<ExpEduSharedComponent dataCollection={information.experience} />
				) : (
					<Card className="summary-card" />
				)}
			</div>
		</Card>
	);
}

export default Summary;
