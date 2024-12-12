import React, { useEffect, useState } from 'react';
import style from './Tasks.module.css';

function Tasks({ showCompleted }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/tasks');
        const data = await response.json();

        if (showCompleted) {
          setTasks(data.filter(task => task.is_completed)); 
        } else {
          setTasks(data.filter(task => !task.is_completed)); 
        }
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    loadData();
  }, [showCompleted]); 

  return (
    <div className={style.TaskList}>
      <h2>{showCompleted ? "Feitas" : "To do"}</h2>
      {tasks.length === 0 ? (
        <p>No tasks to show!</p>
      ) : (
        tasks.map((task) => (
          <div key={task.id} className={style.TaskItem}>
            <h3>{task.name}</h3>
            <p>{task.description}</p>
            <p>Due: {task.due_to}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Tasks;
