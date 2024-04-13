import { useState } from "react";
import { Button } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Form } from "react-bootstrap";
const Formulario = ({nuevosColaboradores, mostrarAlerta}) => {
  const [nuevoSujeto, setNuevoSujeto]=useState({
    id:'',
    nombre:'',
    correo:'',
    edad:'',
    cargo:'',
    telefono:''
  })
  //Validando el formulario
  const validarForm=(e)=>{
    e.preventDefault()
    const {nombre, correo, edad, cargo, telefono}=nuevoSujeto
    const validaSujeto = !nombre || !correo || !edad || !cargo || !telefono
    if (validaSujeto){
      mostrarAlerta({
          mensaje:'Debe llenar todos los campos',
          color:'warning'
      })
      return
  }else if (!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(correo)) {
          mostrarAlerta({
              mensaje:'El correo ingresado no tiene un formato válido',
              color:'danger'
          })
          return
      }else if(!/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(telefono)){
        mostrarAlerta({
          mensaje:'El telefono ingresado no tiene un formato válido',
          color:'danger'
      })
      return
      }
  mostrarAlerta({
      mensaje:'Colaborador ingresado con éxito',
      color:'success'
  })
  nuevosColaboradores(nuevoSujeto)
  setNuevoSujeto(
      {
          id: '',
          nombre: '',
          correo: '',
          edad: '',
          cargo: '',
          telefono: ''
      }
  )
  }
  return (
    <>
    <h2>Agregar colaborador</h2>
    <Form onSubmit={validarForm}>
      <Form.Group className="mb-3" controlId="formBasicName">
      <FloatingLabel
        controlId="floatingInput"
        label="Nombre del colaborador"
        className="mb-3"
      >
        <Form.Control type="text" name='nombre' placeholder="Nombre del colaborador" value={nuevoSujeto.nombre} onChange={(evento)=>setNuevoSujeto({...nuevoSujeto,nombre:evento.target.value})}/>
      </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <FloatingLabel
        controlId="floatingInput"
        label="Email del colaborador"
        className="mb-3"
      >
        <Form.Control type="text" name='correo' placeholder="name@example.com" value={nuevoSujeto.correo} onChange={(evento)=>setNuevoSujeto({...nuevoSujeto,correo:evento.target.value})}/>
      </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <FloatingLabel
        controlId="floatingInput"
        label="Edad del colaborador"
        className="mb-3"
      >
        <Form.Control type="number" name='edad' placeholder="Edad del colaborador" value={nuevoSujeto.edad} onChange={(evento)=>setNuevoSujeto({...nuevoSujeto,edad:evento.target.value})}/>
      </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <FloatingLabel
        controlId="floatingInput"
        label="Cargo del colaborador"
        className="mb-3"
      >
        <Form.Control type="text" name='cargo' placeholder="Cargo del colaborador" value={nuevoSujeto.cargo} onChange={(evento)=>setNuevoSujeto({...nuevoSujeto,cargo:evento.target.value})}/>
      </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <FloatingLabel
        controlId="floatingInput"
        label="Teléfono del colaborador"
        className="mb-3"
      >
        <Form.Control type="text" name='telefono' placeholder="Teléfono del colaborador" value={nuevoSujeto.telefono} onChange={(evento)=>setNuevoSujeto({...nuevoSujeto,telefono:evento.target.value})}/>
      </FloatingLabel>
      </Form.Group>
      <Button
        className="btn btn-primary btn-block w-100 pt-1 pb-1"
        type="submit"
      >
        Agregar colaborador
      </Button>
    </Form>
    </>
  );
};

export default Formulario;