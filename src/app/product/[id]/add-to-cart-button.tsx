"use client"

import { useState } from "react"
import { useCart } from "@/context/CartContext"
import { ShoppingCart, Heart, Share2 } from "lucide-react"

type Product = {
    id: string
    name: string
    price: number
}

export function AddToCartButton({ product }: { product: Product }) {
    const [quantity, setQuantity] = useState(1)
    const { addToCart } = useCart()

    const handleAddToCart = () => {
        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity
        })
    }

    return (
        <div className="flex items-center gap-4">
            <div className="flex items-center border border-gray-700 rounded-lg">
                <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
                >
                    -
                </button>
                <span className="px-4 py-2 text-white">{quantity}</span>
                <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
                >
                    +
                </button>
            </div>

            <button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
            </button>

            <button className="p-3 text-gray-400 hover:text-white transition-colors">
                <Heart className="h-6 w-6" />
            </button>

            <button className="p-3 text-gray-400 hover:text-white transition-colors">
                <Share2 className="h-6 w-6" />
            </button>
        </div>
    )
} 