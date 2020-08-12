import React, { useState } from 'react';
import {} from 'react-router-dom';
import ToDoList from './Components/ToDoList';
import NewToDo from './Components/NewToDo';
import { Todo } from './Todo.model';

const App: React.FC = () => {
  const [toDos, setToDos] = useState<Todo[]>([]);

  const HandleAddingTodos = (text: string) => {
    setToDos((prevToDos) => [
      ...prevToDos,
      { id: Math.random().toString(), text },
    ]);
  };
  const handleDelete = (todoId: string) => {
    setToDos((prevToDos) => {
      return prevToDos.filter((item) => item.id !== todoId);
    });
  };
  return (
    <div className=''>
      <NewToDo onAddTodo={HandleAddingTodos} />
      <ToDoList items={toDos} onDeleteToDos={handleDelete} />
    </div>
  );
};

export default App;
