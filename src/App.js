import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";


const routes = [
  {path: '/', component: HomePage},
  {path: '/blogs', component: ListPage},
  {path: '/blogs/create', component: CreatePage},
  {path: '/blogs/edit', component: EditPage},
]

function App() {

  return (
    <div className="Container">
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/blogs" element={<ListPage/>}> Blogs</Route>
            <Route path="/blogs/create" element={<CreatePage/>}> Blogs create</Route>
            <Route path="/blogs/edit" element={<EditPage/>}> Blogs edit</Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
