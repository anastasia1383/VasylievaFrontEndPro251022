import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Users from "./pages/Users";
import Albums from "./pages/Albums";
import Photos from "./pages/Photos";
import NoPage from "./pages/NoPage";

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Users />} />
          <Route path="users" element={<Users />} > 
            <Route path="albums" element={<Albums />}> 
            </Route>
          </Route>
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
