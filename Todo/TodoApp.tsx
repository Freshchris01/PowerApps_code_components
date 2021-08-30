import * as React from "react";
import { useState } from "react";

interface IItem {
  text: string
  id: number
}

function TodoApp() {
  const [items, setItems] = useState<IItem[]>([]);
  const [text, setText] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.length === 0) {
      return;
    }
    const newItem = {
      text: text,
      id: Date.now()
    };
    setItems([...items, newItem]);
    setText("");
  }


  return (
    <div>
      <h3>TODO</h3>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-todo">
          What needs to be done?
        </label>
        <input
          id="new-todo"
          onChange={handleChange}
          value={text}
        />
        <button>
          Add #{items.length + 1}
        </button>
      </form>
    </div>
  );
}

export default TodoApp;