// src/pages/CompletedTasks.jsx
import React from 'react';
import Tasks from '../components/Tasks'; 

function CompletedTasks() {
  return (
    <div>
      <Tasks showCompleted={true} /> 
    </div>
  );
}

export default CompletedTasks;

