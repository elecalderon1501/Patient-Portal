
const Patient = () => {
  return (
    
      <div className="mx-5 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre: <span className="front-normal normal-case"> Tu nombre</span>
        </p>
      
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Apellido:{' '}
          <span className="front-normal normal-case"> Tu apellido</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email: <span className="front-normal normal-case"> Tu email</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha Alta:{' '}
          <span className="front-normal normal-case"> dd/mm/yyyy</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Sintomas:{' '}
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
