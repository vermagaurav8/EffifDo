"use client"
import React, { useState, useEffect } from 'react';
import Form from './Form';
import TaskList from './TaskList';

const AddTask = () => {
  const [tasks, setTasks] = useState(getTasks());
  const [showForm, setShowForm] = useState(false);

  function getTasks() {
    if (typeof window !== 'undefined') {
      const temp = localStorage.getItem('tasks');
      const savedTasks = JSON.parse(temp);
      return savedTasks || [];
    }
    return [];
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

  const handleDelete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleEdit = (index) => {
    // Implement the edit logic, e.g., open the form with the selected task for editing
    console.log('Editing task at index:', index);
  };

  const handleToggle = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = {
      ...updatedTasks[index],
      isCompleted: !updatedTasks[index].isCompleted,
    };
    setTasks(updatedTasks);
  }

  return (
    <div className='lg:ml-60'>
      {showForm ? 
        <Form onAddTask={handleAddTask} isOpen={showForm} onClose={handleModal} />
        : 
        <></>
      }
      <TaskList 
        tasks={tasks} 
        onDelete={handleDelete} 
        onEdit={handleEdit} 
        onToggleComplete={handleToggle}
      />
      <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 text-center">
        <button 
          className="px-6 flex items-center py-3 rounded-full bg-slate-900 text-white hover:bg-slate-600 focus:outline-none focus:ring focus:border-slate-300"
          onClick={() => setShowForm(!showForm)}
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default AddTask;
