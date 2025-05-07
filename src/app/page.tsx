'use client';

import { ArrowRight, ShoppingBag, Truck, Shield, RefreshCw } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Welcome to <span className="text-indigo-400">ShopHub</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Your one-stop destination for all your shopping needs. Discover amazing products at unbeatable prices.
            </p>
            <Link 
              href="/product/1"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-lg bg-gray-700">
              <ShoppingBag className="h-8 w-8 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Wide Selection</h3>
              <p className="text-gray-300">Browse through thousands of products across various categories.</p>
            </div>
            <div className="p-6 rounded-lg bg-gray-700">
              <Truck className="h-8 w-8 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Fast Delivery</h3>
              <p className="text-gray-300">Get your orders delivered quickly and reliably.</p>
            </div>
            <div className="p-6 rounded-lg bg-gray-700">
              <Shield className="h-8 w-8 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Secure Shopping</h3>
              <p className="text-gray-300">Shop with confidence with our secure payment system.</p>
            </div>
            <div className="p-6 rounded-lg bg-gray-700">
              <RefreshCw className="h-8 w-8 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Easy Returns</h3>
              <p className="text-gray-300">Hassle-free returns and exchanges process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/product/1" className="group">
              <div className="relative rounded-lg overflow-hidden bg-gray-800 aspect-square">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors">Electronics</h3>
                  <p className="text-gray-300">Latest gadgets and devices</p>
                </div>
              </div>
            </Link>
            <Link href="/product/1" className="group">
              <div className="relative rounded-lg overflow-hidden bg-gray-800 aspect-square">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors">Fashion</h3>
                  <p className="text-gray-300">Trendy clothing and accessories</p>
                </div>
              </div>
            </Link>
            <Link href="/product/1" className="group">
              <div className="relative rounded-lg overflow-hidden bg-gray-800 aspect-square">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors">Home & Living</h3>
                  <p className="text-gray-300">Everything for your home</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
