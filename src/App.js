import './App.css';
import CreateRaid from "./components/CreateRaid";
import RaidsList from "./components/RaidsList";
import { useState } from "react";

function App() {
  const [raids, setRaids] = useState([]);

  function updateRaids(raid) {
    setRaids(raids => [...raids, raid]);
  }
  
  return (
    <div>
      <CreateRaid updateRaids={updateRaids}/>
      <RaidsList items={raids}/>
    </div>
  );
}

export default App;
