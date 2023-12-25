import React, { useState } from 'react';
import Service from './Services';





const Register = () => {

    const [showFirstComponent, setShowFirstComponent] = useState(true);
    const handleNext = () => {
        setShowFirstComponent(false);
    };
    const handlePrevious = () => {
        setShowFirstComponent(true);
    };
    const FirstComponent = ({ onNext }) => {
        // State to store the entered name
        const [name, setName] = useState('');
        // Event handler for form submission
        const handleSubmit = (event) => {
            event.preventDefault();
            // You can perform further actions with the entered name here
            console.log(`Submitted name: ${name}`);
        };
        // Event handler for input value change
        const handleChange = (event) => {
            setName(event.target.value);
        };
        return (
        <div>
            <h2>Name Form</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter your name:
                    <input type="text" value={name} onChange={handleChange} />
                </label>
                <button onClick={handleNext}>Register
                </button>
            </form>
            {/* Display the entered name */}
            {name && <p>Your name is: {name}</p>}
        </div>
        );
    };
    const SecondComponent = ({ onPrevious }) => {
  return (
    <div>
        <Service></Service>
    </div>
  );
};
  return (
    <div>
      {showFirstComponent ? (
        <FirstComponent onNext={handleNext} />
      ) : (
        <SecondComponent onPrevious={handlePrevious} />
      )}
    </div>
  );
};

export default Register;