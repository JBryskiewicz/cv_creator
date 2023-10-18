import Header from "./components/header";
import Summary from "./components/summary";

const App = () => {
  return (
    <>
      <Header />
      <main className="hero">
        <div className="section input-forms"></div>
        <Summary />
      </main>
    </>
  );
};

export default App;
