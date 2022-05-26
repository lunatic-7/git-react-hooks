import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState('')

  const handleChange = (e) => {
    setName(e.target.value)
  }

  return (
    <div>
      <h1>My name is: {name}</h1>
      <input type="text" value={name} onChange={handleChange} />
    </div>
  )
}

export default App
