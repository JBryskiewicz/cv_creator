import Information from "./components/forms/informationForm";
import Header from "./components/header";
import Summary from "./components/summary/summary";

const App = () => {
  return (
    <>
      <Header />
      <main className="hero">
        <Information />
        <Summary />
      </main>
    </>
  );
};

export default App;
