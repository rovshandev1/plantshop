import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../entities/cart/slice'
import type {RootState} from "../app/store.ts";


const plants = [
    {
        id: 1,
        name: 'Snake Plant',
        price: 25,
        thumbnail: 'https://images.pexels.com/photos/3717097/pexels-photo-3717097.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Indoor'
    },
    {
        id: 2,
        name: 'Aloe Vera',
        price: 15,
        thumbnail: 'https://images.pexels.com/photos/1320997/pexels-photo-1320997.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Succulent'
    },
    {
        id: 3,
        name: 'Peace Lily',
        price: 30,
        thumbnail: 'https://images.pexels.com/photos/6208086/pexels-photo-6208086.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Flowering'
    },
    {
        id: 4,
        name: 'Spider Plant',
        price: 20,
        thumbnail: 'https://images.pexels.com/photos/4751978/pexels-photo-4751978.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Indoor'
    },
    {
        id: 5,
        name: 'Cactus',
        price: 18,
        thumbnail: 'https://images.pexels.com/photos/1391487/pexels-photo-1391487.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Succulent'
    },
    {
        id: 6,
        name: 'Orchid',
        price: 35,
        thumbnail: 'https://images.pexels.com/photos/8016450/pexels-photo-8016450.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Flowering'
    },
    {
        id: 7,
        name: 'Monstera Deliciosa',
        price: 40,
        thumbnail: 'https://images.pexels.com/photos/7084309/pexels-photo-7084309.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Indoor'
    },
    {
        id: 8,
        name: 'Jade Plant',
        price: 22,
        thumbnail: 'https://images.pexels.com/photos/6208087/pexels-photo-6208087.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Succulent'
    },
    {
        id: 9,
        name: 'Lavender',
        price: 28,
        thumbnail: 'https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Flowering'
    }
]


const ProductsPage = () => {
    const dispatch = useDispatch()
    const cart = useSelector((state: RootState) => state.cart.items)

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-8 text-center">🌿 Our Plants</h2>
            {['Indoor', 'Succulent', 'Flowering'].map(category => (
                <div key={category} className="mb-10">
                    <h3 className="text-2xl font-semibold mb-4 text-green-700">{category}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {plants.filter(p => p.category === category).map(plant => {
                            const added = cart.find(i => i.id === plant.id)
                            return (
                                <div key={plant.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center">
                                    <img src={plant.thumbnail} alt={plant.name} className="w-full h-40 object-cover mb-2 rounded" />
                                    <h4 className="text-lg font-bold">{plant.name}</h4>
                                    <p className="text-gray-600 mb-2">${plant.price}</p>
                                    <button
                                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-300 w-full"
                                        disabled={!!added}
                                        onClick={() => dispatch(addToCart(plant))}
                                    >
                                        {added ? '✔ Added' : '➕ Add to Cart'}
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductsPage