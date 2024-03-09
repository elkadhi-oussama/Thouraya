import "./CSS/App.css";
import CribleJF100 from "./Pages/CribleJF100";
import ETATSGENERAL from "./Pages/ETATSGENERAL";

function App() {
  return (
    <div className="AllMyApp">
      <CribleJF100 title={"CRIBLE JF 100"} />
      <ETATSGENERAL title={"ETATS GENERAL"} />
      <CribleJF100 title={"BROYEUR WB 100"} />
    </div>
  );
}

export default App;
