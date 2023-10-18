"use client"
import React, { useState, useEffect } from 'react';
import Form from './Form';
import TaskList from './TaskList';

const AddTask = () => {
  const [tasks, setTasks] = useState(getTasks());
  const [showForm, setShowForm] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editedTask, setEditedTask] = useState(null);

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
    if (isEdit) {
      // Editing an existing task
      const updatedTasks = [...tasks];
      updatedTasks[editedTask.index] = newTask;
      setTasks(updatedTasks);
      setEditedTask(null);
      setIsEdit(false);
      setShowForm(!showForm)
    } else {
      // Adding a new task
      setTasks([...tasks, newTask]);
      setShowForm(!showForm)
    }
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
    setIsEdit(true);
    setEditedTask({
      task: tasks[index],
      index: index,
    });
    setShowForm(true);
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
        <Form 
          onAddTask={handleAddTask} 
          isOpen={showForm} 
          onClose={handleModal} 
          editedTask={editedTask?.task}
        />
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
