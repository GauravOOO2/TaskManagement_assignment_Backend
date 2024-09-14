const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');
const Task = require('../models/Task');

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
  await mongoose.connection.close();
});

beforeEach(async () => {
  await Task.deleteMany({});
});

describe('Task Controller', () => {
  it('should create a new task', async () => {
    const res = await request(app)
      .post('/api/tasks')
      .send({
        title: 'Test Task',
        description: 'This is a test task',
      });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Test Task');
  });

  it('should get all tasks', async () => {
    await Task.create({ title: 'Task 1', description: 'Description 1' });
    await Task.create({ title: 'Task 2', description: 'Description 2' });

    const res = await request(app).get('/api/tasks');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(2);
  });

  it('should update a task', async () => {
    const task = await Task.create({ title: 'Old Title', description: 'Old Description' });

    const res = await request(app)
      .put(`/api/tasks/${task._id}`)
      .send({ title: 'New Title', description: 'New Description' });

    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe('New Title');
  });

  it('should delete a task', async () => {
    const task = await Task.create({ title: 'To Be Deleted', description: 'This task will be deleted' });

    const res = await request(app).delete(`/api/tasks/${task._id}`);
    expect(res.statusCode).toBe(200);

    const deletedTask = await Task.findById(task._id);
    expect(deletedTask).toBeNull();
  });
});
