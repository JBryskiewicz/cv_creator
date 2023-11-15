import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setName, setEmail, setPhoneNumber } from "../../redux/informationSlice";
import { FormElement } from "./FormElement";

type InformationFormProps = {
	nextStep: () => void;
};

function Information({ nextStep }: InformationFormProps) {
	const { name, email, phoneNumber } = useSelector((state: RootState) => state.information);
	const dispatch = useDispatch();

	return (
		<div className="section input-forms">
			<div className="input-forms-information">
				<div className="input-sheet">
					<FormElement
						labelText="Enter your full name:"
						labelId="name"
						value={name}
						onChangeHandler={(event) => dispatch(setName(event.target.value))}
					/>
					<FormElement
						labelText="Enter your email:"
						labelId="email"
						value={email}
						onChangeHandler={(event) => dispatch(setEmail(event.target.value))}
					/>
					<FormElement
						labelText="Enter your phone number:"
						labelId="phoneNumber"
						value={phoneNumber}
						onChangeHandler={(event) => dispatch(setPhoneNumber(event.target.value))}
					/>
					<div className="button-box">
						<button onClick={nextStep}>Next</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Information;
