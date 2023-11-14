import { ChangeEventHandler } from "react";

type FormElementProps = {
	labelText: string;
	value: string;
	labelId: string;
	placeholder?: string;
	onChangeHandler: ChangeEventHandler<HTMLInputElement>;
};

export function FormElement({
	labelText,
	labelId,
	value,
	placeholder = "",
	onChangeHandler,
}: FormElementProps): JSX.Element {
	return (
		<div>
			<label htmlFor={labelId}>{labelText}</label>
			<input type="text" value={value} id={labelId} placeholder={placeholder} onChange={onChangeHandler} />
		</div>
	);
}
