import React from 'react'
import { useDispatch } from 'react-redux';
import { add_post } from '../../store/reducer/postReducer';
import 'react-toastify/dist/ReactToastify.css';
import s from './style.module.css'
import { ToastContainer, toast } from 'react-toastify';

export default function AddFormPage() {
    const dispatch = useDispatch();

    const notify = () => toast('Пост добавлен');

    const onSubmit = (e) => {
        e.preventDefault();
        const {title, authorId, descr} = e.target;
        dispatch(add_post(title.value, authorId.value, descr.value));
        notify();
        title.value = '';
        descr.value = '';
        authorId.value = '';
    }
  return (
    <div className={s.container}>
        <h1>Добавление нового поста</h1>
        <form className={s.form} onSubmit={onSubmit} >
            <div className={s.blok1}>
                <input type="text" name='title' placeholder='Заголовок' required/>
                <input type="text" name='authorId' placeholder='ID автора' required/>
                <input className={s.submit} type="submit"  value='Добавить'/>
            </div>
            <div className={s.blok2}>
                {/* <input type="text" required placeholder='' /> */}
                <textarea name="descr" cols="30" rows="6" placeholder='Текст поста'></textarea>
            </div>
            <ToastContainer autoClose={1000} theme='light' hideProgressBar={true} />
        </form>

    </div>
  )
}
