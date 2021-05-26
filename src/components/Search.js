import React from 'react'

const Search = props => {
  
  const handleChange = (event) => {
    props.updateSearch(event.target.value)
  }
  
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={props.search} onChange={handleChange}/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
