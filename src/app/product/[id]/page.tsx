"use client"

import { use } from "react"
import { Star } from "lucide-react"
import { AddToCartButton } from "@/app/product/[id]/add-to-cart-button"

type Product = {
    id: string
    name: string
    price: number
    description: string
    rating: number
    reviews: number
    images: string[]
    features: string[]
}

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params)

    // Mock product data
    const product: Product = {
        id: id,
        name: "Premium Wireless Headphones",
        price: 299.99,
        description: "Experience crystal-clear sound with our premium wireless headphones. Features include active noise cancellation, 30-hour battery life, and comfortable over-ear design.",
        rating: 4.5,
        reviews: 128,
        images: [
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
            "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=800&q=80",
            "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80",
        ],
        features: [
            "Active Noise Cancellation",
            "30-hour Battery Life",
            "Bluetooth 5.0",
            "Built-in Microphone",
            "Foldable Design"
        ]
    }

    return (
        <div className="min-h-screen bg-gray-900 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Product Images */}
                    <div className="space-y-4">
                        <div className="aspect-square rounded-lg bg-gray-800 overflow-hidden">
                            <img
                                src={product.images[0]}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            {product.images.map((image, index) => (
                                <div
                                    key={index}
                                    className="aspect-square rounded-lg bg-gray-800 overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                                >
                                    <img
                                        src={image}
                                        alt={`${product.name} ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl font-bold text-white mb-2">{product.name}</h1>
                            <div className="flex items-center gap-2">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-5 w-5 ${
                                                i < Math.floor(product.rating)
                                                    ? "text-yellow-400"
                                                    : "text-gray-600"
                                            }`}
                                            fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                                        />
                                    ))}
                                </div>
                                <span className="text-gray-400">({product.reviews} reviews)</span>
                            </div>
                        </div>

                        <div className="text-3xl font-bold text-white">${product.price}</div>

                        <p className="text-gray-300">{product.description}</p>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-white">Features</h3>
                            <ul className="space-y-2">
                                {product.features.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-2 text-gray-300">
                                        <div className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <AddToCartButton product={product} />
                    </div>
                </div>
            </div>
        </div>
    )
}