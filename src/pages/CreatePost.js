import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../states/User';
import TopMenu from '../components/TopMenu';
import Footer from '../components/Footer';
import '../assets/styles/pages/CreatePost.css'

const CreatePost = () => {
  const { register, handleSubmit } = useForm();
  const { user, posts, setPosts } = useContext(UserContext)

  const submitPost = (data) => {
    let id = posts.at(-1).id + 1
    let tags = ""
    if (data.nature) {
      tags = tags + "#Nature "
    }
    if (data.tech) {
      tags = tags + "#Technology "
    }
    if (data.business) {
      tags = tags + "#Business "
    }
    if (data.sports) {
      tags = tags + "#Sports "
    }

    const newPost = {
      userId: user.id,
      id: id,
      title: data.title,
      body: data.body,
      tags: tags,
    }

    const arr = [...posts, newPost]
    setPosts(arr)
  }

  return (
    <div className='create-post'>
      <header>
        <TopMenu />
      </header>
      <h1 className='create-post__title title title--big title--uppercase'>Create post</h1>
      <form className='create-post__form form' onSubmit={handleSubmit(submitPost)}>
        <div className='form__container'>
          <label className='form__label' htmlFor='title'>Title</label>
          <input className='form__input' id='title' type="text" {...register("title")} />
        </div>
        <div className='form__container'>
          <label className='form__label' htmlFor='content'>Content</label>
          <textarea className='form__text-area' id='content' {...register("body")}></textarea>
        </div>
        <h4 className='form__title'>Tags</h4>
        <div className='form-container--tags'>
          <div className='form__tag'>
            <input id='nature' className='form__check-box' type="checkbox" {...register("nature")} />
            <label className='form__label' htmlFor='nature'>Nature</label>
          </div>
          <div className='form__tag'>
            <input id='tech' className='form__check-box' type="checkbox" {...register("tech")} />
            <label className='form__label' htmlFor='tech'>Technology</label>
          </div>
          <div className='form__tag'>
            <input id='business' className='form__check-box' type="checkbox" {...register("business")} />
            <label className='form__label' htmlFor='business'>Business</label>
          </div>
          <div className='form__tag'>
            <input id='sports' className='form__check-box' type="checkbox" {...register("sports")} />
            <label className='form__label' htmlFor='sports'>Sports</label>
          </div>
        </div>
        <input className='form__submit btn' type="submit" value="Create" />
      </form>
      <Footer />
    </div>
  )
}

export default CreatePost;
