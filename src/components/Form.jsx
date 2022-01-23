import React, { useState, useEffect } from 'react'
import Error from './Error'

const Form = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [sintomas, setSintomas] = useState('')

  const [error, setError] = useState('false')

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setName(paciente.name)
      setLastName(paciente.lastName)
      setEmail(paciente.email)
      setDate(paciente.date)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])
  // esto llevaria los datos de nuevo al formulario para poder editar
  //-------------------------------------------------------------
  const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)

    return random + fecha
  }
  //-------------------------------------------------------------
  const handleSubmit = (e) => {
    e.preventDefault()
    //VALIDACION
    if ([name, lastName, email, date, sintomas].includes('')) {
      setError(true)
      return;
    }
    setError(false)
  
    const objectoPaciente = {
      name,
      lastName,
      email,
      date,
      sintomas,
      // id: generarId()
    }

    if (paciente.id) {
      //editando el registro
      objectoPaciente.id = paciente.id
      const pacientesActualizados = pacientes.map(pacienteState =>
        pacienteState.id === paciente.id ? objectoPaciente : pacienteState
      )
      setPacientes(pacientesActualizados)
      setPaciente({})
    } else {
      objectoPaciente.id = generarId()
      setPacientes([...pacientes, objectoPaciente])
    }

    //reinicio form
    setName('')
    setLastName('')
    setEmail('')
    setDate('')
    setSintomas('')
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Agregar pacientes <br />
        <span className="text-indigo-600 font-bold ">Administrarlos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && <Error />}

        <div className="mb-5">
          <label
            htmlFor="Name"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre:
          </label>
          <input
            id="Nombre"
            type="text"
            placeholder="Nombre"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-mg"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="Apellido"
            className="block text-gray-700 uppercase font-bold"
          >
            Apellido:
          </label>
          <input
            id="Apellido"
            type="text"
            placeholder="Apellido"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-mg"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email:
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-mg"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="fecha-alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha Alta
          </label>
          <input
            id="fecha-alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-mg"
            value={date}
            onChange={e => setDate(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            name=""
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-mg"
            placeholder="Describe the symptoms"
            value={sintomas}
            onChange={e => setSintomas(e.target.value)}
          ></textarea>
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-colors "
          value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}

        />
      </form>
    </div>
  )
  }


export default Form
