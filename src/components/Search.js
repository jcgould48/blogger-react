import React from 'react'


const Search = (props) => {
return (
<div>
    <h1>SearchComponent</h1>
<form className='ui form'>
    <div className='field'>
        <input 
        onChange={props.handleChange} 
        type='text' 
        placeholder='Search By Subject...'
        value={props.searchTerm}
        />
    </div>
</form>
</div>
)
}

export default Search;