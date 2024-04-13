const Buscador = ({ dataFilter, setDataFilter}) => {
  const saveSearch = (evento) => {
     setDataFilter(evento.target.value.toLowerCase());
  };
  return (
    <>
    <h2>Listado de colaboradores</h2>
      <div className="buscador col-12 col-md-6">
        <input
          type="text"
          name="buscador"
          id="buscador"
          placeholder="Busca un colaborador"
          className="form-control mb-3"
          onChange={saveSearch}
          value={dataFilter}
        />
      </div>
    </>
  );
};

export default Buscador;