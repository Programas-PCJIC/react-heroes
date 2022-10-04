import Header from "./components/Header";
import Heroes from "./components/Heroes";
import data from "./mocks/data";
function App() {
  return (
    <>
      <Header />
      <Heroes heroesData = {data}/>
    </>
  );
}

export default App;
