import Header from "./components/header/Header";
import Summary from "./components/summary/Summary";
import { RootState } from "./redux/store";
import { useDispatch, useSelector } from "react-redux";
import { InformationForm } from "./components/forms/InformationForm";
import { EducationForm } from "./components/forms/EducationForm";
import { ExperienceForm } from "./components/forms/ExperienceForm";
import { setStep, RESET_STATE } from "./redux/informationSlice";

const App = () => {
	const { step } = useSelector((state: RootState) => state.information);
	const dispatch = useDispatch();

	return (
		<>
			<Header
				clearAllCallback={() => dispatch(RESET_STATE())}
				pdfPrintCallback={() => {
					throw new Error("Feature in developement, currently not included in demo version.");
				}}
			/>
			<main className="hero">
				{(() => {
					switch (step) {
						case 1:
							return <InformationForm nextStep={() => dispatch(setStep(2))} />;
						case 2:
							return <EducationForm nextStep={() => dispatch(setStep(3))} previousStep={() => dispatch(setStep(1))} />;
						case 3:
							return <ExperienceForm previousStep={() => dispatch(setStep(2))} />;
						default:
							return <InformationForm nextStep={() => dispatch(setStep(2))} />;
					}
				})()}
				<Summary />
			</main>
		</>
	);
};

export default App;
