import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LinkPage from "./Components/LinkPage";
import BlogList from "./Components/BlogList";

function App() {

  return (
    <div className="Container">
      <BrowserRouter>
      <LinkPage />
        <Routes>
          <Route path="/"></Route>
          <Route path="/blogs" element={<BlogList />}> Blogs</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
