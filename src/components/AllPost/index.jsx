import React from 'react';
import { useSelector } from 'react-redux';
import PostItem from '../PostItem';
import s from './style.module.css'

const AllPost = () => {
  const post = useSelector(({posts}) => posts)
  return (
    <div className={s.container}>
      {
        post.map(item => <PostItem key={item.id} {...item} />)
      }
    </div>
  );
};

export default  AllPost;
