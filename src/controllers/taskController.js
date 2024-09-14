const Task = require('../models/Task');

exports.createTask = async (req, res) => {
  try {
    const { title, description, dueDate } = req.body;
    
    if (!title || !description) {
      return res.status(400).json({ message: 'Both title and description are required.' });
    }

    if (dueDate) {
      const currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0); // Set to start of day for accurate comparison
      const taskDueDate = new Date(dueDate);
      
      if (taskDueDate < currentDate) {
        return res.status(400).json({ message: 'Due date cannot be in the past.' });
      }
    }

    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, completed, dueDate, category } = req.body;
    
    if (!title || !description) {
      return res.status(400).json({ message: 'Both title and description are required.' });
    }

    if (dueDate) {
      const currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0); // Set to start of day for accurate comparison
      const taskDueDate = new Date(dueDate);
      
      if (taskDueDate < currentDate) {
        return res.status(400).json({ message: 'Due date cannot be in the past.' });
      }
    }

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, description, completed, dueDate, category },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.json(updatedTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};