import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import List from './List';
import Navbar from './Navbar';
import AddItem from './AddItem';
import Update from './Update';

function App() {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);

  useEffect(() => {
    // Fetch todos from the API or any other data source
    // and set them in the todos state
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => setTodos(data));
  }, []);

  const handleAddTodo = newTodo => {
    // Add the new todo item to the todos state
    setTodos([...todos, newTodo]);
  };

  const handleUpdateTodo = updatedTodo => {
    // Find the index of the updated todo item
    const index = todos.findIndex(todo => todo.id === updatedTodo.id);
    if (index !== -1) {
      // Update the todo item in the todos state
      const updatedTodos = [...todos];
      updatedTodos[index] = updatedTodo;
      setTodos(updatedTodos);
    }
  };

  const handleEditTodo = todo => {
    // Set the selected todo item for updating
    setSelectedTodo(todo);
  };

  const handleDeleteTodo = (todoId) => {
    // Send a DELETE request to the API endpoint to delete the todo item
    fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          // Remove the deleted todo item from the todos state
          const updatedTodos = todos.filter((todo) => todo.id !== todoId);
          setTodos(updatedTodos);
          alert('Delete successful');
        } else {
          throw new Error('Failed to delete todo item');
        }
      })
      .catch((error) => {
        console.error(error);
        alert('Failed to delete todo item');
      });
  };
  

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<List todos={todos} onEditTodo={handleEditTodo} />}
          />
          <Route
            path="/add"
            element={<AddItem onAddTodo={handleAddTodo} />}
          />
          <Route
            path="/update/:id"
            element={<Update todos={todos} onUpdateTodo={handleUpdateTodo} />}
          />

          <Route
            path="/delete/:id"
            element={<List todos={todos} onDeleteTodo={handleDeleteTodo} />}
          />



        </Routes>
      </Router>
    </div>
  );
}

export default App;
