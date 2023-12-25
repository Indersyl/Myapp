// DataForm.js
import React, { useState } from 'react';

const DataForm = ({ onFormSubmit }) => {
    const [formData, setFormData] = useState({
        id : '',
        name: '',
        number: '',
        service: '',
        // Add more properties as needed
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault(); 
        onFormSubmit(formData);
        // Optionally, clear the form after submission
        setFormData({
            id: '',
            name: '',
            phone: '',
            service: '',
        });
    };
    
    return (
    <form onSubmit={handleSubmit}>
        <label>
            Name:
            <input type="text" name="id" value={formData.id} onChange={handleChange} />
        </label>
        <br />
        <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
            Phone Number:
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
        </label>
        <br />
        <label>
            Service Type:
            <input type="text" name="service" value={formData.service} onChange={handleChange} />
        </label>
        {/* Add more input fields for additional properties */}
        <br />
        <button type="submit">Submit</button>
    </form>
    );
};

export default DataForm;