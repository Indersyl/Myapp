// DataDisplay.js
import React, { useState, useEffect } from 'react';

const DataDisplay = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8005/api/data');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h2>Data Display</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Specialty</th>
            <th>Schedule</th>
            {/* Add more headers for additional properties */}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.specialty}</td>
              <td>{item.formatted_date}</td>
              {/* Render the formatted date */}
              {/* Add more cells for additional properties */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataDisplay;