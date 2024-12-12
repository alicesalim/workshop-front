import { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const loadData = () => {
      fetch('http://localhost:8000/api/tasks')
      .then(response => response.json())
      .then(data => setTasks(data))
      }
      loadData ();
    }, [])

  return (
    <div className="App">
      <header className="App-header">
        {tasks.map(task => (
          <h1 key={task.id}>{task.name} {task.description} {task.due_to} {task.is_completed}</h1>
        ))}
      </header>
      <h1>teste</h1>
    </div>
  );
}

export default App;
