import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setName, setEmail, setPhoneNumber } from "../../redux/informationSlice";
import { FormElementProps } from "./FormElement";
import { Form } from "./Form";
import { formHeaders } from "../../utils/library";

type InformationFormProps = {
	nextStep: () => void;
};

export function InformationForm({ nextStep }: InformationFormProps) {
	const { name, email, phoneNumber } = useSelector((state: RootState) => state.information);
	const dispatch = useDispatch();
	const { stepOne } = formHeaders;

	const formElements: FormElementProps[] = [
		{
			labelText: "Enter your full name:",
			labelId: "name",
			value: name,
			type: "text",
			onChangeHandler: (event) => dispatch(setName(event.target.value)),
		},
		{
			labelText: "Enter your email:",
			labelId: "email",
			value: email,
			type: "text",
			onChangeHandler: (event) => dispatch(setEmail(event.target.value)),
		},
		{
			labelText: "Enter your phone number: (123-456-789)",
			labelId: "phoneNumber",
			value: phoneNumber,
			type: "text",
			onChangeHandler: (event) => dispatch(setPhoneNumber(event.target.value)),
		},
	];

	return <Form formElements={formElements} nextButtonHandler={nextStep} formHeader={stepOne} />;
}
