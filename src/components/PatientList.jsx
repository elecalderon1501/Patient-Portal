import Patient from './Patient'

const PatientList = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {/* overflow-y-scroll--> me genera un scroll en la parte de las card patient  md->toma todo el ancho disponible*/}
      <h2 className="font-black text-3xl text-center">Lista Pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Admnistra <span className="text-indigo-600 font-bold">tus pacientes</span>
      </p>
      <Patient />
      <Patient />
      <Patient />
    </div>
  )
}

export default PatientList
