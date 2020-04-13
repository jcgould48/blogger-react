import React, {Component} from 'react';

class Form extends Component{
    constructor(){
        super()
        this.state = {
            blog:{title:'', 
            subject:'', 
            author:'', 
            article:'', 
            objectId: new Date()}, //this part is a hack to avoid warning while we construct without DB
            blogs:[],
        }
    }

    handleChange = (event) => {
        let updatedBlog = {...this.state.blog}
        updatedBlog[event.target.name] =event.target.value;
        this.setState({blog:updatedBlog}, () =>{
            console.log(updatedBlog);
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        let emptyBlog = {title:'', author:'', subject:'', article:''}
        let blogState = [...this.state.blogs];

        blogState.unshift(this.state.blog);
        this.setState({blog:emptyBlog, blogs:blogState});
        event.target.reset();
    }

    render() {
        return(
        <div style={{margin:'40px'}}>
            <form onSubmit={this.handleSubmit} className='ui form'>
                <div className='equal width fields'>
                    <div className='field'>
                        <label>Title</label>
                        <div className='ui fluid input'>
                            <input 
                            type='text' 
                            placeholder='Title...' 
                            name= 'title' 
                            value={this.state.blog.title} 
                            onChange={this.handleChange}/>
                        </div>
                    </div>
                </div>
                <div className='equal width fields'>
                    <div className='field'>
                        <label>Author</label>
                        <div className='ui fluid input'>
                            <input 
                            type='text' 
                            placeholder='Author...' 
                            name= 'author' 
                            value={this.state.blog.author} 
                            onChange={this.handleChange}/>
                        </div>
                    </div>
                </div>
                <div className='equal width fields'>
                    <div className='field'>
                        <label>Subject</label>
                        <div className='ui fluid input'>
                            <input 
                            type='text' 
                            placeholder='Subject...' 
                            name= 'subject' 
                            value={this.state.blog.subject} 
                            onChange={this.handleChange}/>
                        </div>
                    </div>
                </div>
                <div className='equal width fields'>
                    <div className='field'>
                        <label>Article</label>
                        <div className='ui fluid input'>
                            <input 
                            type='text' 
                            placeholder='Article...' 
                            name= 'article' 
                            value={this.state.blog.article} 
                            onChange={this.handleChange}/>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <button type='submit' className='ui button'>
                        Submit
                    </button>
                </div>
            </form>
            <hr />
            {this.state.blogs.map((blog,idx) =>{
    return(
        <div key={blog.objectId} className= 'ui card'
   style={{width: '75%', padding:'20px'}}
   >
       <div className='content'>
           <div className='header'>{blog.title}</div>
          
           <span style={{fontWeight:'bold' , color:'3b3b3b'}}>
           <div className='meta'>Author: {blog.author}</div>
           </span>
           <span style={{fontWeight:'bold' , color:'3b3b3b'}}>
           <div className='meta'>Subject: {blog.subject}</div>
           </span>
           <hr />
           <div className='description'>{blog.article}</div>
      
       <button className="ui primary button" style={{margin:'10px 15px'}} 
       >
           Delete
       </button>
       </div>
   </div>
    )
})} 
        </div>
        );
    }
}



export default Form;