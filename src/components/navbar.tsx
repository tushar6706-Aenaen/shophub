"use client"

import Link from "next/link"

import { ShoppingCart, Menu, X, Search, User } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { useCart } from "@/context/CartContext"

interface CartItem {
    id: string
    name: string
    price: number
    quantity: number
}

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { items, totalItems } = useCart()

    return (
        <nav className="bg-gray-900 border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-white text-xl font-bold">
                            AudioShop
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-gray-300 hover:text-white">
                            Home
                        </Link>
                        <Link href="/products" className="text-gray-300 hover:text-white">
                            Products
                        </Link>
                        <Link href="/about" className="text-gray-300 hover:text-white">
                            About
                        </Link>
                    </div>

                    {/* Search Bar - Desktop */}
                    <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
                        <div className="relative w-full">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                            <Input
                                type="text"
                                placeholder="Search products..."
                                className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                    </div>

                    {/* Cart and User Icons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="/cart" className="text-gray-300 hover:text-white relative">
                            <ShoppingCart className="h-6 w-6" />
                            {totalItems > 0 && (
                                <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                    {totalItems}
                                </span>
                            )}
                        </Link>
                        <Link href="/sign-in" className="text-gray-300 hover:text-white">
                            <User className="h-6 w-6" />
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-300 hover:text-white"
                        >
                            {isMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                            href="/"
                            className="block px-3 py-2 text-gray-300 hover:text-white"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/products"
                            className="block px-3 py-2 text-gray-300 hover:text-white"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Products
                        </Link>
                        <Link
                            href="/about"
                            className="block px-3 py-2 text-gray-300 hover:text-white"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            href="/cart"
                            className="block px-3 py-2 text-gray-300 hover:text-white"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Cart ({totalItems})
                        </Link>
                        <Link
                            href="/sign-in"
                            className="block px-3 py-2 text-gray-300 hover:text-white"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Sign In
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
} 