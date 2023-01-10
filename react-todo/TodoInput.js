import React from 'react'
const TodoInput = ({createTodoItem}) => {
const [value, setValue] = React.useState("")
return (
    <form onSubmit={handleSubmit}>
    <input
    type=”text”
    placeholder=”Create todo”
    value={value}
    onChange={(e) => setValue(e.target.value)}
    />
    <button onClick={handleSubmit}>Create</button>
    </form>
    )}
export default TodoInput