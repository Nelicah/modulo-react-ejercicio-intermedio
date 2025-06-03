function Filter({ handleInputFilter, handleSelectFilter }) {
  return (
    <form className="formulario">
      <label>Nombre:</label>
      <input
        onInput={handleInputFilter}
        type="text"
        placeholder="ej: MariCarmen"
      ></input>
      <label>Escoge una tutora:</label>
      <select onChange={handleSelectFilter} name="counselor">
        <option value="p0">Cualquiera</option>
        <option value="p1">Yanelis</option>
        <option value="p2">Dayana</option>
        <option value="p3">Iván</option>
      </select>
    </form>
  );
}

export default Filter;
