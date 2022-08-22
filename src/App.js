import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbars from "./components/Navbar";
import MemberForm from "./Login/MemberForm";
import Board from "./page/Board";
import HomePage from "./page/HomePage";
import Login from "./page/Login";
import Mypages from "./page/Mypages";
import ProductAll from "./page/ProductAll";
import ProductDetail from "./page/ProductDetail";

function App() {
  return (
    <div>
      <Navbars />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/member" element={<MemberForm />} />
        <Route path="/products" element={<ProductAll />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/board" element={<Board />} />
        <Route path="/mypage" element={<Mypages />} />
      </Routes>
    </div>
  );
}

export default App;
