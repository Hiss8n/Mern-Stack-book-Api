import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import AddBooks from "./pages/addBooks";
import Header from "./components/Header";
import DeleteABook from "./pages/DeleteBook";
import EditBook from "./pages/EditBook";
import Details from "./pages/details";

function App() {
  return (
    <div className="w-full h-full text-blue-500">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/add" element={<AddBooks/>} />
        <Route path="/books/details/:id" element={<Details/>} />
        <Route path="/books/edit/:id" element={<EditBook/>} />
        <Route path="/books/delete/:id" element={<DeleteABook />} />
      </Routes>
    </div>
  );
}

export default App;
