import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEducation } from "../../redux/informationSlice";
import { RootState } from "../../redux/store";
import { FormElementProps } from "./FormElement";
import { Form } from "./Form";
import { formHeaders } from "../../utils/library";

type EducationFormProps = {
	nextStep: () => void;
	previousStep: () => void;
};

export function EducationForm({ nextStep, previousStep }: EducationFormProps) {
	const [name, setName] = useState<string>("");
	const [date, setDate] = useState<string>("");
	const [desc, setDesc] = useState<string>("");
	const { stepTwo } = formHeaders;
	const { education } = useSelector((state: RootState) => state.information);
	const dispatch = useDispatch();

	const handleSaveButton = () => {
		dispatch(
			setEducation([
				...education,
				{
					name: name,
					period: date,
					description: desc,
				},
			])
		);
		setName("");
		setDate("");
		setDesc("");
	};

	const formElements: FormElementProps[] = [
		{
			labelText: "Enter institution's name:",
			labelId: "name",
			value: name,
			placeholder: "IT Academy in Warsaw",
			type: "text",
			onChangeHandler: (event) => setName(event.target.value),
		},
		{
			labelText: "Enter attending years:",
			labelId: "date",
			value: date,
			placeholder: "01.09.2019 - 01.06.2023",
			type: "text",
			onChangeHandler: (event) => setDate(event.target.value),
		},
		{
			labelText: "Enter description:",
			labelId: "desc",
			value: desc,
			placeholder: "General information about your school and education provided",
			type: "textarea",
			onChangeHandler: (event) => setDesc(event.target.value),
		},
	];

	return (
		<Form
			formElements={formElements}
			nextButtonHandler={nextStep}
			previousButtonHandler={previousStep}
			saveButtonHandler={handleSaveButton}
			formHeader={stepTwo}
		/>
	);
}
