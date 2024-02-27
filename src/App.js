import { Provider } from 'react-redux';
import './App.css';
import HomePage from './pages/HomePage';
import store from './store';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import ProductDetailPage from './pages/ProductDetailPage';
import CategoryPage from './pages/CategoryPage';
import Login from './components/Login';
import AllProductPage from './pages/AllProductPage';
import ProfilePage from './pages/ProfilePage';



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
         
            <Route path="/" Component={HomePage} />
            <Route path="/products/:title/:id" element={<ProductDetailPage />} />
            <Route path="/category/:title/:id" element={<CategoryPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/giftCards" element={<AllProductPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;