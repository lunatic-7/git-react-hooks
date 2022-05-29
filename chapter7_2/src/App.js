import React, { useReducer, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import appReducer from "./reducers";
import { ThemeContext, StateContext } from "./contexts";
import HeaderBar from "./pages/HeaderBar";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";



function App() {

  const [theme, setTheme] = useState({
    primaryColor: "deepskyblue",
    secondaryColor: "coral"
  })

  const [state, dispatch] = useReducer(appReducer, { user: '', posts: [], error: '' })
  const { user } = state;

  useEffect(() => {

    if (user) {
      document.title = `${user} - React Hooks Blog`;
    }
    else {
      document.title = 'React Hooks Blog'
    }

  }, [user])

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <ThemeContext.Provider value={theme}>
        <div style={{ padding: 7 }}>
          <Router>
          <HeaderBar setTheme={setTheme} />
              <br />
              <hr />
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/view/:id" element={<PostPage />} />
            </Routes>
          </Router>
        </div>
      </ThemeContext.Provider>
    </StateContext.Provider >
  );
}

export default App;