import React, { createContext, useContext, useEffect, useState } from 'react'
import { getStorageItem, setStorageItem } from '../../utils/handleLocalStorage'

export const DefaultValues = {
  isInList: () => false,
  addToList: () => null,
  removeFromList: () => null,
  clearList: () => null
}

export const CatchContext = createContext(DefaultValues)

const CatchProvider = ({ children }) => {
  const [catchItems, setCatchItems] = useState([])

  // get items from localStorage to set catchItems initial value
  useEffect(() => {
    const data = getStorageItem()
    if (data) setCatchItems(data)
  }, [])

  // query pokemos by IDs to update context here

  const isInList = (id) => (id ? catchItems.includes(id) : false)

  const setItems = (items) => {
    setCatchItems(items)
    setStorageItem(items)
  }

  const addToList = (id) => {
    setItems([...catchItems, id])
  }

  const removeFromList = (id) => {
    const filterItems = catchItems.filter((itemId) => itemId !== id)
    setItems(filterItems)
  }

  const clearList = () => {
    setItems([])
  }

  return (
    <CatchContext.Provider
      value={{
        isInList,
        addToList,
        removeFromList,
        clearList
      }}
    >
      {children}
    </CatchContext.Provider>
  )
}

const useCatch = () => useContext(CatchContext)

export { CatchProvider, useCatch }
