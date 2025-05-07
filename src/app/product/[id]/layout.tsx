'use client'

import { Card } from "@/components/ui/card"
import { SearchBar } from "@/components/SearchBar"
import { useCart } from "@/context/CartContext"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

export default function ProductLayout({children}: {children : React.ReactNode}){
    const { totalItems, totalPrice } = useCart()

    const handleSearch = (query: string) => {
        // Implement search functionality
        console.log('Searching for:', query)
    }

    return (
        <div className="min-h-screen bg-gray-900">
            {/* Search Section */}
            <div className="border-b border-gray-800 bg-gray-800/50 backdrop-blur-sm">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex justify-center">
                        <div className="w-full max-w-xl">
                            <SearchBar onSearch={handleSearch} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                <Card className="p-6 bg-gray-800/80 backdrop-blur-sm border-gray-700 shadow-lg">
                    {children}
                </Card>
            </main>

            {/* Footer */}
            <footer className="mt-auto border-t border-gray-800 bg-gray-800/50 backdrop-blur-sm">
                <div className="container mx-auto px-4 py-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                                About Us
                            </h3>
                            <p className="text-gray-400">
                                Your one-stop destination for premium products and exceptional shopping experience.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                                Quick Links
                            </h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-purple-400">Terms & Conditions</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-purple-400">Privacy Policy</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-purple-400">Contact Us</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                                Newsletter
                            </h3>
                            <div className="flex gap-2">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    className="flex-1 px-4 py-2 rounded-md border border-gray-700 bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                                    Subscribe
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-400">
                        <p>© 2024 ShopHub. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}