import { Link } from 'react-router-dom'

const LandingPage = () => (
    <div className="h-screen bg-[url('https://source.unsplash.com/1600x900/?plants')] bg-cover bg-center flex flex-col justify-center items-center text-white px-4">
        <h1 className="text-5xl mb-4 font-bold drop-shadow-lg">Welcome to PlantShop</h1>
        <p className="text-xl mb-6 text-center max-w-xl">We sell vibrant, fresh houseplants that bring life and beauty to your home and workspace.</p>
        <Link to="/products" className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full text-white font-medium text-lg shadow-lg transition-all duration-300">Get Started</Link>
    </div>
)

export default LandingPage