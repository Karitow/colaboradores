import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BaseColaboradores } from "./assets/BaseColaboradores";
import Listado from "./Components/Listado";
import Formulario from "./Components/Formulario";
import Buscador from "./Components/Buscador";
import Alerta from "./Components/Alert";
const App = () => {
  const [datos, setDatos]=useState(BaseColaboradores)
  const [dataFilter, setDataFilter]=useState('')
  const [alerta, setAlerta]=useState({
    mensaje:'',
    color:''
  })
  const nuevosColaboradoresConId = (nuevoColaborador)=>{
    const ultimoValor= datos[datos.length-1]
    const colaboradorConId = {...nuevoColaborador, id:ultimoValor? Number(ultimoValor.id) +1 : 1,};
    setDatos([...datos, colaboradorConId])
  }
  const mostrarAlerta = (mensajeAlerta)=>{
    setAlerta(mensajeAlerta)
  }
  const sacarId = (idColaborador)=>{
    const nuevaLista = datos.filter(colaborador => colaborador.id != idColaborador)
    setDatos(nuevaLista)
  }
  const buscar = datos.filter((colaborador)=>{
    return(
      colaborador.nombre.toLowerCase().includes(dataFilter.toLowerCase()) ||
      colaborador.correo.toLowerCase().includes(dataFilter.toLowerCase()) ||
      colaborador.edad.toLowerCase().includes(dataFilter.toLowerCase()) ||
      colaborador.cargo.toLowerCase().includes(dataFilter.toLowerCase()) ||
      colaborador.telefono.toLowerCase().includes(dataFilter.toLowerCase())
    )
  })
  return (
    <>
    <main>
    <section>
       <Buscador dataFilter={dataFilter} setDataFilter={setDataFilter}/>
       <Listado datos={buscar} sacarId={sacarId}/>
    </section>
    <aside>
       <Formulario nuevosColaboradores={nuevosColaboradoresConId} mostrarAlerta={mostrarAlerta}/>
       <Alerta mensaje={alerta.mensaje} color={alerta.color}/>
    </aside>
    </main>
    </>
  );
};

export default App;