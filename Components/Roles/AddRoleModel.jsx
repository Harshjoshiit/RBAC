import React, { useState } from 'react';

const AddRoleModal = ({ onSave }) => {
  const [roleName, setRoleName] = useState('');
  const [permissions, setPermissions] = useState([]);

  const handlePermissionChange = (permission) => {
    setPermissions((prev) =>
      prev.includes(permission)
        ? prev.filter((perm) => perm !== permission)
        : [...prev, permission]
    );
  };

  const handleSubmit = () => {
    onSave({ name: roleName, permissions });
  };

  return (
    <div className="modal">
      <h3>Add New Role</h3>
      <input
        type="text"
        placeholder="Role Name"
        value={roleName}
        onChange={(e) => setRoleName(e.target.value)}
      />
      <div>
        <label>
          <input
            type="checkbox"
            checked={permissions.includes('Read')}
            onChange={() => handlePermissionChange('Read')}
          />
          Read
        </label>
        <label>
          <input
            type="checkbox"
            checked={permissions.includes('Write')}
            onChange={() => handlePermissionChange('Write')}
          />
          Write
        </label>
        <label>
          <input
            type="checkbox"
            checked={permissions.includes('Delete')}
            onChange={() => handlePermissionChange('Delete')}
          />
          Delete
        </label>
      </div>
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
};

export default AddRoleModal;
