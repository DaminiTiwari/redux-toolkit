import React from 'react'
import { useSelector } from 'react-redux';

const Counter = () => {
    let count  = useSelector(state=> state.counter.count);

  return (
    <div>
    {count}
    </div>
  )
}

export default Counter;