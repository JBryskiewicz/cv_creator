import { Button, Card, Typography } from "@mui/material";
import { Education, Experience } from "../../types/types";

type Props = {
	data: Experience | Education;
	editButtonHandler: () => void;
	deleteButtonHandler: (data: Education | Experience) => void;
};

const summarySpanStyle = {
	marginBottom: ".5rem",
};

function ExpEduSharedCard({ data, editButtonHandler, deleteButtonHandler }: Props) {
	const { name, period, description } = data;

	return (
		<Card className="summary-card">
			<div className="summary-field">
				<div style={{ alignSelf: "flex-end" }}>
					<Button variant="contained" style={{ marginRight: "1rem" }} onClick={editButtonHandler}>
						Edit
					</Button>
					<Button variant="contained" onClick={() => deleteButtonHandler(data)}>
						Delete
					</Button>
				</div>
				<Typography variant="h6">Institution:</Typography>
				<Typography variant="body2" sx={summarySpanStyle}>
					{name}
				</Typography>
				<Typography variant="h6">Period: </Typography>
				<Typography variant="body2" sx={summarySpanStyle}>
					{period}
				</Typography>
				<Typography variant="h6">Description:</Typography>
				<Typography variant="body2">{description}</Typography>
			</div>
		</Card>
	);
}

export default ExpEduSharedCard;
