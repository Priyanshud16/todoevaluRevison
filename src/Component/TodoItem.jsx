import React, { useState } from 'react';

function TodoItem({ id, title, status, Assigned, Completion, HandleDelete, HandleUpdate, description }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  const handleTitleClick = () => {
    setIsEditing(true);
  };

  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleSave = () => {
    // Update the todo item
    HandleUpdate(id, status, editedTitle, Assigned, Completion, description);
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Cancel editing
    setIsEditing(false);
    // Reset edited title
    setEditedTitle(title);
  };

  return (
    <div style={{ border: '1px solid black', padding: '10px', width: '20%', marginTop: '30px' }}>
      {isEditing ? (
        <>
          <input type="text" value={editedTitle} onChange={handleTitleChange} />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <p onClick={handleTitleClick}>Title: {title}</p>
          <p onClick={() => HandleUpdate(id, status)}>Status: {status ? "Completed" : "Pending"}</p>
          <p>Assigned: {Assigned}</p>
          <p>Completion: {Completion}</p>
          <p>Description: {description}</p>
          <button onClick={() => HandleDelete(id)}>Delete</button>
        </>
      )}
    </div>
  );
}

export default TodoItem;





























// import React from 'react'

// function TodoItem({title,status,Assigned,Completion,HandleDelete,id,HandleUpdate,description}) {
//   return (
    
//     <div style={{ border: '1px solid black', padding: '10px',width:"20%",marginTop:"30px" }}>
//         <p>Title:{title}</p>
//         <p onClick={()=>HandleUpdate(id,status)}>Status:{status? "Completed" : "Pending"}</p>
//         <p>Assigned:{Assigned}</p>
//         <p>Completion{Completion}</p>
//         <p>description:{description}</p>
//         <button onClick={()=>HandleDelete(id)}>Delete</button>
//     </div>
  
//   )
// }

// export default TodoItem