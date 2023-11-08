import "./App.css";
import "./about.css";
import "./master.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import MyNave from "./components/MyNave";
import Madcap from "./components/Madcap";
import NewNav from "./components/NewNav";

function App() {
  return (
    <>
      {/* <NewNav/> */}
      <MyNave />
      <Madcap/>
    </>
  );
}

export default App;
