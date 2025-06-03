import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../entities/cart/slice'
import { Link, useNavigate } from 'react-router-dom'
import type {RootState} from "../app/store.ts";

const CheckoutPage = () => {
    const cart = useSelector((state: RootState) => state.cart.items)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const totalCost = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0)

    const handleCheckout = () => {
        const order = {
            items: cart,
            total: totalCost,
            date: new Date().toISOString(),
        }

        console.log('📦 Order placed:', order)

        dispatch(clearCart())

        navigate('/thank-you')
    }

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">✅ Checkout</h2>

            {cart.length === 0 ? (
                <div className="text-center">
                    <p className="text-lg mb-4">Your cart is empty.</p>
                    <Link to="/products" className="bg-green-500 text-white px-4 py-2 rounded">
                        Shop Now →
                    </Link>
                </div>
            ) : (
                <div className="space-y-6">
                    <div className="bg-white rounded shadow p-4">
                        <h3 className="text-xl font-semibold mb-4">📦 Order Summary</h3>
                        <ul className="space-y-2">
                            {cart.map(item => (
                                <li key={item.id} className="flex justify-between">
                                    <span>{item.name} × {item.quantity}</span>
                                    <span>${item.price * (item.quantity || 1)}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="border-t mt-4 pt-4 flex justify-between font-bold text-lg">
                            <span>Total:</span>
                            <span>${totalCost}</span>
                        </div>
                    </div>

                    <div className="bg-white rounded shadow p-4">
                        <h3 className="text-xl font-semibold mb-4">🧾 Payment</h3>
                        <button
                            onClick={handleCheckout}
                            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                        >
                            Place Order
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CheckoutPage
