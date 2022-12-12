import React from 'react'

export const TodoItem = (props) => {

  const {id,done,onCheck,text}=props;

  // チェック時の関数
  const onCheckHandler=()=>{
    onCheck(id);
  }

  return (
    <div>
      <input type="checkbox" checked={done} onChange={onCheckHandler} />
      <span>{text}</span>
    </div>
  )
}
