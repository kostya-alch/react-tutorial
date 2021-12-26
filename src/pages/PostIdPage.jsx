import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService'
import Loader from '../components/UI/Loader/Loader'
import { useFetching } from '../hooks/useFetching'

const PostIdPage = () => {
   const params = useParams()
   const [post, setPost] = useState({})
   const [comments, setComments] = useState([])
   const [fetchPostById, isLoading, error] = useFetching(async () => {
      const response = await PostService.getById(params.id)
      setPost(response.data)
   })
   const [fetchComments, isComLoading, comError] = useFetching(async () => {
      const response = await PostService.getComments(params.id)
      setComments(response.data)
   })

   useEffect(() => {
      fetchPostById(params.id)
      fetchComments(params.id)
   }, [])

   return (
      <div>
         <h1>Вы открыли страницу поста с ID = {params.id}</h1>
         {isLoading
            ? <Loader />
            : <div>{post.id}. {post.title} <div>{post.body}</div></div>
         }
         <h1 style={{ margin: '17px 0px' }}>Комментарии</h1>
         {isComLoading
            ? <Loader />
            : <div>
               {comments.map(comment =>
                  <div style={{ margin: '10px ' }}>
                     <h5>{comment.email}</h5>
                     <div>{comment.body}</div>
                  </div>
               )}
            </div>
         }
      </div>
   )
}

export default PostIdPage
