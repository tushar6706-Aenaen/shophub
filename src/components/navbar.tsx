"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Menu } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { useState } from "react"

export function Navbar() {
    const { totalItems } = useCart()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="border-b border-gray-800 bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="text-xl font-bold">
                        Audio Store
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:gap-6">
                        <Link href="/products" className="text-gray-300 hover:text-white">
                            Products
                        </Link>
                        <Link href="/about" className="text-gray-300 hover:text-white">
                            About
                        </Link>
                        <Button asChild variant="ghost" size="icon" className="relative">
                            <Link href="/cart">
                                <ShoppingCart className="h-5 w-5" />
                                {totalItems > 0 && (
                                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-purple-500 text-xs text-white">
                                        {totalItems}
                                    </span>
                                )}
                            </Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <Menu className="h-5 w-5" />
                    </Button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            <Link
                                href="/products"
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Products
                            </Link>
                            <Link
                                href="/about"
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                href="/cart"
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Cart ({totalItems})
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
} 