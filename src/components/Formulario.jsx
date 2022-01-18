import React from 'react'

const Formulario = () => {
  return (
    <div className='md:w-1/2 lg:w-2/5'>
       <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">Agregar pacientes y {' '} <span className="text-indigo-600 font-bold ">Administralos</span></p>

      <form className='bg-white shadow-md rounded-lg py-10 px-5'>
        <div>
          <label htmlFor="Name" className='block text-gray-700 uppercase font-bold'>Name:</label>
          <input id="Name" type="text" placeholder='Nombre' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-mg' />
        </div>
      </form>
    </div>
  )
}

export default Formulario
