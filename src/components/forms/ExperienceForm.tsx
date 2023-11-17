import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setExperience } from "../../redux/informationSlice";
import { FormElementProps } from "./FormElement";
import { Form } from "./Form";
import { formHeaders } from "../../utils/library";

type ExperienceFormProps = {
	previousStep: () => void;
};

export function ExperienceForm({ previousStep }: ExperienceFormProps) {
	const [name, setName] = useState<string>("");
	const [date, setDate] = useState<string>("");
	const [desc, setDesc] = useState<string>("");
	const { stepThree } = formHeaders;
	const { experience } = useSelector((state: RootState) => state.information);
	const dispatch = useDispatch();

	const handleSaveButton = () => {
		dispatch(
			setExperience([
				...experience,
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
			labelText: "Enter company's name:",
			labelId: "name",
			value: name,
			placeholder: "Google corp",
			type: "text",
			onChangeHandler: (event) => setName(event.target.value),
		},
		{
			labelText: "Enter years of employment:",
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
			placeholder: "General information about your previous job",
			type: "textarea",
			onChangeHandler: (event) => setDesc(event.target.value),
		},
	];

	return (
		<Form
			formElements={formElements}
			previousButtonHandler={previousStep}
			saveButtonHandler={handleSaveButton}
			formHeader={stepThree}
		/>
	);
}
