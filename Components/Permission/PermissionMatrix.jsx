import React from 'react';

const PermissionMatrix = ({ roles }) => (
  <table>
    <thead>
      <tr>
        <th>Role</th>
        <th>Read</th>
        <th>Write</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {roles.map((role) => (
        <tr key={role.id}>
          <td>{role.name}</td>
          <td>{role.permissions.includes('Read') ? '✔' : '✖'}</td>
          <td>{role.permissions.includes('Write') ? '✔' : '✖'}</td>
          <td>{role.permissions.includes('Delete') ? '✔' : '✖'}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default PermissionMatrix;
