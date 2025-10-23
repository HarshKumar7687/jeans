import React, { createContext } from 'react'


export const authDataContext = createContext();
function AuthContext({children}) {

    let serverUrl = "https://jeans-backend.onrender.com"

    let value = {
        serverUrl
    }
  return (
    <div>
      <authDataContext.Provider value={serverUrl}>
        {children}
      </authDataContext.Provider>
    </div>
  )
}

export default AuthContext
