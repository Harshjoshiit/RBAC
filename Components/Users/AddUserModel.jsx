import React, { useState } from 'react';

const AddUserModal = ({ onSave }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [status, setStatus] = useState('Active');

  const handleSubmit = () => {
    onSave({ name, role, status });
  };

  return (
    <div className="modal">
      <h3>Add New User</h3>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
};

export default AddUserModal;
