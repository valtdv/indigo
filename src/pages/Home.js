import React, { useContext } from 'react';
import { UserContext } from '../states/User';
import axios from 'axios';
import TopMenu from '../components/TopMenu';
import Entry from '../components/Entry'
import Footer from '../components/Footer';
import '../assets/styles/pages/Home.css'

const Home = () => {
  const { user, posts, setPosts } = useContext(UserContext)

  const loadPosts = () => {
    if (!window.hasPost) {
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        const data = res.data;
        const id = user.id
        let filteredData = data.filter( post => post.userId === id);
        filteredData = filteredData.slice(0, 5);
        setPosts(filteredData)
        window.hasPost = true
      }) 
    }
  }

  loadPosts()

  return (
    <div className='home'>
      <header>
        <TopMenu />
      </header>
      <h1 className='home__title title title--big title--uppercase'>Home</h1>
      <div className='home__posts-container'>
      {
        posts.map((post, index) => {
          return <Entry key={index} id= {post.id} title={post.title} author={user.name.split(' ')[0]} />
        })
      }
      </div>
      <Footer />
    </div>
  )
}

export default Home;
