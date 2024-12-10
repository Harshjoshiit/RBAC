import React from 'react';

const RoleTable = ({ roles }) => (
  <table>
    <thead>
      <tr>
        <th>Role</th>
        <th>Permissions</th>
      </tr>
    </thead>
    <tbody>
      {roles.map((role) => (
        <tr key={role.id}>
          <td>{role.name}</td>
          <td>{role.permissions.join(', ')}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default RoleTable;
