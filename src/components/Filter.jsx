import React from 'react'

export const Filter = (props) => {

  const {onFilter}=props;

  const onClickHandler=(value)=>{
    onFilter(value);
  }

  return (
    <div>
      <button onClick={()=>{onClickHandler('ALL')}}>ALL</button>
      <br />
      <button onClick={()=>{onClickHandler('TODO')}}>TODO</button>
      <br />
      <button onClick={()=>{onClickHandler('DONE')}}>DONE</button>
    </div>
  )
}
