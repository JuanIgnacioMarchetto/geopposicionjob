import React, { useState } from 'react';

function LookingForEmployee() {
  const [employeeDetails, setEmployeeDetails] = useState({
    name: '',
    skills: '',
    experience: '',
    keywords: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeDetails({ ...employeeDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Detalles del empleado enviados:', employeeDetails);
  };

  return (
    <div>
      <h1>Looking For Employee Component</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={employeeDetails.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Habilidades:
          <input
            type="text"
            name="skills"
            value={employeeDetails.skills}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Experiencia:
          <textarea
            name="experience"
            value={employeeDetails.experience}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Palabras clave:
          <input
            type="text"
            name="keywords"
            value={employeeDetails.keywords}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default LookingForEmployee;
