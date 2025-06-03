function Table({ filteredAdalabers, filteredCounselor }) {
  return (
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
        {filteredAdalabers.map((adalaberObj) => (
          <tr key={adalaberObj.id}>
            <td className="table-name"> {adalaberObj.name}</td>
            <td className="table-tutora">{adalaberObj.counselor}</td>
            <td className="table-especialidad"> {adalaberObj.speciality} </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
