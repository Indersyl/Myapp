// ReceiveAi.js

import React, { useState } from 'react';
import { insertData } from './AI solve'; // Adjust the path accordingly

function ReceiveAi() {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    phone: '',
    service: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await insertData(formData);
  };

  return (
    <div>
      <h1>React Form with Fetch</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Input 1:
          <input type="text" name="id" value={formData.id} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Input 2:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Input 3:
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Input 4:
          <input type="text" name="service" value={formData.service} onChange={handleChange} required />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ReceiveAi;