import React from 'react';


const ArticlePost = (props) =>{

  return(
    <>
      <article className='card mt-4 mb-4'>
        <div className='card-header'>
          Article.Title : {props.title}
        </div>
        <div className='card-body'>
          Article.Body : {props.content}
        </div>
      </article>
    </>
  )
}

export default ArticlePost;