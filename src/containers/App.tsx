import { inject, observer } from "mobx-react";
import React, { FormEvent, useEffect, useState } from "react";
import "../App.css";
import Form from "../components/Form";
import TodoList from "../components/TodoList";
import { StyledList } from "../style/todolist";

interface Props {
  store?: any;
}
function App({ store }: Props) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(store.Todo);
  }, []);
  const handleSearch = (e: FormEvent<HTMLInputElement>) => {
    const filteredProducts = store.Todo.filter((product: any) => {
      return (
        String(product.name).toLowerCase().match(e.currentTarget.value) ||
        String(product.details).toLowerCase().match(e.currentTarget.value)
      );
    });

    setItems(filteredProducts);
  };

  return (
    <div className="App">
      <Form store={store} />
      <div>
        <input placeholder="Search Todo" type="text" onChange={handleSearch} />
      </div>
      <StyledList>
        {items.map((todo: any, i: any) => (
          <TodoList todo={todo} key={i} />
        ))}
      </StyledList>
    </div>
  );
}

export default inject("store")(observer(App));
