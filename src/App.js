import "./App.css";
import "./about.css";
import "./master.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Route, Routes } from "react-router-dom";
import Madcap from "./components/Madcap";
import NewNav from "./components/NewNav";
import MyNave from "./components/MyNave";
function App() {
  return (
    <>
      {/* <NewNav/> */}
      {/* <MyNave />  */}
      {/* <Madcap /> */}
      <Routes>
        <Route exact path="/" Component={MyNave} />
        <Route exact path="/Madcap" Component={Madcap} />
      </Routes>
    </>
  );
}

export default App;
