"use client"

import { useCart } from "@/context/CartContext"
import { Trash2, Plus, Minus } from "lucide-react"

export default function CartPage() {
    const { items, removeFromCart, updateQuantity } = useCart()

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return (
        <div className="min-h-screen bg-gray-900 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-white mb-8">Shopping Cart</h1>

                {items.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-gray-400 text-lg">Your cart is empty</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Cart Items */}
                        <div className="lg:col-span-2 space-y-4">
                            {items.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg"
                                >
                                    <div className="w-24 h-24 bg-gray-700 rounded-lg" />
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                                        <p className="text-gray-400">${item.price}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                            className="p-1 text-gray-400 hover:text-white transition-colors"
                                        >
                                            <Minus className="h-4 w-4" />
                                        </button>
                                        <span className="text-white w-8 text-center">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            className="p-1 text-gray-400 hover:text-white transition-colors"
                                        >
                                            <Plus className="h-4 w-4" />
                                        </button>
                                    </div>
                                    <div className="text-lg font-semibold text-white">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </div>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                                    >
                                        <Trash2 className="h-5 w-5" />
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-gray-800 rounded-lg p-6 space-y-4">
                                <h2 className="text-xl font-semibold text-white">Order Summary</h2>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-gray-300">
                                        <span>Subtotal</span>
                                        <span>${total.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-300">
                                        <span>Shipping</span>
                                        <span>Free</span>
                                    </div>
                                    <div className="flex justify-between text-gray-300">
                                        <span>Tax</span>
                                        <span>${(total * 0.1).toFixed(2)}</span>
                                    </div>
                                    <div className="border-t border-gray-700 pt-4">
                                        <div className="flex justify-between text-white font-semibold">
                                            <span>Total</span>
                                            <span>${(total * 1.1).toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                                    Proceed to Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
} 