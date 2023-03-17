import React from 'react'
import PostCards from '../PostCards/PostCards'
import './Posts.css'
const Posts = () => {
  return (
    <div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="fresh-recomendation-cards cards">
            <div className="fresh-recomendation-card" > <PostCards/> 
            </div>
           
            </div> 
      </div> 
    </div>
  )
}

export default Posts
