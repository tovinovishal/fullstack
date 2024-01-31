import { useState } from 'react';

const TableWithEditOptions = () => {
  const initialData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', gender: 'Male' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', gender: 'Female' },
    { id: 3, name: 'Joe', email: 'joe@example.com', gender: 'Male' },
    { id: 4, name: 'Raizak', email: 'raiz@example.com', gender: 'Female' },
    { id: 5, name: 'Mujeeb', email: 'mufasa@example.com', gender: 'Male' }
  ];

  const [data, setData] = useState(initialData);
  const [filter, setFilter] = useState('');

  const handleEdit = (id) => {
    // Implement edit logic (e.g., open a modal for editing)
    console.log(`Edit entry with ID ${id}`);
  };

  const handleRemove = (id) => {
    // Implement remove logic
    setData((prevData) => prevData.filter((entry) => entry.id !== id));
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    filterData(e.target.value);
  };

  const filterData = (filterText) => {
    const filteredData = initialData.filter((entry) =>
      entry.name.toLowerCase().includes(filterText.toLowerCase())
    );
    setData(filteredData);
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px'}}>
      <div style={{ marginBottom: '10px' }}>
        <label>Filter by Name: </label>
        <input type="text" value={filter} onChange={handleFilterChange} />
      </div>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '0 auto' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry) => (
            <tr key={entry.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td>{entry.id}</td>
              <td>{entry.name}</td>
              <td>{entry.email}</td>
              <td>{entry.gender}</td>
              <td>
                <button onClick={() => handleEdit(entry.id)}>Edit</button>
                <button onClick={() => handleRemove(entry.id)}>Remove</button>
                {/* Add more action buttons as needed */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableWithEditOptions;
