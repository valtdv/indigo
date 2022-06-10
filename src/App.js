import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./states/User";
import Login from "./pages/Login";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/post" element={<Post />} />
          </Routes>
        </div>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
