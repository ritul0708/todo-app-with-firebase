import React from 'react';
import {BiTrash} from 'react-icons/bi';

const style = {
  li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
  liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
  row: `flex`,
  text: 'ml-2 cursor-pointer',
  textComplete: `ml-2 cursor-pointer line-through`,
  button: `flex item-center cursor-pointer`
}

const Todo = ({todo, toggleComplete, deleteTodo}) => {
  return (
    <li className={todo.completed ? style.liComplete : style.li}>
      <div className={style.row}>
        <input 
          type="checkbox" 
          checked={todo.completed ? "checked" : ""} 
          onChange={() => toggleComplete(todo)}
        />
        <p className={todo.completed ? style.textComplete : style.text}>{todo.text}</p>
      </div>
      <button onClick={() => deleteTodo(todo.id)}>
        {<BiTrash />}
      </button>
    </li>
  )
}

export default Todo