import { useDispatch } from "react-redux";
import { Education, Experience } from "../../types/types";
import ExpEduSharedCard from "./ExpEduSharedCard";
import { setEducation, setExperience } from "../../redux/informationSlice";

type Props = {
	dataCollection: Education[] | Experience[];
};

function ExpEduSharedComponent({ dataCollection }: Props) {
	const dispatch = useDispatch();
	const isEducation = (data: Education | Experience): data is Education => {
		if ((data as Education).type) {
			return true;
		}
		return false;
	};
	const editButtonHandler = () => {};

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
					editButtonHandler={editButtonHandler}
					deleteButtonHandler={deleteButtonHandler}
				/>
			))}
		</>
	);
}

export default ExpEduSharedComponent;
