import React, { useRef } from 'react';
import './NewTodo.css';

type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
};

const NewToDo: React.FC<NewTodoProps> = (props) => {∆
  const textInputRef = useRef<HTMLInputElement>(null);

  const ToDosHandleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={ToDosHandleSubmit}>
      <div className='form-control'>
        <label htmlFor='todo-text'> Todo Text</label>
        <input type='text' id='todo-text' ref={textInputRef} />
      </div>
      <button type='submit'>Add TODO</button>
    </form>
  );
};

export default NewToDo;
