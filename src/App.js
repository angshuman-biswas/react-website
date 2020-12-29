import './App.css';
import React, { useEffect } from 'react';
import PostList from './components/PostList';


function App() {

  useEffect(() => {
  }, []);

  return (
    <div className="App">
      <PostList/>
    </div>
  );
}

export default App;
