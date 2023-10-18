"use client"
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import { AiOutlinePlus } from 'react-icons/ai';
import Form from './Form';

const TaskForm = () => {

  const [tasks, setTasks] = useState(getTasks());
  const [showForm, setShowForm] = useState(false);

  function getTasks() {
    const temp = localStorage.getItem('tasks');
    const savedTasks = JSON.parse(temp);
    return savedTasks || [];
  }

  // Update local storage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleModal = () => {
    setShowForm(!showForm);
  }

  return (
    <div className='lg:ml-60'>
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      {showForm ? <Form onAddTask={handleAddTask} isOpen={showForm} onClose={handleModal} />: <></>}

      <div>
        <h2>Submitted Tasks:</h2>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <strong>{task.title}</strong>: {task.description} (Due: {task.dueDate || 'Not specified'}, Category: {task.category || 'No choice'})
            </li>
          ))}
        </ul>
      </div>
      <Fab color="secondary" aria-label="add" className='ml-full' onClick={(e) => setShowForm(!showForm)}>
        <AiOutlinePlus />
      </Fab>
    </Box>
    </div>
  );
};

export default TaskForm;
