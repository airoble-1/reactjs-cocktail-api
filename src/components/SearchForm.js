import React from "react"
import { useGlobalContext } from "../context"
import { useRef } from "react"

const SearchForm = () => {
  const searchInput = useRef()
  const { setQuery } = useGlobalContext()

  const setSearchQuery = () => {
    setQuery(searchInput.current.value)
  }

  const handleSubmit = (e) => {
    e.prevenDefault()
  }
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Search Your Favorite Cocktail</label>
          <input
            type="text"
            name="name"
            ref={searchInput}
            onChange={setSearchQuery}
          ></input>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
