import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './style.module.css';

export default function Nav() {
const isActive = ({isActive}) => isActive ? s.active : '';

    const links = [
        {id: 1, label: 'Все посты', to: '/'},
        {id: 2, label: 'Добавить пост', to: '/addform'}
    ]
  return (
    <nav className={s.nav}>
       {
        links.map(({id, label, to}) => <NavLink className={isActive} key={id} to={to} > {label} </NavLink>)
       }
    </nav>
  )
}
