type TodoProps = {
  id: number;
  text: string;
}

type Action =
  |{type: "ADD"; payload: string}
  |{type: "DELETE"; payload: number}

type TodoFormProps = {
  dispatch: React.Dispatch<Action>
}

type TodoListProps = {
  todos: TodoProps[]
  dispatch: React.Dispatch<Action>
}

export type { TodoProps, TodoFormProps, TodoListProps, Action}