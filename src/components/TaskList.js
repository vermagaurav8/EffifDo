"use client"
import React from 'react';
import { AiOutlineCalendar, AiFillEdit, AiFillDelete } from '@/utility/Icons';
import Lottie from 'lottie-react';
import doodle from '@/assets/jsconfig.json'

const TaskList = ({ tasks, onDelete, onEdit, onToggleComplete }) => {

  return (
    <div className="mt-4 ml-5 min-h-screen flex flex-col">
      <h2 className="text-2xl font-semibold mb-10 text-slate-950 sm:text-3xl">Tasks</h2>
      {tasks.length === 0 ? (
        <div className="flex flex-col items-center">
           
            <Lottie animationData={doodle} className="w-96 h-96" />

          <p className="text-slate-500">No tasks available.</p>
          <p className="text-slate-500">Click <b>Add Task</b> to create task.</p>
        </div>
        ):
        (tasks.map((task, index) => (
          <div key={index} className={`border-b shadow-md rounded-md mr-10 border-slate-300 mb-4 pb-4 ${task.isCompleted ? 'bg-green-100' : ''}`}>
            <div className="flex items-center justify-between mt-1 ">
              <div className="flex items-center ml-2 mt-2">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-green-500"
                  defaultChecked={task.isCompleted}
                  onClick={() => onToggleComplete(index)}
                />
                <div className="ml-4">
                  <p className="text-lg font-semibold">
                    {task.title}
                    {task.category && (
                      <span className="ml-2 text-sm text-gray-500">{task.category}</span>
                    )}
                  </p>
                  <div className="flex items-center mt-2">
                    <p className="text-gray-700 mr-4">{task.description}</p>
                    {task.dueDate && (
                      <p className="flex items-center text-gray-700">
                        <AiOutlineCalendar className="mr-1" />
                        {task.dueDate}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center mr-2">
                <button
                  className="px-4 py-2 rounded mr-2"
                  onClick={() => onEdit(index)}
                >
                  <AiFillEdit
                      size={25}
                  />
                </button>
                <button
                  className="px-4 py-2  rounded"
                  onClick={() => onDelete(index)}
                >
                  <AiFillDelete
                      size={25}
                  />
                </button>
              </div>
            </div>
          </div>
        )))}
    </div>
  );
};

export default TaskList;
