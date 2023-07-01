import React, { useState } from 'react';

const AddItem = ({ onAddTodo }) => {
  const [newTodo, setNewTodo] = useState({
    title: '',
    body: '',
    userId: '',
  });

  const addTodo = () => {
    if (newTodo.title.trim() === '' || newTodo.body.trim() === '' || newTodo.userId.trim() === '') {
      return;
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(newTodo),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      // .then((json) => console.log(json));
      .then(json => {
        const updatedTodo = { ...newTodo, id: json.id };
        console.log('Added Todo:', updatedTodo)
        onAddTodo(updatedTodo);
      });

    setNewTodo({
      title: '',
      body: '',
      userId: '',
    });

    
  };

  return (
    <div className='nav'>
      <h1>Add Todo</h1>
      <input
        type='text'
        value={newTodo.title}
        onChange={event => setNewTodo({ ...newTodo, title: event.target.value })}
        placeholder='Title'
      />
      <input
        type='text'
        value={newTodo.body}
        onChange={event => setNewTodo({ ...newTodo, body: event.target.value })}
        placeholder='Body'
      />
      <input
        type='text'
        value={newTodo.userId}
        onChange={event => setNewTodo({ ...newTodo, userId: event.target.value })}
        placeholder='User ID'
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default AddItem;
