import React, { useState } from 'react';
import { Input } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'

function TodoInput({ HandleAdd }) {
  const [formData, setFormData] = useState({
    title: '',
    assignee: '',
    date: '',
    description:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    HandleAdd(formData); // Pass formData directly to HandleAdd
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{width:"40%"}}>
        <Input type="text" placeholder="Enter Your Title" value={formData.title} name="title" onChange={handleChange}  />
        <br />
        <br />
        <Input type="text" placeholder="Assignee" value={formData.assignee} name="assignee" onChange={handleChange}  />
        <br />
        <br />
        <Input type="date" value={formData.date} name="date" onChange={handleChange} />
        <br />
        <br />
        <Input type="text" value={formData.description} name='description'placeholder='Enter Description' onChange={handleChange} />
        <Button id='btn' type="submit" ml={250} mt={50}>Submit</Button>
      </form>
    </div>
  );
}

export default TodoInput;