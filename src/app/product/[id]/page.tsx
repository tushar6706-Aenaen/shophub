"use client"

import { useState } from "react"
import { useCart } from "@/context/CartContext"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ShoppingCart } from "lucide-react"
import { use } from "react"

const colors = [
    { name: "Black", value: "#000000" },
    { name: "White", value: "#FFFFFF" },
    { name: "Red", value: "#FF0000" },
    { name: "Blue", value: "#0000FF" },
    { name: "Green", value: "#00FF00" },
]

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params)
    const [selectedColor, setSelectedColor] = useState(colors[0])
    const [quantity, setQuantity] = useState(1)
    const { addItem } = useCart()

    const handleAddToCart = () => {
        addItem({
            id: resolvedParams.id,
            name: "Premium Product",
            price: 99.99,
            quantity: quantity,
            color: selectedColor.name
        })
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image/Color Display */}
            <div className="relative aspect-square rounded-lg overflow-hidden">
                <div 
                    className="w-full h-full transition-colors duration-300"
                    style={{ backgroundColor: selectedColor.value }}
                />
            </div>

            {/* Product Details */}
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-200">Premium Product</h1>
                    <p className="text-2xl font-semibold text-purple-400 mt-2">$99.99</p>
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-gray-200 mb-3">Color</h2>
                    <div className="flex gap-3">
                        {colors.map((color) => (
                            <button
                                key={color.value}
                                onClick={() => setSelectedColor(color)}
                                className={`w-10 h-10 rounded-full border-2 transition-all ${
                                    selectedColor.value === color.value
                                        ? "border-purple-500 scale-110"
                                        : "border-gray-700 hover:border-gray-600"
                                }`}
                                style={{ backgroundColor: color.value }}
                                title={color.name}
                            />
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-gray-200 mb-3">Quantity</h2>
                    <div className="flex items-center gap-4">
                        <Button
                            variant="outline"
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            className="border-gray-700 text-gray-400 hover:bg-gray-700"
                        >
                            -
                        </Button>
                        <span className="text-gray-200 w-8 text-center">{quantity}</span>
                        <Button
                            variant="outline"
                            onClick={() => setQuantity(quantity + 1)}
                            className="border-gray-700 text-gray-400 hover:bg-gray-700"
                        >
                            +
                        </Button>
                    </div>
                </div>

                <Button
                    onClick={handleAddToCart}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                </Button>

                <div className="space-y-4">
                    <h2 className="text-lg font-semibold text-gray-200">Product Features</h2>
                    <ul className="space-y-2 text-gray-400">
                        <li>• Premium quality materials</li>
                        <li>• Multiple color options</li>
                        <li>• Durable and long-lasting</li>
                        <li>• Easy to maintain</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}