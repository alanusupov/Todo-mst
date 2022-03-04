import React, { useState } from "react";

type Props = {
  store?: any;
};

const Form = ({ store }: Props) => {
  const [todo, setTodo] = useState<Record<string, string>>({});
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTodo({ ...todo, [e.currentTarget.name]: e.currentTarget.value });
  };
  console.log(todo);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo.name) {
      store.add({
        ...todo,
      });

      setTodo({ name: "", details: "" });
    }
  };
  console.log(todo);

  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <label htmlFor="name">Name</label>
        <input
          name="name"
          value={todo["name"]}
          onChange={onChange}
          id="name"
          type="text"
        />

        <label htmlFor="details">Details</label>
        <input
          value={todo["details"]}
          name="details"
          onChange={onChange}
          id="details"
          type="text"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
export default Form;
