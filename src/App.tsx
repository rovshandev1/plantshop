import { Routes, Route, BrowserRouter } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ProductsPage from './pages/ProductsPage'
import CartPage from './pages/CartPage'
import Header from './shared/Header.tsx'
import CheckoutPage from "./pages/CheckoutPage.tsx";
import ThankYouPage from "./pages/ThankYouPage.tsx";

const App = () => (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
    </BrowserRouter>
)

export default App
