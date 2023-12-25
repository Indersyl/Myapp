// DataDisplay2.js
import React, { useState, useEffect } from 'react';

const DataDisplay2 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8004/api/data');
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
            <th>phone</th>
            <th>service</th>
            {/* Add more headers for additional properties */}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.service}</td>
              {/* Add more cells for additional properties */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataDisplay2;