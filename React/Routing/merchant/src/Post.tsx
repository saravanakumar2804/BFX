import React from 'react'
import {Link} from 'react-router-dom';

const Post = () => {
  return (
    <main>
       <h1> Post</h1>
     <Link to="/Post/1">1 st Post</Link>
     <br />
    <Link to="/Post/2">2 st Post</Link>
    <br />
    <Link to="/Post/3">3 st Post</Link>
    </main>
   
  )
}

export default Post