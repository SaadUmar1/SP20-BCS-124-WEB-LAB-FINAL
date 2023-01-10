import React from ‘react’;
import “./App.css”;
import TodoInput from “./components/TodoInput”;
import TodoItem from “./components/TodoItem”;
function App() const [todoItems, setTodoItems] = React.useState(
    [{todo: 'Clean the house',
    complete: false},
    {todo: 'Do Laundry',
    complete: false},
    {todo: 'Clean the car',
    complete: false}])
    const createTodoItem = (todo) => {
        const newTodoItems = [...todoItems, { todo, complete: false }];
        setTodoItems(newTodoItems);
        };

        const deleteTodoItem = (index) => {
            const newTodoItems = [...todoItems]
            newTodoItems.splice(index, 1)
            setTodoItems(newTodoItems)
            };
            const completeTodoItem = (index) => {
                const newTodoItems = [...todoItems];
                newTodoItems[index].complete === false
                ? (newTodoItems[index].complete = true)
                : (newTodoItems[index].complete = false);
                setTodoItems(newTodoItems)
                };
    return (
        <div className=”app”>
        <TodoInput />
        {todoItems.map((item, index) => (
        <TodoItem key={index} index={index} item={item} />
        ))}
        </div>
        );

        
            return (
            <div className="app">
            <TodoInput createTodoItem={createTodoItem} />
            {todoItems.map((item, index) => (
            <TodoItem key={index} index={index} item={item} />
            ))}
            </div>
            );
    {
    
return (
<div className=”app”>
<TodoInput />
<TodoItem />
</div>
);
}
export default App;