import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../../features/counter/couterSlice';

const Counter = () => {
    let count  = useSelector(state=> state.counter.count);
    let dispatch = useDispatch();

    const incrementHandler = ()=>{
      dispatch(increment());
    }
    const decrementHandler = ()=>{
      if(count >0 ){
        dispatch(decrement());
      }
    }

    const resetHandler = () => {
      dispatch(reset());
    }

  return (
    <div className="text-3xl font-bold flex flex-col justify-center items-center text-rose-800">
    <button onClick={incrementHandler} 
    className='flex justify-center bg-slate-300 rounded-full px-4 py-2'>+</button>
    {count}
    <button onClick={decrementHandler}
    className='flex justify-center bg-slate-300 rounded-full px-4 py-2'
    >-</button>
    <button onClick={resetHandler}
    className='flex justify-center bg-slate-300 rounded-full px-4 py-2'>Reset</button>
    </div>
  )
}

export default Counter;