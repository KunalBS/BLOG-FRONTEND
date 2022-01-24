import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Setting from "./pages/Setting";
import Single from "./pages/Single";
import Write from "./pages/Write";
import Topbar from './components/topbar/Topbar';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  const currentUser = true;
  return (
    <BrowserRouter>
      <Topbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Routes>
        <Route path="/register" element={currentUser ? <Home/> : <Register/>}/>
      </Routes>
      <Routes>
        <Route path="/login" element={currentUser ? <Home/> : <Login/>}/>
      </Routes>
      <Routes>
        <Route path="/write" element={currentUser ? <Write/> : <Login/>}/>
      </Routes>
      <Routes>
        <Route path="/setting" element={currentUser ? <Setting/> : <Login/>}/>
      </Routes>
      <Routes>
        <Route path="/post/:postId" element={<Single/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
