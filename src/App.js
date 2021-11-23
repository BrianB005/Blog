import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/login";
import Register from "./pages/register";
import SinglePost from "./pages/SinglePost";
import AddPost from "./pages/AddPost";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Account from "./pages/Account";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/posts/add" element={<AddPost />} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<Account />} />
        <Route path="/posts/:id" element={<SinglePost />} />
      </Routes>
    </Router>
  );
}

export default App;
