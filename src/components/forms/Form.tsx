import { FormElement, FormElementProps } from "./FormElement";
import { FormElementSubmitData, FormElementSubmitHandler } from "../../types/types";
import { useState } from "react";

type FormProps = {
	formElements: FormElementProps[];
	nextButtonHandler?: () => void;
	previousButtonHandler?: () => void;
	saveButtonHandler?: FormElementSubmitHandler;
};

export function Form({ formElements, nextButtonHandler, previousButtonHandler, saveButtonHandler }: FormProps) {
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
		<div className="section input-forms">
			<div className="input-forms-information">
				<div className="input-sheet">
					{formElements.map((params) => (
						<FormElement {...(saveButtonHandler ? wrapOnChange(params) : params)} key={params.labelId} />
					))}
					<div className="button-box">
						{saveButtonHandler && <button onClick={() => saveButtonHandler(formDictionairy)}>Save</button>}
						{previousButtonHandler && <button onClick={previousButtonHandler}>Back</button>}
						{nextButtonHandler && <button onClick={nextButtonHandler}>Next</button>}
					</div>
				</div>
			</div>
		</div>
	);
}
