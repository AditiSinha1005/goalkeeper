import React from "react";
import CancelIcon from '@mui/icons-material/Cancel';
const handleDelete=(props)=>{
  
  props.onSelect(props.id)
  
}
const Todo=(props)=>{
    return (
        <>
        <div className="todostyl">
          <li><CancelIcon className="cancel" onClick={()=>{handleDelete(props)}}/>{props.text}</li>
          </div>
        </>
    )
}
export default Todo;