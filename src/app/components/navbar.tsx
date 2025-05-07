"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { SearchBar } from "@/components/SearchBar";
import { ShoppingCart, User, Users } from "lucide-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { useUser } from "@clerk/nextjs";

export default function Navbar() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { totalItems } = useCart();

    const handleSearch = (query: string) => {
        // Implement search functionality
        console.log('Searching for:', query)
    }

    return (
        <header className="bg-gray-800 border-b border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-xl font-bold text-indigo-400 hover:text-indigo-300 transition-colors">
                            ShopHub
                        </Link>
                    </div>

                    {/* Search Bar - Hidden on mobile */}
                    <div className="hidden md:block flex-1 max-w-xl mx-4">
                        <SearchBar onSearch={handleSearch} />
                    </div>

                    {/* Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <Link 
                            href="/" 
                            className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors ${pathname === '/' ? 'text-indigo-400' : ''}`}
                        >
                            Home
                        </Link>
                        <Link 
                            href="/about" 
                            className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors ${pathname === '/about' ? 'text-indigo-400' : ''}`}
                        >
                            About
                        </Link>
                        <Link 
                            href="/product/1" 
                            className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors ${pathname.startsWith('/product/') ? 'text-indigo-400' : ''}`}
                        >
                            Products
                        </Link>
                        <Link 
                            href="/users-server" 
                            className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${pathname.startsWith('/users-') ? 'text-indigo-400' : ''}`}
                        >
                            <Users className="h-4 w-4" />
                            Users
                        </Link>
                    </nav>

                    {/* Cart and Auth Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link
                            href="/cart"
                            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors relative"
                        >
                            <ShoppingCart className="h-5 w-5 inline-block mr-1" />
                            Cart
                            {totalItems > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                    {totalItems}
                                </span>
                            )}
                        </Link>
                        
                        <SignedIn>
                            <UserButton afterSignOutUrl="/" />
                        </SignedIn>
                        <SignedOut>
                            <Link
                                href="/sign-in"
                                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                Sign in
                            </Link>
                            <Link
                                href="/sign-up"
                                className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors"
                            >
                                Sign up
                            </Link>
                        </SignedOut>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            type="button"
                            className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded={mobileMenuOpen}
                            onClick={() => setMobileMenuOpen((open) => !open)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden${mobileMenuOpen ? '' : ' hidden'}`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {/* Search Bar - Mobile */}
                    <div className="px-3 py-2">
                        <SearchBar onSearch={handleSearch} />
                    </div>
                    <Link
                        href="/"
                        className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        About
                    </Link>
                    <Link
                        href="/product/1"
                        className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Products
                    </Link>
                    <Link
                        href="/users-server"
                        className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
                    >
                        <Users className="h-4 w-4" />
                        Users
                    </Link>
                    <Link
                        href="/cart"
                        className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Cart ({totalItems})
                    </Link>
                    
                    {/* Auth Links - Mobile */}
                    <SignedIn>
                        <div className="px-3 py-2">
                            <UserButton afterSignOutUrl="/" />
                        </div>
                    </SignedIn>
                    <SignedOut>
                        <Link
                            href="/sign-in"
                            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Sign in
                        </Link>
                        <Link
                            href="/sign-up"
                            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Sign up
                        </Link>
                    </SignedOut>
                </div>
            </div>
        </header>
    );
}
