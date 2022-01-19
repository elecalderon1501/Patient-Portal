
const Patient = () => {
  return (
    
      <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Name: <span className="front-normal normal-case"> Your name</span>
        </p>
      
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Last Name:{' '}
          <span className="front-normal normal-case"> Your last name</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email: <span className="front-normal normal-case"> Your email</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Discharge Date:{' '}
          <span className="front-normal normal-case"> dd/mm/yyyy</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Symptom:{' '}
          <span className="front-normal normal-case">
            {' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            omnis, consectetur harum quae distinctio veniam neque eligendi
            architecto facilis temporibus illo eum saepe nostrum, molestias et
            recusandae explicabo vero! Saepe!
          </span>
        </p>
    </div>
  )
}

export default Patient
