import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, remove } from '../entities/cart/slice'
import { Link } from 'react-router-dom'
import type {RootState} from "../app/store.ts";

const CartPage = () => {
    const cart = useSelector((state: RootState) => state.cart.items)
    const dispatch = useDispatch()

    const totalItems = cart.reduce((sum, i) => sum + (i.quantity || 0), 0)
    const totalCost = cart.reduce((sum, i) => sum + i.price * (i.quantity || 1), 0)

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">🛒 Shopping Cart</h2>
            <p className="text-lg">Total Items: <strong>{totalItems}</strong></p>
            <p className="text-lg mb-6">Total Cost: <strong>${totalCost}</strong></p>
            <div className="space-y-4">
                {cart.map(item => (
                    <div key={item.id} className="border p-4 rounded flex items-center gap-4 bg-white shadow">
                        <img src={item.thumbnail} alt={item.name} className="w-16 h-16 rounded" />
                        <div className="flex-1">
                            <h4 className="font-bold text-lg">{item.name}</h4>
                            <p className="text-gray-500">${item.price}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <button onClick={() => dispatch(decrement(item.id))} className="bg-gray-200 px-2">−</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => dispatch(increment(item.id))} className="bg-gray-200 px-2">+</button>
                        </div>
                        <button onClick={() => dispatch(remove(item.id))} className="text-red-600">✖</button>
                    </div>
                ))}
            </div>
            <div className="mt-8 flex gap-4 justify-center">
                <Link to="/products" className="bg-gray-300 px-4 py-2 rounded">
                    ← Continue Shopping
                </Link>
                <Link to="/checkout" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
                    Proceed to Checkout →
                </Link>
            </div>

        </div>
    )
}

export default CartPage