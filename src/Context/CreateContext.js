import React from 'react'

const Context = React.createContext({
  submit: true,
  toggleSubmit: () => {},
})

export default Context
