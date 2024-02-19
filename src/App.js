import { Provider } from 'react-redux';
import './App.css';
import HomePage from './pages/HomePage';
import store from './store/Store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartPage from './pages/CartPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CategoryPage from './pages/CategoryPage';
import Login from './components/Login';

function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/cart" Component={CartPage} />
            <Route path="/products/:title" element={<ProductDetailPage/>} />
            <Route path="/category/:title" element={<CategoryPage/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </BrowserRouter>
    </Provider>
  );
}

export default App;