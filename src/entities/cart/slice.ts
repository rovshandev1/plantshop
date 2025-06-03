import {createSlice, type PayloadAction} from '@reduxjs/toolkit'

export interface Product {
    id: number
    name: string
    price: number
    thumbnail: string
    category: string
    quantity?: number
}

interface CartState {
    items: Product[]
}

const initialState: CartState = { items: [] }

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<Product>) {
            state.items.push({ ...action.payload, quantity: 1 })
        },
        increment(state, action: PayloadAction<number>) {
            const item = state.items.find(i => i.id === action.payload)
            if (item) item.quantity!++
        },
        decrement(state, action: PayloadAction<number>) {
            const item = state.items.find(i => i.id === action.payload)
            if (item && item.quantity! > 1) item.quantity!--
        },
        remove(state, action: PayloadAction<number>) {
            state.items = state.items.filter(i => i.id !== action.payload)
        },
        clearCart(state) {
            state.items = []
        }
    }
})

export const { addToCart, increment, decrement, remove, clearCart } = cartSlice.actions
export default cartSlice.reducer

