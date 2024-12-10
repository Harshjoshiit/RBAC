import React from 'react';

const UserTable = ({ users }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Role</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user) => (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.role}</td>
          <td>{user.status}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default UserTable;
