import DownBar from "./components/DownBar";
import Graph from "./components/Graph";
import Header from "./components/Header";
import LeftNav from "./components/LeftNav";
import RightBar from "./components/RightBar";
import RightBarDown from "./components/RightBarDown";
import "./index.css";
function App() {
  return (
    <div className="app">
      <LeftNav />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Header />

        <Graph />
        <DownBar/>
      </div>
      <div>
        <RightBar />

        <RightBarDown />
      </div>
    </div>
  );
}

export default App;
