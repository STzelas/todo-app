type TodoProps = {
  id: number;
  text: string;
  completed: boolean;
}

type Action =
  |{type: "ADD"; payload: string}
  |{type: "DELETE"; payload: number}
  |{type: "EDIT"; payload: {id: number, newText: string}}
  |{type: "COMPLETE"; payload: number}
  |{type: "CLEAR_ALL"}

type TodoFormProps = {
  dispatch: React.Dispatch<Action>
  inputRef: React.RefObject<HTMLInputElement | null>
}

type TodoListProps = {
  todos: TodoProps[]
  dispatch: React.Dispatch<Action>
  editInputRef: React.RefObject<HTMLInputElement | null>
  inputRef: React.RefObject<HTMLInputElement | null>
}

export type { TodoProps, TodoFormProps, TodoListProps, Action}