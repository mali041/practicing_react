import { Provider } from "react-redux";
import { store } from "../../app/store";
import AddTodo from "./AddTodo";
import Todos from "./Todos";

function ReduxToolkitTodo() {
  return (
    <Provider store={store}>
      <h1>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </Provider>
  );
}

export default ReduxToolkitTodo;
