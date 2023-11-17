import { FormElement, FormElementProps } from "./FormElement";
import { FormElementSubmitData, FormElementSubmitHandler } from "../../types/types";
import { useState } from "react";
import { Button, Card, Typography } from "@mui/material";

type FormProps = {
	formElements: FormElementProps[];
	nextButtonHandler?: () => void;
	previousButtonHandler?: () => void;
	saveButtonHandler?: FormElementSubmitHandler;
	formHeader: string;
};

export function Form({
	formElements,
	nextButtonHandler,
	previousButtonHandler,
	saveButtonHandler,
	formHeader,
}: FormProps) {
	const [formDictionairy, setFormDictionairy] = useState<FormElementSubmitData>({});

	// Wraps onChange of given prop to add to dictionairy in form of
	// [labelKey]: labelValue
	const wrapOnChange = (props: FormElementProps): FormElementProps => {
		return {
			...props,
			onChangeHandler: (event) => {
				setFormDictionairy({ ...formDictionairy, [`${props.labelId}`]: event.target.value });
				props.onChangeHandler(event);
			},
		};
	};

	return (
		<Card className="section input-forms">
			<Card className="input-forms-information">
				<div className="input-sheet">
					<Typography variant="h5">{formHeader}</Typography>
					{formElements.map((params) => (
						<FormElement {...(saveButtonHandler ? wrapOnChange(params) : params)} key={params.labelId} />
					))}
					<div className="button-box">
						{saveButtonHandler && (
							<Button variant="contained" onClick={() => saveButtonHandler(formDictionairy)}>
								Save
							</Button>
						)}
						{previousButtonHandler && (
							<Button variant="contained" onClick={previousButtonHandler}>
								Back
							</Button>
						)}
						{nextButtonHandler && (
							<Button variant="contained" onClick={nextButtonHandler}>
								Next
							</Button>
						)}
					</div>
				</div>
			</Card>
		</Card>
	);
}
