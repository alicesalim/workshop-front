import React from 'react';
import Tasks from '../components/Tasks';

function Home() {
  return (
    <div>
      <Tasks showCompleted={false} /> 
    </div>
  );
}

export default Home;
