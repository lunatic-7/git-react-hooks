import React from "react";
import ReactDOM from "react-dom";

let values = [];
let currentHook = 0;

function useState(initialValue) {
  if (typeof values[currentHook] === 'undefined') {
    values[currentHook] = initialValue
  }

  let hookIndex = currentHook;
  function setState(nextValue) {
    values[hookIndex] = nextValue
    ReactDOM.render(<App />, document.getElementById("root"))
  }

  return [values[currentHook++], setState]
}


const App = () => {
  currentHook = 0;
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [enableFirstName, setEnableFirstName] = useState(false)

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value)
  }

  const handleEnableName = (e) => {
    setEnableFirstName(!enableFirstName)
  }

  return (
    <div>
      <h1>My name is: { enableFirstName ? name : ''} {lastName}</h1>
      <input type="checkbox" value={enableFirstName} onChange={handleEnableName}/>
      <input type="text" value={name} onChange={handleChange} />
      <input type="text" value={lastName} onChange={handleLastNameChange} />
    </div>
  )
}

export default App
