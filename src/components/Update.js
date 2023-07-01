import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Update = ({ todos, onUpdateTodo }) => {
  const { id } = useParams();
  const [updatedTodo, setUpdatedTodo] = useState(null);

  useEffect(() => {
    // Find the todo to be updated based on the provided ID
    const todoToUpdate = todos.find(todo => todo.id === Number(id));
    setUpdatedTodo(todoToUpdate);
  }, [id, todos]);

  const updateTodo = () => {
    if (updatedTodo) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${updatedTodo.id}`, {
        method: 'PUT',
        body: JSON.stringify(updatedTodo),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then(response => response.json())
        .then(json => {
          onUpdateTodo(json);
        });
    }
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUpdatedTodo(prevTodo => ({
      ...prevTodo,
      [name]: value,
    }));
  };

  if (!updatedTodo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Update Todo</h1>
      <input
        type="text"
        name="title"
        value={updatedTodo.title}
        onChange={handleInputChange}
        placeholder="Title"
      />
      <input
        type="text"
        name="body"
        value={updatedTodo.body}
        onChange={handleInputChange}
        placeholder="Body"
      />
      <input
        type="text"
        name="userId"
        value={updatedTodo.userId}
        onChange={handleInputChange}
        placeholder="User ID"
      />
      <button onClick={updateTodo}>Update</button>
    </div>
  );
};

export default Update;
