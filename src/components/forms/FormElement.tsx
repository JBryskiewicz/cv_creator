import { TextField, Typography } from "@mui/material";
import { ChangeEvent, EventHandler } from "react";
import { dateValidator, emailValidator, phoneNumberValidator } from "../../utils/validators";

export type FormElementProps = {
	labelText: string;
	value: string;
	labelId: string;
	placeholder?: string;
	type?: "text" | "textarea";
	onChangeHandler: EventHandler<ChangeEvent<{ value: string }>>;
};

const failedValidationLabel = {
	color: "red",
	paddingLeft: ".5rem",
};

export function FormElement({
	labelText,
	labelId,
	value,
	placeholder = "",
	type = "text",
	onChangeHandler,
}: FormElementProps): JSX.Element {
	return (
		<div>
			{type === "text" ? (
				<TextField
					type="text"
					label={labelText}
					variant="outlined"
					value={value}
					id={labelId}
					placeholder={placeholder}
					onChange={onChangeHandler}
				/>
			) : (
				<textarea name={labelId} value={value} id={labelId} placeholder={placeholder} onChange={onChangeHandler} />
			)}
			{labelId === "phoneNumber" && !phoneNumberValidator(value) && value !== "" ? (
				<Typography variant="body2" sx={failedValidationLabel}>
					Incorrect phone number
				</Typography>
			) : null}
			{labelId === "email" && !emailValidator(value) && value !== "" ? (
				<Typography variant="body2" sx={failedValidationLabel}>
					Incorrect email address
				</Typography>
			) : null}
			{labelId === "date" && !dateValidator(value) && value !== "" ? (
				<Typography variant="body2" sx={failedValidationLabel}>
					Incorrect input, fill this field according to the placeholder
				</Typography>
			) : null}
		</div>
	);
}
