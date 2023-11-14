import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setExperience, setStep } from "../../redux/informationSlice";
import { RootState } from "../../redux/store";

function Experience() {
	const [name, setName] = useState<string>("");
	const [date, setDate] = useState<string>("");
	const [desc, setDesc] = useState<string>("");
	const dispatch = useDispatch();
	const { experience } = useSelector((state: RootState) => state.information);

	const handleNavButtons = (step: number) => {
		dispatch(setStep(step));
	};

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

	return (
		<div className="section input-forms">
			<div className="input-forms-information">
				<div className="input-sheet">
					<div>
						<label htmlFor="institutionName">Enter company's name:</label>
						<input
							type="text"
							value={name}
							id="institutionName"
							placeholder="Google corp"
							onChange={(event) => setName(event.target.value)}
						/>
					</div>
					<div>
						<label htmlFor="date">Enter years of employment:</label>
						<input
							type="text"
							value={date}
							id="date"
							placeholder="01.09.2019 - 01.06.2023"
							onChange={(event) => setDate(event.target.value)}
						/>
					</div>
					<div>
						<label htmlFor="description">Enter description:</label>
						<textarea
							value={desc}
							id="description"
							placeholder="General information about your previous job"
							onChange={(event) => setDesc(event.target.value)}
						/>
					</div>
					<div className="button-box">
						<button onClick={handleSaveButton}>Save</button>
						<button onClick={() => handleNavButtons(2)}>Back</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Experience;
