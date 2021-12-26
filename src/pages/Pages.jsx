import React, { useEffect,  useState } from 'react';
import PostService from "../API/PostService";
import { usePosts } from "../hooks/usePosts";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import MyButton from "../components/UI/Button/MyButton";
import PostForm from "../components/PostForm";
import MyModal from "../components/UI/MyModal/MyModal";
import PostFilter from "../components/PostFilter";
import PostsList from "../components/PostsList";
import Loader from "../components/UI/Loader/Loader";
import Pagination from "../components/UI/pagination/Pagination";

function Pages() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)



  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
    const totalCount = (response.headers['x-total-count']);
    setTotalPages(getPageCount(totalCount, limit))
  })
  useEffect(() => {
    fetchPosts()
  }, [page])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  const changePage = (page) => {
    setPage(page)
  }

  return (
    <div className='App'>
      <MyButton style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal} >
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0px' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h1>Произошла ошибка `${postError}`</h1>}
      {isPostLoading
        ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}><Loader /></div>
        : <PostsList remove={removePost} posts={sortedAndSearchedPosts} title={'Список постов JS'} />
      }
      <Pagination
        changePage={changePage}
        page={page}
        totalPages={totalPages} />
    </div>
  );
}

export default Pages;
