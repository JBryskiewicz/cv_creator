import { TextField, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

type Props = {
	elementName: string;
	editableName: string;
	value: string;
	stateSetter: Dispatch<SetStateAction<string>>;
};

const summarySpanStyle = {
	marginBottom: ".5rem",
};

export const ExpEduSharedCardEditableField = ({ elementName, editableName, value, stateSetter }: Props) => {
	const editableComponent =
		elementName === editableName ? (
			<TextField type="text" variant="outlined" value={value} onChange={(event) => stateSetter(event.target.value)} />
		) : (
			<Typography variant="body2" sx={summarySpanStyle}>
				{value}
			</Typography>
		);

	return editableComponent;
};
