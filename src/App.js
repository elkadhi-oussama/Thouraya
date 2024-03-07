import "./CSS/App.css";
import CribleJF100 from "./Pages/CribleJF100";

function App() {
  return (
    <div className="AllMyApp">
      <CribleJF100 title={"CRIBLE JF 100"} />
      <CribleJF100 title={"ETATS GENERAL"} />
      <CribleJF100 title={"BROYEUR WB 100"} />
    </div>
  );
}

export default App;
