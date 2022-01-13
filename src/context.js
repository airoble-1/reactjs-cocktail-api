import React from "react"

import { createContext, useState, useContext, useEffect } from "react"

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState("a")
  const [cocktails, setCocktails] = useState([])

  useEffect(() => {
    const getCocktails = async () => {
      setLoading(true)
      try {
        const response = await fetch(`${url}${query}`)
        if (!response.ok) {
          throw Error(`${response.statusText}: ${response.status}  `)
        }
        const data = await response.json()
        const { drinks } = data
        if (drinks) {
          const cocktails = drinks.map((drink) => {
            const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
              drink
            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              info: strAlcoholic,
              glass: strGlass,
            }
          })
          setCocktails(cocktails)
        }
        setLoading(false)
      } catch (error) {
        console.error(error.message)
        setLoading(false)
      }
    }
    getCocktails()
  }, [query])

  return (
    <AppContext.Provider value={{ cocktails, loading, query, setQuery }}>
      {children}
    </AppContext.Provider>
  )
}
const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useGlobalContext }
