import {useState} from "react";

type Action =
  |{type: "ADD"; payload: string}
  |{type: "DELETE"; payload: number}

type TodoFormProps = {
  dispatch: React.Dispatch<Action>
}



const todoForm = ({ dispatch }: TodoFormProps) => {

  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim() !== "") {
      dispatch({type: "ADD", payload: text})
      setText("")
    }
  }
  return (
    <>
      <form
        className={"flex gap-4 mb-4 justify-center mt-4"}
        onSubmit={handleSubmit}
      >
        <input
          className={"border p-2 rounded-lg"}
          type="text"
          value={text}
          onChange={handleChange}
          placeholder={"New Task..."}/>
        <button
          className={"bg-cf-dark-gray px-4 py-2 rounded text-white "}
          type={"submit"}>Add</button>
      </form>
    </>
  )
}

export default todoForm;