import "../styles/App.scss";
import data from "../data/adalabers.json";
import { useState } from "react";
import Filter from "./adalabers/Filter";
import Table from "./adalabers/Table";

function App() {
  const [adalabers, setAdalabers] = useState(data.results);
  const [filteredName, setFilteredName] = useState("");
  const [filteredCounselorName, setFilteredCounselorName] = useState("");

  const handleInputFilter = (ev) => {
    setFilteredName(ev.target.value);
  };
  const handleSelectFilter = (ev) => {
    setFilteredCounselorName(ev.target.value);
  };

  const filteredAdalabers = adalabers.filter((eachAdalaber) =>
    eachAdalaber.name.includes(filteredName)
  );

  const filteredCounselor = adalabers.filter((eachAdalaber) =>
    eachAdalaber.counselor.includes(filteredCounselorName)
  );

  return (
    <>
      <header>
        <h1>Adalabers</h1>
      </header>
      <main>
        <Filter
          handleInputFilter={handleInputFilter}
          handleSelectFilter={handleSelectFilter}
        />
        <Table
          filteredAdalabers={filteredAdalabers}
          filteredCounselor={filteredCounselor}
        />
      </main>
    </>
  );
}

export default App;
