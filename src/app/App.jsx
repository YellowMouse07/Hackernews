import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import LoginPage from "./pages/login/LoginPage";
import AboutAuthor from "./pages/author/AboutAuthor";
import CommentsMain from "./pages/comments/CommentsMain";
import Submit from "./pages/submit/Submit";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="login" element={<LoginPage />}></Route>
      <Route path="submit" element={<Submit />}></Route>
      <Route path="user/:id" element={<AboutAuthor />}></Route>
      <Route path="comment/:id" element={<CommentsMain />}></Route>
    </Routes>
  );
}

export default App;
