import { useDispatch } from "react-redux";
import { Education, Experience } from "../../types/types";
import ExpEduSharedCard from "./ExpEduSharedCard";
import { setEducation, setExperience } from "../../redux/informationSlice";
import { isEducation } from "../../types/typeGuards";
import { useState } from "react";

type Props = {
	dataCollection: Education[] | Experience[];
};

function ExpEduSharedComponent({ dataCollection }: Props) {
	const [editable, setEditable] = useState<string>("");
	const dispatch = useDispatch();

	const editButtonHandler = (name: string) => {
		setEditable(name);
	};

	//Improve implementation by adding UUID to types Edu & Exp.
	//Currently this method should overwrite name duplicates
	const saveButtonHandler = (name: string, editedData: Education | Experience) => {
		const modifiedCollection = dataCollection.map((element) => {
			if (element.name === name) {
				return (element = editedData);
			}
			return element;
		});

		isEducation(editedData)
			? dispatch(setEducation(modifiedCollection as Education[]))
			: dispatch(setExperience(modifiedCollection as Experience[]));

		setEditable("");
	};

	//Improve implementation by adding UUID to types Edu & Exp.
	//Currently this method should filter out name duplicates
	const deleteButtonHandler = (data: Education | Experience) => {
		const modifiedCollection = dataCollection.filter((element) => {
			return element.name !== data.name;
		});
		isEducation(data)
			? dispatch(setEducation(modifiedCollection as Education[]))
			: dispatch(setExperience(modifiedCollection as Experience[]));
	};

	return (
		<>
			{dataCollection.map((element) => (
				<ExpEduSharedCard
					key={element.name}
					data={element}
					editableName={editable}
					editButtonHandler={editButtonHandler}
					deleteButtonHandler={deleteButtonHandler}
					saveButtonHandler={saveButtonHandler}
				/>
			))}
		</>
	);
}

export default ExpEduSharedComponent;
