import React from "react"
import { useGlobalContext } from "../context"

const SearchForm = () => {
  return (
    <section className="section search">
      <form className="search-form">
        <div className="form-control">
          <label>Search Your Favorite Cocktail</label>
          <input type="text" name="name"></input>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
