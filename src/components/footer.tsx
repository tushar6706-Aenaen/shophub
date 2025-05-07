import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
    return (
        <footer className="border-t border-gray-800 bg-gray-900">
            <div className="container mx-auto px-4 py-8">
                <div className="grid gap-8 md:grid-cols-4">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Audio Store</h3>
                        <p className="text-sm text-gray-400">
                            Your one-stop shop for premium audio equipment. Experience sound like never before.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/products" className="text-sm text-gray-400 hover:text-white">
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-sm text-gray-400 hover:text-white">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/cart" className="text-sm text-gray-400 hover:text-white">
                                    Cart
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Contact Us</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>Email: support@audiostore.com</li>
                            <li>Phone: (555) 123-4567</li>
                            <li>Address: 123 Audio Street, Music City</li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Newsletter</h3>
                        <p className="text-sm text-gray-400">
                            Subscribe to our newsletter for the latest updates and offers.
                        </p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                            />
                            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Social Links & Copyright */}
                <div className="mt-8 border-t border-gray-800 pt-8">
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <p className="text-sm text-gray-400">
                            © 2024 Audio Store. All rights reserved.
                        </p>
                        <div className="flex gap-4">
                            <Button variant="ghost" size="icon" asChild>
                                <Link href="#" aria-label="Facebook">
                                    <Facebook className="h-5 w-5" />
                                </Link>
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                                <Link href="#" aria-label="Twitter">
                                    <Twitter className="h-5 w-5" />
                                </Link>
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                                <Link href="#" aria-label="Instagram">
                                    <Instagram className="h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
} 