import React, { useState } from "react"

export const UserContext = React.createContext([])

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const [posts, setPosts] = useState([])

  const value = {
    user,
    setUser,
    posts,
    setPosts,
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}
