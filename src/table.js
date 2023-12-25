import React from 'react';

// Sample data for the table
const tableData = [
  { id: 1, name: 'John Doe', age: 25, occupation: 'Engineer' },
  { id: 2, name: 'Jane Smith', age: 30, occupation: 'Designer' },
  { id: 3, name: 'Bob Johnson', age: 28, occupation: 'Developer' },
];

// Component for rendering a single row in the table
const TableRow = ({ data }) => {
  return (
    <tr>
      <td>{data.id}</td>
      <td>{data.name}</td>
      <td>{data.age}</td>
      <td>{data.occupation}</td>
    </tr>
  );
};

// Main Table component
const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Occupation</th>
        </tr>
      </thead>
      <tbody>
        {/* Map through the data and render a TableRow for each item */}
        {data.map(item => (
          <TableRow key={item.id} data={item} />
        ))}
      </tbody>
    </table>
  );
};

// App component using the Table component
const Tablecomp = () => {
  return (
    <div>
      <h1>React Table Example</h1>
      <Table data={tableData} />
    </div>
  );
};

export default Tablecomp;