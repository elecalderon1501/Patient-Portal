import { useState, useEffect } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import PatientList from './components/PatientList'

function App() {
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  useEffect (() =>{
    const obtenerLS = () =>{
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
      // si no hay nada en localStorage que le agregue un []
      // json.parse convierte la info guardada en string en un arreglo
      setPacientes(pacientesLS)
    }
    obtenerLS();
  }, [])

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(
      paciente => paciente.id !== id
    )
    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        {/* md->mediaquery */}
        <Form
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
        />
        <PatientList
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
