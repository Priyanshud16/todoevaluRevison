import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TodoItem from './TodoItem'
import TodoInput from './TodoInput'

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<TodoItem/>}/>
            <Route path='/create' element={<TodoInput/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes