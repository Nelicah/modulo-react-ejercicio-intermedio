import "../styles/App.scss";
import data from "../data/adalabers.json";
import { useState } from "react";

function App() {
  const [adalabers, setAdalabers] = useState(data.results);
  return (
    <>
      <header>
        <h1>Adalabers</h1>
      </header>
      <main>
        <table className="table">
          {/* Fila de cabecera */}
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Tutora</th>
              <th>Especialidad</th>
            </tr>
          </thead>
          {/*  Fin fila de cabecera  */}
          <tbody>
            {/* fila */}
            {adalabers.map((adalaberObj) => (
              <tr key={adalaberObj.id}>
                <td className="table-name"> {adalaberObj.name}</td>
                <td className="table-tutora">{adalaberObj.counselor}</td>
                <td className="table-especialidad">
                  {" "}
                  {adalaberObj.speciality}{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}

export default App;
