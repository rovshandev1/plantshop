import { Link } from 'react-router-dom'

const LandingPage = () => (
    <div className="h-screen bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center flex flex-col justify-center items-center text-white px-4">
        <h1 className="text-5xl mb-4 font-bold drop-shadow-xl">Welcome to PlantShop</h1>
        <p className="text-xl mb-6 text-center max-w-xl drop-shadow-md">We sell vibrant, fresh houseplants that bring life and beauty to your home and workspace.</p>
        <Link to="/products" className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full text-white font-medium text-lg shadow-md transition-all duration-300">Get Started</Link>
    </div>
)

export default LandingPage