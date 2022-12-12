import React, { useState } from 'react'
import { Filter } from './Filter';
import { Input } from './Input';
import { TodoItem } from './TodoItem';

// ランダムにidを生成する関数
const getKey=()=>Math.random().toString(32).substring(2);

export const Todo = () => {

  // 全タスクをここに管理
  const [items,setItems]=useState([]);

  // filter時のタスクをここに管理
  const [filter,setFilter]=useState('ALL');

  // Inputコンポーネントに渡すinput追加時の処理
  const onAddTodo=(text)=>{
    setItems([...items,{id: getKey(),text: text,done: false}]);
  }

  // TodoItemコンポーネントに渡すチェック動作時の処理
  const onCheck=(id)=>{
    const newItems=[...items];
    newItems.map((newItem) => {
      if(newItem.id===id) {
        newItem.done= !newItem.done;
      }
      return newItem;
    })
    setItems(newItems);
  }

  // Filterコンポーネントに渡すfilter変更時の処理
  const onFilter=(value)=>{
    setFilter(value);
  }

  // 
  const displayItems=items.filter((displayItem)=>{
    if (filter==='ALL') {
      return displayItem;
    } 
    if (filter==='TODO') {
      return displayItem.done===false;
    } 
    if (filter==='DONE') {
      return displayItem.done===true;
    }
    return alert('err');
  })

  return (
    <div>
      <Input onAddTodo={onAddTodo} />
      <Filter onFilter={onFilter} />
      {displayItems.map((item)=>{
        return (
          <TodoItem key={item.id} id={item.id} done={item.done} onCheck={onCheck} text={item.text} />
        )
      })}
    </div>
  )
}
