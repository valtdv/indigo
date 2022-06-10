import React, { useContext } from 'react';
import { UserContext } from '../states/User';
import { useLocation } from 'react-router-dom'
import TopMenu from '../components/TopMenu';
import Footer from '../components/Footer';
import "../assets/styles/pages/Post.css"

const Post = () => {
  const { user, posts } = useContext(UserContext)

  const location = useLocation()
  const { id } = location.state

  const post = posts.find(post => post.id === parseInt(id))

  return (
   <div className='post'>
     <header>
       <TopMenu />
     </header>
     <div className='post__main'>
      <h1 className='post__title title title--big'>{post.title}</h1>
      <p className='post__author'>By {user.name.split(' ')[0]}</p>
      <p className='post__date'>DEC 23, 2020</p>
      <p className='post__content'>
        {post.body}
      </p>
      <div className='post__tag-container'>
        <h3 className='post__tag-title title'>Tags</h3>
        <p className='post__tags'>{post.tags ? post.tags : "#Technology #Business"}</p>
      </div>
     </div>
     <Footer />
   </div>
 )
}

export default Post
