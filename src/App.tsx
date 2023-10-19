import { useSelector } from "react-redux";
import Information from "./components/forms/informationForm";
import Header from "./components/header";
import Summary from "./components/summary/summary";
import { RootState } from "./redux/store";

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
              return <div className="section" />;
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
