import React from "react";
import Header from "./components/Header";

export const ThemeContext = React.createContext({ primaryColor: "deepskyblue" }); // Here, deepskyblue is 
// the default value of our ThemeConext, If no provider is provided this will be used.

function App() {
  return (
    <ThemeContext.Provider value={{primaryColor: "coral"}}>
      <Header text="Hello World" />
      <ThemeContext.Provider value={{primaryColor: "green"}}>  
      {/* Overriding context value with nested providers, The value of nested provider will take effect here */}
        <Header text="This is a test"/>
      </ThemeContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
