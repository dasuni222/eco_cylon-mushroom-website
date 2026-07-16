import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ExportOrders from './pages/ExportOrders';
import Wholesale from './pages/Wholesale';
import Blog from './pages/Blog';
import Profile from './pages/Profile';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/export-orders" element={<ExportOrders />} />
        <Route path="/wholesale" element={<Wholesale />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
