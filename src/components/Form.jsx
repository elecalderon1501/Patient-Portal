import React, { useState } from 'react'
import Error from './Error'

const Form = ({ pacientes, setPacientes }) => {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [sintomas, setSintomas] = useState('')
  const [error, setError] = useState('false')

  const handleSubmit = e => {
    e.preventDefault()
    //VALIDACION
    if ([name, lastName, email, date, sintomas].includes('')) {
      setError('true')
      return
    }

    setError(false)

    const objetoPaciente = {
      name,
      lastName,
      email,
      date,
      sintomas,
    }
    setPacientes([...pacientes, objetoPaciente])

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
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all "
          value="Agregar paciente"
        />
      </form>
    </div>
  )
}

export default Form
