import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbars from "./components/Navbar";
import MemberForm from "./Login/MemberForm";
import HomePage from "./page/HomePage";
import Login from "./page/Login";
import Mypages from "./page/Mypages";
import Product from "./Product/Product";
import BoardMain from "./Board/BoardMain";
import Payment from "./page/Payment";
import PaymentTerminal from "../src/Payment/PaymentTerminal";

function App() {
  return (
    <div>
      <Navbars />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/member" element={<MemberForm />} />
        <Route path="/products" element={<Product />} />
        <Route path="/board" element={<BoardMain />} />
        <Route path="/mypage" element={<Mypages />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/last" element={<PaymentTerminal />} />
      </Routes>
    </div>
  );
}

export default App;
