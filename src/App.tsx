import React, { useEffect } from 'react'
import './App.css'
import PostContainer from './components/PostContainer'
import PostContainer2 from './components/PostContainer2'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { fetchUsers } from './store/reducers/ActionCreators'

function App() {
  const dispatch = useAppDispatch()
  const { error, isLoading, users } = useAppSelector(
    (store) => store.userReducer,
  )
  // const some = useAppSelector((store) => store.postAPI)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  // useEffect(() => {
  //   console.log(some)
  // }, [some])

  return (
    <div className="App">
      {isLoading && <h1>Идет загрука...</h1>}
      {error && <h1>{error}</h1>}
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            <p>{u.name}</p>
          </li>
        ))}
      </ul>
      <hr />
      <hr />
      <div style={{ display: 'flex' }}>
        <PostContainer />
        <PostContainer2 />
      </div>
    </div>
  )
}

export default App
