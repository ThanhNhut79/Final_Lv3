import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MovieList from "./Components/MovieList";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="header-item">
            <div>
              <MenuOutlined />
            </div>
            <div className="title-header">MOVIE UI</div>
            <div>
              <SearchOutlined />
            </div>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<MovieList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
