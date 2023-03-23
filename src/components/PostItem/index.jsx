import React from 'react'
import { useDispatch } from 'react-redux'
import { delete_post } from '../../store/reducer/postReducer';
import s from './style.module.css'

export default function PostItem({id, title, descr}) {
    const dispatch = useDispatch();
  return (
    <div className={s.wrapper}>
      <div>
        <h3>{title}</h3>
        <p>{descr}</p>
      </div>
        
       
        <button onClick={() => dispatch(delete_post(id))}>Удалить</button>
    </div>
  )
}
