import { useState } from "react";

function CreateRaid({ updateRaids }) {
  const [raid, setRaid] = useState("");

  return (
    <div>
      <h1>Create Raid</h1>
      <input type="text" onChange={(e) => setRaid(e.target.value)} />
      <button onClick={() => updateRaids(raid)}>submit</button>
    </div>
  );
}

export default CreateRaid;
