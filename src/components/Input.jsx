import React, { useState } from 'react'

export const Input = (props) => {

  const {onAddTodo}=props;

  // input内の値を管理する
  const [text,setText]=useState('');

  // 入力時の関数
  const onChangeHandler=(e)=>{
    setText(e.target.value);
  }

  // 送信時の関数
  const onClickHandler=()=>{
    onAddTodo(text);
    setText('');
  }

  return (
    <div>
      <input type="text" value={text} onChange={onChangeHandler} />
      <button onClick={onClickHandler}>追加</button>
    </div>
  )
}
