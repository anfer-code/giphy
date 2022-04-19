import { useState, memo } from "react";

function SearchForm({onSubmit}) {
  const [valueFilter, setValueFilter] = useState("")

  const handlerSubmit = ev => {
    ev.preventDefault()
    onSubmit({keyword: valueFilter})
  }
  
  const handlerChange = ev => {
    setValueFilter(ev.target.value)
  }
    
  return (
      <form 
      className="Searcher"
      onSubmit={handlerSubmit}
    >
      <input 
        value={valueFilter}
        onChange={handlerChange}
      />
    </form>
  )
};

export default memo(SearchForm)

