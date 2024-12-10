import { setupWorker, rest } from 'msw';

const users = [
  { id: 1, name: 'Alice', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Bob', role: 'Viewer', status: 'Inactive' },
];

const roles = [
  { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
  { id: 2, name: 'Viewer', permissions: ['Read'] },
];

export const handlers = [
  rest.get('/api/users', (req, res, ctx) => res(ctx.json(users))),
  rest.post('/api/users', (req, res, ctx) => {
    const newUser = req.body;
    users.push({ id: users.length + 1, ...newUser });
    return res(ctx.json(newUser));
  }),
  rest.get('/api/roles', (req, res, ctx) => res(ctx.json(roles))),
  rest.post('/api/roles', (req, res, ctx) => {
    const newRole = req.body;
    roles.push({ id: roles.length + 1, ...newRole });
    return res(ctx.json(newRole));
  }),
];

export const worker = setupWorker(...handlers);
