import {useEffect, useState} from "react";
import type {TodoFormProps} from "../types.ts";


const ToDoForm = ({ dispatch, inputRef }: TodoFormProps) => {

  const [text, setText] = useState("");

  // const inputRef = useRef<HTMLInputElement>(null);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim() !== "") {
      dispatch({type: "ADD", payload: text})
      setText("")
      inputRef.current?.focus()
    }
  }

  const handleNoContent = () => {
    if (text.length === 0)
      inputRef.current?.focus()
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

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
          ref={inputRef}
          onChange={handleChange}
          placeholder={"New Task..."}/>
        <button
          className={"bg-cf-dark-gray px-4 py-2 rounded text-white "}
          type={"submit"}
          onClick={handleNoContent}
        >
          Add
        </button>
      </form>
    </>
  )
}

export default ToDoForm;