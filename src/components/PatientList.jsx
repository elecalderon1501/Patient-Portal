import { useEffect } from 'react'
import Patient from './Patient'

const PatientList = ({ pacientes, setPaciente, eliminarPaciente }) => {
  // console.log(patients)
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {/* overflow-y-scroll--> me genera un scroll en la parte de las card patient  md->toma todo el ancho disponible*/}
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Lista Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Admnistra{' '}
            <span className="text-indigo-600 font-bold">tus pacientes</span>
          </p>
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
          <h2 className="font-black text-3xl text-center">NO HAY PACIENTES</h2>
          <p className="text-xl mt-5 mb-10 text-center">Agrega pacientes. </p>
        </>
      )}
    </div>
  )
}

export default PatientList
