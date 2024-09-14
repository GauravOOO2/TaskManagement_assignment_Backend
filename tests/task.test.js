// const request = require('supertest');
// const mongoose = require('mongoose');
// const app = require('../src/app');
// const Task = require('../src/models/Task');

// beforeAll(async () => {
//   await mongoose.connect(process.env.MONGODB_URI);
// });

// afterAll(async () => {
//   await mongoose.connection.close();
// });

// describe('Task API', () => {
//   beforeEach(async () => {
//     await Task.deleteMany({});
//   });

//   it('should create a new task', async () => {
//     const res = await request(app)
//       .post('/api/tasks')
//       .send({
//         title: 'Test Task',
//         description: 'This is a test task',
//         dueDate: '2023-12-31',
//         category: 'Test'
//       });
//     expect(res.statusCode).toEqual(201);
//     expect(res.body).toHaveProperty('_id');
//     expect(res.body.title).toEqual('Test Task');
//   });

//   it('should get all tasks', async () => {
//     await Task.create({ title: 'Task 1' });
//     await Task.create({ title: 'Task 2' });

//     const res = await request(app).get('/api/tasks');
//     expect(res.statusCode).toEqual(200);
//     expect(res.body.length).toEqual(2);
//   });

//   it('should update a task', async () => {
//     const task = await Task.create({ title: 'Original Task' });

//     const res = await request(app)
//       .put(`/api/tasks/${task._id}`)
//       .send({ title: 'Updated Task', completed: true });

//     expect(res.statusCode).toEqual(200);
//     expect(res.body.title).toEqual('Updated Task');
//     expect(res.body.completed).toEqual(true);
//   });

//   it('should delete a task', async () => {
//     const task = await Task.create({ title: 'Task to delete' });

//     const res = await request(app).delete(`/api/tasks/${task._id}`);
//     expect(res.statusCode).toEqual(200);

//     const deletedTask = await Task.findById(task._id);
//     expect(deletedTask).toBeNull();
//   });
// });