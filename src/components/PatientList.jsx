import Patient from "./Patient"

const PatientList = () => {
  return (
    <div className="w-1/2 lg:w-3/5">
      <h2 className="font-black text-3xl text-center">Patient List</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Manage your <span className="text-indigo-600 font-bold">Patients</span>
      </p>
      <Patient/>
      <Patient/>
      <Patient/>
    </div>
    
  )
}

export default PatientList
