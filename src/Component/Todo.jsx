import React, { useEffect, useState } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import axios from 'axios';

function Todo() {
  const [todo, setTodo] = useState([]);
 
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let { data } = await axios({
        method: "GET",
        baseURL: "http://localhost:8080",
        url: `/todo`
      });
     
      setTodo(data);
      
    } catch (error) {
      console.log(error);
    }
  };

  const HandleAdd = (formData) => { // Receive formData directly
    axios({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      url: '/todo',
      data: formData,
      baseURL: 'http://localhost:8080'
    })
      .then(() => getData())
      .catch((error) => console.log(error));
  };
  const HandleDelete=(id)=>{
    axios({
      method:"DELETE",
      url:`/todo/${id}`,
      baseURL:"http://localhost:8080",

    }).then(()=>getData())
    .catch((error)=>console.log(error))
  }

const HandleUpdate=(id,status)=>{
axios({
  method:"PATCH",
  url:`/todo/${id}`,
  baseURL:"http://localhost:8080",
  data:{status:!status}

})
.then(()=>getData())
.catch((error)=>console.log(error))
}
{console.log(todo)}
  return (
    <div>
      <div>
        <TodoInput HandleAdd={HandleAdd} />
      </div>
      <div>
        {todo.map((ele) => {
          return <TodoItem {...ele} HandleDelete={HandleDelete} HandleUpdate={HandleUpdate}/>;
        })}
      </div>
     
    </div>
  );
}

export default Todo;