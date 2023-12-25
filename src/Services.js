import React, { useState } from 'react';

const Service = () => {
  const [selectedChoice, setSelectedChoice] = useState(null);

  const handleChoiceClick = (choice) => {
    setSelectedChoice(choice);
  };

  const choices = ['General Diagnosis', 'RadioDiagnostic', 'RadioTherapy', 'RadioPharmacy'];

  return (
    <div>
      <h2>Multiple Choice Buttons</h2>
      <p>Select one:</p>

      {choices.map((choice, index) => (
        <button
          key={index}
          onClick={() => handleChoiceClick(choice)}
          style={{
            backgroundColor: selectedChoice === choice ? 'lightblue' : 'white',
          }}
        >
          {choice}
        </button>
      ))}

      <p>The Service you registered is: {selectedChoice || 'None'}</p>
    </div>
  );
};

export default Service;