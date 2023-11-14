import { Education, Experience } from "../../types/types";
import ExpEduSharedCard from "./ExpEduSharedCard";

type Props = {
	dataCollection: Education[] | Experience[];
};

function ExpEduSharedComponent({ dataCollection }: Props) {
	return (
		<>
			{dataCollection.map((element) => (
				<ExpEduSharedCard key={element.name} data={element} />
			))}
		</>
	);
}

export default ExpEduSharedComponent;
