import React from 'react'
import Button from './Button'


const BlogItem = ({onDelete , 
    blog : {title, author, subject, article, objectId}}) =>{
    return (
        <div 
        className= 'ui card'
        style={{width: '75%', padding:'20px'}}
   >
       <div className='content'>
           <div className='header'>{title}</div>
           
           <br />
           <span style={{fontWeight:'bold' , color:'3b3b3b'}}>
           <div className='meta'>Author: {author}</div>
           </span>
           <span style={{fontWeight:'bold' , color:'3b3b3b'}}>
           <div className='meta'>Subject: {subject}</div>
           </span>
           <hr />
           <div className='description'>{article}</div>
            {/* <Button  /> */}
        <Button className="ui primary button" style={{margin:'10px 15px'}} 
            onClick={() =>{
                return onDelete(objectId)
            }}
            >
            Delete
        </Button>   
        <Button className="ui green button" style={{margin:'10px 15px'}} 
            onClick={() =>{
                return console.log(objectId)
            }}
            >
            Update ID
        </Button> 
       </div>
   </div>
       
    )
}
export default BlogItem;
