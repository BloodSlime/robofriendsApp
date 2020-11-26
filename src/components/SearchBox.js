import React from 'react';
import '../SearchBox.css';

const SearchBox = ({searchfield, searchChange}) => {
    return (
     <div class='search'>
        <input 
        className='pa3 ba b--green bg-lighttest-blue'
        type='search'
        placeholder='search_robots' 
        onChange={searchChange}
        />
     </div>
    );
}

export default SearchBox;