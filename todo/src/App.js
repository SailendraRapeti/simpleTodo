//import logo from './logo.svg';
import './App.css';
import React,{ useState } from 'react';
import Item from './item';
const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]
 
function App() {
  const [todo,setTodo]=useState(initialTodosList)

  const onDelete=(id)=>{
    const final=todo.filter(each=>
      each.id !== id)
      console.log(final)
      setTodo(final)
  
   }
  
  return (
    <div>
      <ul>
        {todo.map((each)=>{
          return <Item each={each} key={each.id} onDelete={onDelete}/>
          

        })}
      </ul>
      
    </div>
  );
}

export default App;
