import React, { useEffect, useState } from 'react';
import { getRoles, addRole } from '../api/api';
import RoleTable from '../Components/Roles/RoleTable';
import AddRoleModal from '../components/Roles/AddRoleModal';

const RoleManagement = () => {
  const [roles, setRoles] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getRoles().then((res) => setRoles(res.data));
  }, []);

  const handleAddRole = (newRole) => {
    addRole(newRole).then(() => {
      setRoles((prev) => [...prev, newRole]);
      setIsModalOpen(false);
    });
  };

  return (
    <div>
      <h1>Role Management</h1>
      <button onClick={() => setIsModalOpen(true)}>Add Role</button>
      <RoleTable roles={roles} />
      {isModalOpen && <AddRoleModal onSave={handleAddRole} />}
    </div>
  );
};

export default RoleManagement;
