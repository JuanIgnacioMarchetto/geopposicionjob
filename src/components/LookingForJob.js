import React, { useState } from 'react';

function LookingForJob() {
  const [jobDetails, setJobDetails] = useState({
    jobTitle: '',
    jobDescription: '',
    keywords: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobDetails({ ...jobDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para enviar los detalles del trabajo
    console.log('Detalles del trabajo enviados:', jobDetails);
  };

  return (
    <div>
      <h1>Looking For Job Component</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Título del trabajo:
          <input
            type="text"
            name="jobTitle"
            value={jobDetails.jobTitle}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Descripción del trabajo:
          <textarea
            name="jobDescription"
            value={jobDetails.jobDescription}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Palabras clave:
          <input
            type="text"
            name="keywords"
            value={jobDetails.keywords}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default LookingForJob;
