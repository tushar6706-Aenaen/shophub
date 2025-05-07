"use client"

import { useCart } from "@/context/CartContext"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Trash2, Plus, Minus } from "lucide-react"

export default function CartPage() {
    const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart()

    if (items.length === 0) {
        return (
            <div className="container mx-auto px-4 py-8">
                <Card className="p-8 bg-gray-800 border-gray-700">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-gray-200 mb-4">Your cart is empty</h2>
                        <p className="text-gray-400 mb-6">Add some products to your cart to see them here.</p>
                        <Button
                            onClick={() => window.location.href = '/product/1'}
                            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                        >
                            Continue Shopping
                        </Button>
                    </div>
                </Card>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-200 mb-8">Shopping Cart</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-4">
                    {items.map((item) => (
                        <Card key={`${item.id}-${item.color}`} className="p-4 bg-gray-800 border-gray-700">
                            <div className="flex items-center justify-between">
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-gray-200">{item.name}</h3>
                                    {item.color && (
                                        <p className="text-gray-400">Color: {item.color}</p>
                                    )}
                                    <p className="text-purple-400">${item.price.toFixed(2)}</p>
                                </div>
                                
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center space-x-2">
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            className="h-8 w-8 border-gray-700 text-gray-400 hover:bg-gray-700"
                                        >
                                            <Minus className="h-4 w-4" />
                                        </Button>
                                        <span className="text-gray-200 w-8 text-center">{item.quantity}</span>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            className="h-8 w-8 border-gray-700 text-gray-400 hover:bg-gray-700"
                                        >
                                            <Plus className="h-4 w-4" />
                                        </Button>
                                    </div>
                                    
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => removeItem(item.id)}
                                        className="text-red-400 hover:text-red-500 hover:bg-red-500/10"
                                    >
                                        <Trash2 className="h-5 w-5" />
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                    <Card className="p-6 bg-gray-800 border-gray-700">
                        <h2 className="text-xl font-semibold text-gray-200 mb-4">Order Summary</h2>
                        
                        <div className="space-y-4">
                            <div className="flex justify-between text-gray-400">
                                <span>Subtotal</span>
                                <span>${totalPrice.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-400">
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>
                            <div className="border-t border-gray-700 pt-4">
                                <div className="flex justify-between text-lg font-semibold text-gray-200">
                                    <span>Total</span>
                                    <span>${totalPrice.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 space-y-4">
                            <Button
                                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                            >
                                Proceed to Checkout
                            </Button>
                            <Button
                                variant="outline"
                                className="w-full border-gray-700 text-gray-400 hover:bg-gray-700"
                                onClick={clearCart}
                            >
                                Clear Cart
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
} 