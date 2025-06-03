import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import type {RootState} from "../app/store.ts";

const Header = () => {
    const count = useSelector((state: RootState) =>
        state.cart.items.reduce((sum, i) => sum + (i.quantity || 0), 0)
    )

    return (
        <header className="p-4 bg-gradient-to-r from-green-500 to-green-700 text-white shadow-lg flex justify-between items-center">
            <Link to="/products" className="text-2xl font-extrabold">🪴 PlantShop</Link>
            <nav className="flex gap-6 text-lg">
                <Link to="/">Home</Link>
                <Link to="/cart">🛒 Cart ({count})</Link>
            </nav>
        </header>
    )
}

export default Header