import React from 'react'
import blos from '../Assest/Blog.jpg'
import './blog.css'

const BlogPost = () => {
  return (
     <div className='container feat'>
      <div className="row">
       <div className="col-md-6">
       <img src={blos} alt="" />
      </div>
      <div className="col-md-6 feat">
        <h1>Expect news from all around the<span className='dee'> World</span> </h1>
        <p>Anticipate gists from all corners around the world, with our <span className='dee'>NoteApp</span> you will get authenticated news from reliable sources, news from all sectors, from Politics, Entertainment, Football, etc </p>
      </div>
     
      </div>
    </div>
  )
}

export default BlogPost
