import { Card, Typography } from "@mui/material";
import { Education, Experience } from "../../types/types";

type Props = {
	data: Experience | Education;
};

const summarySpanStyle = {
	marginBottom: ".5rem",
};

function ExpEduSharedCard({ data }: Props) {
	return (
		<Card className="summary-card">
			<div className="summary-field">
				<Typography variant="h6">Institution:</Typography>
				<Typography variant="body2" sx={summarySpanStyle}>
					{data.name}
				</Typography>
				<Typography variant="h6">Period: </Typography>
				<Typography variant="body2" sx={summarySpanStyle}>
					{data.period}
				</Typography>
				<Typography variant="h6">Description:</Typography>
				<Typography variant="body2">{data.description}</Typography>
			</div>
		</Card>
	);
}

export default ExpEduSharedCard;
