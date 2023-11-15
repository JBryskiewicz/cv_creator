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
			<label htmlFor={labelId}>{labelText}</label>
			{type === "text" ? (
				<input
					type="text"
					name={labelId}
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
