import { TextField } from "@mui/material";
import { ChangeEvent, EventHandler } from "react";

export type FormElementProps = {
	labelText: string;
	value: string;
	labelId: string;
	placeholder?: string;
	type?: "text" | "textarea";
	onChangeHandler: EventHandler<ChangeEvent<{ value: string }>>;
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
		</div>
	);
}
