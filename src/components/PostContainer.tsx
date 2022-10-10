import React from 'react'
import { IPost } from '../models/IPost'
import { postAPI } from '../sevices/PostService'
import PostItem from './PostItem'

const PostContainer = () => {
  const {
    data: posts,
    error,
    isLoading,
  } = postAPI.useFetchAllPostsQuery(100, { pollingInterval: 5000 })
  const [createPost] = postAPI.useCreatePostMutation()
  const [updatePost] = postAPI.useUpdatePostMutation()
  const [deletePost] = postAPI.useDeletePostMutation()

  const handleCreate = async () => {
    const title = prompt()
    if (!title) return
    await createPost({ title, body: title } as IPost)
  }

  const handleRemove = (post: IPost) => {
    deletePost(post)
  }
  const handleUpdate = (post: IPost) => {
    updatePost(post)
  }

  return (
    <div>
      <div className="post__list">
        <button onClick={handleCreate}>Add new post</button>
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

export default PostContainer
