import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import ShowPage from "./pages/ShowPage";
import AdminPage from "./pages/AdminPage";

function App() {

  return (
    <div className="Container">
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/admin" element={<AdminPage/>} />
            <Route path="/blogs" element={<ListPage/>} />
            <Route path="/blogs/:id" element={<ShowPage/>} />
            <Route path="/blogs/create" element={<CreatePage/>} />
            <Route path="/blogs/:id/edit" element={<EditPage/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
