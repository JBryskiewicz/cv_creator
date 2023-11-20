import { Button, Card, Typography } from "@mui/material";
import { Education, Experience } from "../../types/types";
import { ExpEduSharedCardEditableField } from "./ExpEduSharedCardEditableField";
import { useState } from "react";
import { isEducation } from "../../types/typeGuards";

type Props = {
	data: Experience | Education;
	editableName: string;
	editButtonHandler: (name: string) => void;
	deleteButtonHandler: (data: Education | Experience) => void;
	saveButtonHandler: (name: string, editedData: Education | Experience) => void;
};

function ExpEduSharedCard({ data, editableName, editButtonHandler, deleteButtonHandler, saveButtonHandler }: Props) {
	const { name, period, description } = data;
	const [editedName, setEditedName] = useState<string>(name);
	const [editedPeriod, setEditedPeriod] = useState<string>(period);
	const [editedDesc, setEditedDesc] = useState<string>(description);

	const editedData: Education | Experience = {
		name: editedName,
		period: editedPeriod,
		description: editedDesc,
		...(isEducation(data) && { type: "edu" }),
	};

	return (
		<Card className="summary-card">
			<div className="summary-field">
				<div style={{ alignSelf: "flex-end" }}>
					{editableName === name ? (
						<Button
							variant="contained"
							style={{ marginRight: "1rem" }}
							onClick={() => saveButtonHandler(name, editedData)}
						>
							Save
						</Button>
					) : (
						<Button variant="contained" style={{ marginRight: "1rem" }} onClick={() => editButtonHandler(name)}>
							Edit
						</Button>
					)}
					<Button variant="contained" onClick={() => deleteButtonHandler(data)}>
						Delete
					</Button>
				</div>
				<Typography variant="h6">Institution:</Typography>
				<ExpEduSharedCardEditableField
					elementName={name}
					editableName={editableName}
					value={editedName}
					stateSetter={setEditedName}
				/>
				<Typography variant="h6">Period: </Typography>
				<ExpEduSharedCardEditableField
					elementName={name}
					editableName={editableName}
					value={editedPeriod}
					stateSetter={setEditedPeriod}
				/>
				<Typography variant="h6">Description:</Typography>
				<ExpEduSharedCardEditableField
					elementName={name}
					editableName={editableName}
					value={editedDesc}
					stateSetter={setEditedDesc}
				/>
			</div>
		</Card>
	);
}

export default ExpEduSharedCard;
