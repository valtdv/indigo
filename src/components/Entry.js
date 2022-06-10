import React from 'react';
import { Link } from "react-router-dom";
import '../assets/styles/components/Entry.css'

const Entry = ({id, title, author}) => {
  return (
    <Link to='/post' state={{id: `${id}` }}>
      <div className='entry'>
        <div className='entry__info'>
          <h3 className='entry__title title'>{title}</h3>
          <p className='entry__author'>By {author}</p>
        </div>
        <div className='entry__date-container'>
          <p className='entry__date'>Dec 23, 2020</p>
        </div>
      </div>
    </Link>
  )
}

export default Entry
