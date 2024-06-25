import React from 'react';
import './TodoSearch.css';

function TodoSearch({
  searchValue,
  setSearchValue
}){
    return (
        <input 
          className="TodoSearch" 
          value={searchValue}
          placeholder="Cortar Cebolla" 
          onChange={(event) =>{
            setSearchValue(event.target.value);
          }}
        /> 
    );
  }

export { TodoSearch };