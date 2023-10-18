import React, {useState, useEffect} from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const Form = ({onAddTask, isOpen, onClose}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [category, setCategory] = useState(''); 
    const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!title.trim()) {
      setError('Title cannot be empty');
      return;
    }

    if (!description.trim()) {
      setError('Description cannot be empty');
      return;
    }

    // Check due date only if provided
    if (dueDate) {
      const today = new Date().toISOString().split('T')[0];
      if (dueDate < today) {
        setError('Due date cannot be in the past');
        return;
      }
    }

    // If all validations pass, add the task to the tasks array
    const newTask = {
      title,
      description,
      dueDate,
      isCompleted: false,
      category,
    };

    onAddTask(newTask);

    // Reset form and error state
    setTitle('');
    setDescription('');
    setDueDate('');
    setCategory('');
    setError('');
  };


  return (
<Modal
  open={isOpen}
  onClose={onClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box
    sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '80%', // Adjust the width as needed
      maxWidth: '400px', // Set a max-width if desired
      bgcolor: 'white',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      p: 4,
      borderRadius: '8px',
    }}
  >
    <form className="space-y-4" onSubmit={handleSubmit}>
      {error && <div className="text-red-500">{error}</div>}
      <div>
        <label className="block text-sm font-semibold text-gray-600">Title:</label>
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-600">Description:</label>
        <textarea
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-600">Due Date (optional):</label>
        <input
          type="date"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-600">Category:</label>
        <select
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">No choice</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Wishlist">Wishlist</option>
        </select>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Submit
        </button>
      </div>
    </form>
  </Box>
</Modal>
  )
}

export default Form