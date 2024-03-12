import React from 'react'
import { useSelector } from 'react-redux'

const App = () => {
  const selector = useSelector(state => state)
  console.log(selector)
  return (
    <div>App</div>
  )
}
export default App
