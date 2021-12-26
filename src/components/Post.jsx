import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/App.css'
import MyButton from './UI/Button/MyButton'
const Post = ({ remove, post }) => {
   const navigate = useNavigate()

   return (
      <div className='post'>
         <div className='post__content'>
            <strong>{post.id}. {post.title}</strong>
            <div>
               {post.body}
            </div>
         </div>
         <div className='post__btns'>
            <MyButton style={{ margin: '0 5px' }}
               onClick={() => navigate(`/posts/${post.id}`)}>
               Открыть</MyButton>
            <MyButton onClick={() => remove(post)}> Удалить</MyButton>
         </div>
      </div>
   )
}

export default Post
