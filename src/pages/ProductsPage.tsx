import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../entities/cart/slice'
import type {RootState} from "../app/store.ts";


const plants = [
    {
        id: 1,
        name: 'Snake Plant',
        price: 25,
        thumbnail: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90',
        category: 'Indoor'
    },
    {
        id: 2,
        name: 'Aloe Vera',
        price: 15,
        thumbnail: 'https://images.unsplash.com/photo-1616627984395-d8c61cbd9806',
        category: 'Succulent'
    },
    {
        id: 3,
        name: 'Peace Lily',
        price: 30,
        thumbnail: 'https://images.unsplash.com/photo-1622611405148-83829f9ae7f4',
        category: 'Flowering'
    },
    {
        id: 4,
        name: 'Spider Plant',
        price: 20,
        thumbnail: 'https://images.unsplash.com/photo-1616627453734-e1aa047b27fc',
        category: 'Indoor'
    },
    {
        id: 5,
        name: 'Cactus',
        price: 18,
        thumbnail: 'https://images.unsplash.com/photo-1599305445672-07db5b403491',
        category: 'Succulent'
    },
    {
        id: 6,
        name: 'Orchid',
        price: 35,
        thumbnail: 'https://images.unsplash.com/photo-1612392061788-bb51fae4eb6f',
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