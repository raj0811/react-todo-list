import React, { useEffect, useState } from 'react';
import styles from '../styles/List.module.css'

const List = ({ onDeleteTodo }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => setTodos(data));
  }, []);

  const handleDelete = id => {
    // Find the todo item to be deleted
    const deletedTodo = todos.find(todo => todo.id === id);

    // Log the deleted item
    console.log('Deleted Item:', deletedTodo);

    // Call the onDeleteTodo function with the ID of the todo to be deleted
    onDeleteTodo(id);
  };

  return (
    <div className={styles.body}>
      <div className={styles.lists}>
        <ul className={styles.todos}>
          {todos.map(todo => (
            <li className={styles.all} key={todo.id}>
              
              <p>

                {todo.title}
              </p>
              
              <button className={styles.btn} onClick={() => handleDelete(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default List;
