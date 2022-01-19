import React from 'react'

const Form = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Patient follow-up</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Add patients and{' '}
        <span className="text-indigo-600 font-bold ">Manage them</span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        <div className="mb-5">
          <label
            htmlFor="Name"
            className="block text-gray-700 uppercase font-bold"
          >
            Name:
          </label>
          <input
            id="Name"
            type="text"
            placeholder="Nombre"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-mg"
          />
        </div>
        <div className="mb-5" >
          <label
            htmlFor="LastName"
            className="block text-gray-700 uppercase font-bold"
          >
            Last Name:
          </label>
          <input
            id="LastName"
            type="text"
            placeholder="Last Name"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-mg"
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
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="discharge-date"
            className="block text-gray-700 uppercase font-bold"
          >
            Discharge Date
          </label>
          <input
            id="discharge-date"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-mg"
          />
          
        </div>
        <div className="mb-5">
          <label
            htmlFor="symptom"
            className="block text-gray-700 uppercase font-bold"
          >
            Symptom
          </label>
          <textarea name="" id="symptom" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-mg" placeholder='Describe the symptoms' ></textarea>
        </div>
        <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all " value="Add patient" />
      </form>
    </div>
  )
}

export default Form;
