import React, { useState, useEffect } from 'react'
import { IPost } from '../models/IPost'
import { postAPI } from '../sevices/PostService'
import PostItem from './PostItem'

const PostContainer2 = () => {
  const [limit, setLimit] = useState(5)
  const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(limit)
  const [updatePost] = postAPI.useUpdatePostMutation()
  const [deletePost] = postAPI.useDeletePostMutation()

  useEffect(() => {
    setTimeout(() => {
      setLimit(10)
    }, 2000)
  }, [])

  const handleRemove = (post: IPost) => {
    deletePost(post)
  }
  const handleUpdate = (post: IPost) => {
    updatePost(post)
  }

  return (
    <div>
      <div className="post__list">
        {isLoading && <p>Загружаю...</p>}
        {error && <p>Произошла ошибка</p>}
        {posts &&
          posts.map((post) => (
            <PostItem
              remove={handleRemove}
              update={handleUpdate}
              key={post.id}
              post={post}
            />
          ))}
      </div>
    </div>
  )
}

export default PostContainer2
