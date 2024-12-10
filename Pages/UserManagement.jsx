import React, { useEffect, useState } from 'react';
import { getUsers, addUser } from '../api/api';
import UserTable from './Components/Users/UserTable';
import AddUserModal from './Components/Users/AddUserModal';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getUsers().then((res) => setUsers(res.data));
  }, []);

  const handleAddUser = (newUser) => {
    addUser(newUser).then(() => {
      setUsers((prev) => [...prev, newUser]);
      setIsModalOpen(false);
    });
  };

  return (
    <div>
      <h1>User Management</h1>
      <button onClick={() => setIsModalOpen(true)}>Add User</button>
      <UserTable users={users} />
      {isModalOpen && <AddUserModal onSave={handleAddUser} />}
    </div>
  );
};

export default UserManagement;
