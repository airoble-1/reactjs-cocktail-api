import React from "react"
import { useGlobalContext } from "../context"

const SearchForm = () => {
  return (
    <section className="search">
      <h2 className="section-title">Search Cocktails</h2>
      <form className="search-form">
        <div className="form-control">
          <label>Search For Your Favorite Cocktail</label>
          <input type="text" name="name"></input>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
