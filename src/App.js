import "./App.css";
import "./about.css";
import "./master.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Route, Routes } from "react-router-dom";
import Madcap from "./components/Madcap";
import Header from "./components/Header";
import Tokenomics from "./components/Tokenomics";
import Pages from "./components/Pages";
import RoadMap from "./components/RoadMap";
import Skating from "./components/Skating";

function App() {
  return (
    <>
      {/* <NewNav/> */}
      <Pages />
      {/* <Madcap /> */}
      <Routes>
        <Route exact path="/" Component={Header} />
        <Route exact path="/Madcap" Component={Madcap} />
        <Route exact path="/Tokenomics" Component={Tokenomics} />
      </Routes>
      <Tokenomics />
      <RoadMap />
      <Skating/>
    </>
  );
}

export default App;
