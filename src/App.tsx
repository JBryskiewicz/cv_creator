import Header from "./components/header/Header";
import Information from "./components/forms/InformationForm";
import Education from "./components/forms/EducationForm";
import Summary from "./components/summary/Summary";
import { RootState } from "./redux/store";
import { useSelector } from "react-redux";
import Experience from "./components/forms/ExperienceForm";

const App = () => {
  const { step } = useSelector((state: RootState) => state.information);

  return (
    <>
      <Header />
      <main className="hero">
        {(() => {
          switch (step) {
            case 1:
              return <Information />;
            case 2:
              return <Education />;
            case 3:
              return <Experience />;
            default:
              return <Information />;
          }
        })()}
        <Summary />
      </main>
    </>
  );
};

export default App;
