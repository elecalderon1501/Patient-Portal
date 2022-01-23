import { useEffect } from 'react'
import Patient from './Patient'

const PatientList = ({ pacientes, setPaciente, eliminarPaciente }) => {
  // console.log(patients)
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll bg-slate-400 rounded-lg">
      {/* overflow-y-scroll--> me genera un scroll en la parte de las card patient  md->toma todo el ancho disponible*/}
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center mb-5 text-sky-300 drop-shadow-lg ">Lista Pacientes</h2>
          
          {pacientes.map(paciente => (
            <Patient
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center text-red-600 mt-10 ">NO HAY PACIENTES</h2>
          
        </>
      )}
    </div>
  )
}

export default PatientList
