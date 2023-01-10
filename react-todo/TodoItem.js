const TodoItem = ({item, index}) => {
    return (
        <div className=”app”>
        <TodoInput createTodoItem={createTodoItem} />
        {todoItems.map((item, index) => (
        <TodoItem key={index} index={index} item={item} deleteTodoItem=
        {deleteTodoItem} />
        ))}
        </div>
        );}
    export default TodoItem