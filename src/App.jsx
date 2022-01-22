import { useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import PatientList from './components/PatientList'

function App() {
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        {/* md->mediaquery */}
        <Form pacientes={pacientes} setPacientes={setPacientes} paciente={paciente}/>
        <PatientList pacientes={pacientes} setPaciente={setPaciente}/>
      </div>
    </div>
  )
}

export default App
