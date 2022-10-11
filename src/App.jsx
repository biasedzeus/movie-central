import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import MovieDetail from "./Pages/movieDetail/MovieDetail";
import { ThemeProvider } from "@mui/material";
import {theme} from "./utils/theme";
import SearchhFeed from "./components/SearchFeed";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route path="/">
            <Route path="/" index element={<Home />} />
            <Route path="search/:searchWord" element={<SearchhFeed/>}/>
            <Route path="movie">
              <Route path=":id" element={<MovieDetail />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
