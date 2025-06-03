import {Link} from "react-router-dom";

const ThankYouPage = () => (
    <div className="p-6 max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-4">🎉 Thank You!</h2>
        <p className="text-lg mb-6">Your order has been placed successfully.</p>
        <Link to="/products" className="bg-green-500 text-white px-4 py-2 rounded">
            Back to Shop
        </Link>
    </div>
)

export default ThankYouPage
