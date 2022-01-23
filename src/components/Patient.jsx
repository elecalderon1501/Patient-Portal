
const Patient = ({paciente, setPaciente, eliminarPaciente}) => {
const {name, lastName, email, date, sintomas, id} = paciente;

const handleEliminar = () =>{
  const respuesta = confirm('Deseas eliminar este paciente?')

  if(respuesta){
    eliminarPaciente(id)
  }
}

  return (
    
      <div className="mx-5 bg-white shadow-md px-5 py-10 rounded-xl mb-5">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre: <span className="front-normal normal-case"> {name}</span>
        </p>
      
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Apellido:{' '}
          <span className="front-normal normal-case"> {lastName}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email: <span className="front-normal normal-case"> {email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha Alta:{' '}
          <span className="front-normal normal-case"> {date}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Sintomas:{' '}
          <span className="front-normal normal-case">
            {' '}
            {sintomas}
          </span>
        </p>
        <div>
          <button type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={() => setPaciente(paciente)}> Editar          
          </button>
          <button type="button" className="py-2 px-10 ml-20 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg" 
          onClick={handleEliminar}> Eliminar
          </button>
        </div>
    </div>
  )
}

export default Patient
