import Header from "./components/header/Header";
import Information from "./components/forms/InformationForm";
import Education from "./components/forms/EducationForm";
import Summary from "./components/summary/Summary";
import { RootState } from "./redux/store";
import { useDispatch, useSelector } from "react-redux";
import Experience from "./components/forms/ExperienceForm";
import { setStep, RESET_STATE } from "./redux/informationSlice";

const App = () => {
	const { step } = useSelector((state: RootState) => state.information);
	const dispatch = useDispatch();

	return (
		<>
			<Header
				clearAllCallback={() => dispatch(RESET_STATE())}
				loadCVCallback={() => {
					throw new Error("Method not implemented.");
				}}
				saveCVCallback={() => {
					throw new Error("Method not implemented.");
				}}
			/>
			<main className="hero">
				{(() => {
					switch (step) {
						case 1:
							return <Information nextStep={() => dispatch(setStep(2))} />;
						case 2:
							return <Education />;
						case 3:
							return <Experience />;
						default:
							return <Information nextStep={() => dispatch(setStep(2))} />;
					}
				})()}
				<Summary />
			</main>
		</>
	);
};

export default App;
