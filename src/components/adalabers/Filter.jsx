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
      <select onInput={handleSelectFilter} name="counselor">
        <option value="Cualquiera">Cualquiera</option>
        <option value="Yanelis">Yanelis</option>
        <option value="Dayana">Dayana</option>
        <option value="Iván">Iván</option>
      </select>
    </form>
  );
}

export default Filter;
