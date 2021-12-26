import React, { useState } from 'react'
import MyButton from './UI/Button/MyButton'
import MyInput from './UI/Input/MyInput'

const PostForm = ({ create }) => {
   const [post, setPost] = useState({ title: '', body: '' })

   const addNewPost = (e) => {
      e.preventDefault();
      const newPost = {
         ...post, id: Date.now()
      }
      create(newPost)
      setPost({ title: '', body: '' })
   }
   return (
      <form>
         <MyInput
            value={post.title}
            type="text"
            placeholder='Название поста'
            onChange={e => setPost({ ...post, title: e.target.value })}
         />
         <MyInput
            value={post.body}
            onChange={e => setPost({ ...post, body: e.target.value })}
            type="text"
            placeholder='Описание поста'
         />
         <MyButton style={{ marginTop: '10px' }} onClick={addNewPost}>Создать пост</MyButton>
      </form>
   )
}

export default PostForm
